"use client";

import * as React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DataTableDemo() {
  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>CUSTOMER</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>PHONE</TableHead>
            <TableHead>DEFAULT PAYMENT METHOD</TableHead>
            <TableHead>CREATE DATE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Subhan</TableCell>

            <TableCell>subhan@gmail.com</TableCell>
            <TableCell>03344202595</TableCell>
            <TableCell>Card Payment</TableCell>
            <TableCell>Feb 16, 2023</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
