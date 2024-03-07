"use server";
import { requestFormSchema } from "@/lib/validator";
import * as z from "zod";
import prisma from "@/util/prismadb";

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
    if (!newCustomer) {
      return { success: false, error: "Error Creating New Customer" };
    }

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
      },
    });

    console.log(payment);

    if (!payment) {
      return {
        success: false,
        data: "unable to create payment request",
      };
    }

    const map = new Map();
    map.set("00", "02");
    map.set("01", "11");
    map.set("02", "31");
    map.set("03", payment.customerBankName);
    map.set("04", payment.customerAccountNumber);
    map.set("05", payment.paymentAmount);
    map.set("06", payment.paymentPurpose);
    map.set("07", "reserved");
    map.set("08", "reserved");
    map.set("09", "reserved");
    map.set("10", "1234");

    return {
      success: true,
      data: { payment },
    };
  } catch (err) {
    console.log(err);
    return { success: false, error: "something went wrong" };
  }
}
