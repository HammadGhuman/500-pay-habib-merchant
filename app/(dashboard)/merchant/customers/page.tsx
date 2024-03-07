import { DataTableDemo } from "@/components/DataTableDemo";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/helper";
import React from "react";
import prisma from "@/util/prismadb";
async function getCustomer() {
  try {
    const session = await getSession();
    const customers = await prisma.merchantCustomer.findMany({
      where: {
        merchantId: session.userWithoutPassword.id,
      },
      include: {
        customer: true,
      },
    });
    if (customers) {
      return { success: true, data: customers };
    } else {
      return { success: false, error: "No customers" };
    }
  } catch (err) {
    console.log(err);
    return { success: false, error: "Something went wrong" };
  }
}

const page = async () => {
  const customers = await getCustomer();
  console.log(customers);
  return (
    <div className="container py-10">
      <div className="border-b-2 py-3 flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-4xl">Customers</h1>
        </div>
        <div className="flex gap-2">
          <Button className="bg-white border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300">
            Upload
          </Button>
          <Button className="bg-white border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
            Export
          </Button>
        </div>
      </div>

      <DataTableDemo user={customers.data} />
    </div>
  );
};

export default page;
