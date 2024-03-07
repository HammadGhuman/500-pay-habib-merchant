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

export function DataTableDemo({ user }: { user: any }) {
  console.log(user);
  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>CUSTOMER</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>PHONE</TableHead>
            <TableHead>CREATE DATE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user &&
            user.map((item: any) => (
              <TableRow>
                <TableCell>{item.customer.username}</TableCell>

                <TableCell>{item.customer.email}</TableCell>
                <TableCell>{item.customer.phoneNumber}</TableCell>
                <TableCell>
                  {new Date(item.customer.created_at)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
