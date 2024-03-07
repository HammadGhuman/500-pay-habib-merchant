"use server";
import { requestFormSchema } from "@/lib/validator";
import * as z from "zod";
import prisma from "@/util/prismadb";
import QRCode from "qrcode";

type PaymentRequest = z.infer<typeof requestFormSchema>;

//TODO Bank name is not coming from the form component
export async function createPaymentRequest(
  input: PaymentRequest,
  merchantID: number
): Promise<{ success: boolean; error?: string } | any> {
  try {
    const body = requestFormSchema.safeParse(input);
    if (!body.success) {
      return { success: false, error: body.error.format() };
    }

    const { data } = body;
    console.log(data);
    const customer = await prisma.customer.findFirst({
      where: {
        email: data.customerEmail,
      },
    });

    if (!customer) {
      return { success: false, error: "Customer not found" };
    }

    const merchantCustomer = await prisma.merchantCustomer.findFirst({
      where: {
        customerId: customer.id,
        //TODO add real Merchant ID from cookie
        merchantId: merchantID,
      },
    });
    let newCustomer = null;
    if (!merchantCustomer) {
      newCustomer = await prisma.merchantCustomer.create({
        data: {
          customerId: customer.id,
          merchantId: 1,
        },
      });
    }

    const map = new Map();
    map.set("00", "02");
    map.set("01", "11");
    map.set("02", "31");
    map.set("03", data.customerBankName);
    map.set("04", data.customerAccountNumber);
    map.set("05", data.paymentAmount);
    map.set("06", data.paymentPurpose);
    map.set("07", "reserved");
    map.set("08", "reserved");
    map.set("09", "reserved");
    map.set("10", "1234");
    console.log(map);
    let mapString = "";
    map.forEach(([key, value]) => {
      mapString += `${key}:${value}, `;
    });

    mapString = mapString.slice(0, -2);
    console.log(mapString);

    const binaryData = stringToBinary(mapString);
    const qrcode = await QRCode.toDataURL(binaryData);
    console.log(qrcode);
    const payment = await prisma.payment.create({
      data: {
        customerAccountNumber: data.customerAccountNumber,
        customerBankName: data.customerBankName,
        customerEmail: data.customerEmail,
        customerName: data.customerName,
        merchantAccountNumber: data.merchantAcountNumber,
        paymentAmount: data.paymentAmount,
        paymentPurpose: data.paymentPurpose,
        cusomerId: customer.id,
        merchantId: merchantID,
        qrcode,
      },
    });

    if (!payment) {
      return { success: false, error: "unable to create payment request" };
    }

    console.log(payment);

    return {
      success: true,
      data: { payment },
    };
  } catch (err) {
    console.log(err);
    return { success: false, error: "something went wrong" };
  }
}

function binaryToString(binary: string) {
  let str = "";
  const binaryArray = binary.split(" ");

  for (let i = 0; i < binaryArray.length; i++) {
    const charCode = parseInt(binaryArray[i], 2);
    const char = String.fromCharCode(charCode);
    str += char;
  }

  return str;
}

function stringToBinary(str: string) {
  let binaryString = "";
  for (let i = 0; i < str.length; i++) {
    const binaryChar = str[i].charCodeAt(0).toString(2);
    binaryString += "0".repeat(8 - binaryChar.length) + binaryChar;
  }
  return binaryString;
}
