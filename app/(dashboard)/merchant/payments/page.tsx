import CardComponent from "@/components/CardComponent";
import TableComponent from "@/components/TableComponent";
import { Button } from "@/components/ui/button";
import React from "react";
import prisma from "@/util/prismadb";
import { getSession } from "@/lib/helper";
async function getPayment() {
  try {
    const session = await getSession();
    const payments = await prisma.payment.findMany({
      where: {
        merchantId: session.userWithoutPassword.id,
      },
    });
    if (payments) {
      return { success: true, data: payments };
    } else {
      return { success: false, error: "No Payments" };
    }
  } catch (err) {
    console.log(err);
    return { success: false, error: "Something went wrong" };
  }
}

const PaymentPage = async () => {
  const payment = await getPayment();
  if (payment.error) {
    console.log(payment);
  }
  console.log(payment);
  return (
    <div className="container py-10">
      <div className="border-b-2 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-4xl">Payments</h1>
          </div>
          <div className="flex gap-2">
            <Button className="bg-white border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300">
              Upload
            </Button>
            <Button className="bg-white border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
              Export
            </Button>
            <Button className="bg-purple-500 text-white hover:bg-purple-500 hover:opacity-80">
              + payment request
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <CardComponent />
        {payment && payment.data && <TableComponent payments={payment.data} />}
      </div>
    </div>
  );
};

export default PaymentPage;
