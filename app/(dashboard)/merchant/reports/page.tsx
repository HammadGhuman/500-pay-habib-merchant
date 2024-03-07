import Example from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import { getSession } from "@/lib/helper";
import React from "react";
import prisma from "@/util/prismadb";
async function getPayment() {
  try {
    const session = await getSession();
    const payments = await prisma.payment.findMany({
      where: {
        merchantId: session.userWithoutPassword.id,
      },
    });
    if (payments) {
      let total = {
        amount: 0,
        count: 0,
      };
      let pending = {
        amount: 0,
        count: 0,
      };
      let succeeded = {
        amount: 0,
        count: 0,
      };
      let rejected = {
        amount: 0,
        count: 0,
      };

      payments.forEach((pay) => {
        if (pay.paymentStatus === "succeeded") {
          succeeded.amount += parseInt(pay.paymentAmount);
          succeeded.count += 1;
        }
        if (pay.paymentStatus === "rejected") {
          rejected.amount += parseInt(pay.paymentAmount);
          rejected.count += 1;
        }
        if (pay.paymentStatus === "pending") {
          pending.amount += parseInt(pay.paymentAmount);
          pending.count += 1;
        }
        (total.amount += parseInt(pay.paymentAmount)), (total.count += 1);
      });
      console.log(payments);
      return {
        success: true,
        data: payments,
        total,
        succeeded,
        rejected,
        pending,
      };
    } else {
      return { success: false, error: "No Payments" };
    }
  } catch (err) {
    console.log(err);
    return { success: false, error: "Something went wrong" };
  }
}
const page = async () => {
  const payment = await getPayment();
  return (
    <div className="container py-10">
      <div className="border-b-2 py-3">
        <h1 className="font-semibold text-4xl">Reports</h1>
      </div>
      <div className="flex flex-col mt-10 gap-10">
        {/* <div>
          <Example />
        </div> */}
        <div>
          {payment && (
            <PieChart
              pending={payment.pending}
              succeeded={payment.succeeded}
              rejected={payment.rejected}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
