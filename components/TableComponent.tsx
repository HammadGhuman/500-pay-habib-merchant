import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import logo from "@/public/logo.svg";

const TableComponent = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px] font-bold">
            CUSTOMER ACCOUNT NO.
          </TableHead>
          <TableHead className="w-[100px] font-bold">STATUS</TableHead>
          <TableHead className="w-[100px] font-bold">DESCRIPTION</TableHead>
          <TableHead className="w-[100px] font-bold">BANK</TableHead>
          <TableHead className="font-bold">DATE</TableHead>
          <TableHead className="w-[100px] font-bold">CUSTOMER</TableHead>
          <TableHead className="font-bold">AMOUNT</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-blue-400">12345678901234</TableCell>
          <div className="bg-green-100 text-green-600 rounded-full items-center">
            <TableCell>Succeeded</TableCell>
          </div>
          <TableCell>Payment Purpose</TableCell>
          <TableCell>Bank AL Habib</TableCell>
          <TableCell>Feb 15, 2023</TableCell>
          <TableCell className="flex flex-row items-center justify-center gap-2">
            <Image src={logo} alt={"logo"} className="rounded-full" />
            Ryan Young
          </TableCell>
          <TableCell className="font-bold">500 PKR</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableComponent;
