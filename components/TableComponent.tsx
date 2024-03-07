import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { getPayments } from "@/actions/action";

const TableComponent = async () => {

type Payment = {
  id: number;
  customerName: string;
  customerEmail: string;
  paymentAmount: string;
  merchantAccountNumber: string;
  customerAccountNumber: string;
  paymentPurpose: string;
  customerBankName: string;
  customerId: number;
  merchantId: number;
  paymentStatus: string;
  created_at: Date;
  updated_at: Date;
};

type Props = {
  payments: Payment[];
};

const TableComponent = ({ payments }: Props) => {
  console.log(payments);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className=" font-bold">CUSTOMER ACCOUNT NO.</TableHead>
          <TableHead className=" font-bold">STATUS</TableHead>
          <TableHead className=" font-bold">DESCRIPTION</TableHead>
          <TableHead className=" font-bold">BANK</TableHead>
          <TableHead className="font-bold">DATE</TableHead>
          <TableHead className=" font-bold">CUSTOMER</TableHead>
          <TableHead className="font-bold">AMOUNT</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments &&
          payments.map((item) => (
            <>
              <TableRow>
                <TableCell className="text-blue-400">
                  {item.customerAccountNumber}
                </TableCell>
                {item.paymentStatus === "pending" && (
                  <div className="bg-gray-100 text-gray-600 rounded-full ">
                    <TableCell className="text-center w-full">
                      Pending
                    </TableCell>
                  </div>
                )}
                <TableCell>{item.paymentPurpose}</TableCell>
                <TableCell>{item.customerBankName}</TableCell>
                <TableCell>
                  {new Date(item.created_at)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                </TableCell>
                <TableCell className="flex flex-row items-center justify-center gap-2">
                  <Image src={logo} alt={"logo"} className="rounded-full" />
                  {item.customerName}
                </TableCell>
                <TableCell className="font-bold">
                  ${item.paymentAmount}
                </TableCell>
              </TableRow>
            </>
          ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
