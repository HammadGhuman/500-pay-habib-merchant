"use client";
import {
  ClipboardMinus,
  DollarSign,
  HandCoins,
  LayoutDashboard,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-5">
      <div
        className={`flex gap-2 ${
          pathname === "/merchant"
            ? "bg-purple-600 text-white"
            : "hover:bg-purple-600 hover:text-white"
        } font-bold hover:bg-purple-600 hover:text-white px-5 py-5 rounded-md transition-all duration-300`}
      >
        <LayoutDashboard />
        <Link href={"/merchant"} className="">
          Dashboard
        </Link>
      </div>
      <div
        className={`flex gap-2 ${
          pathname === "/merchant/payments"
            ? "bg-purple-600 text-white"
            : "hover:bg-purple-600 hover:text-white"
        } font-bold hover:bg-purple-600 hover:text-white px-5 py-5 rounded-md transition-all duration-300`}
      >
        <DollarSign />
        <Link href={"/merchant/payments"}>Payments</Link>
      </div>
      <div
        className={`flex gap-2 ${
          pathname === "/merchant/customers"
            ? "bg-purple-600 text-white"
            : "hover:bg-purple-600 hover:text-white"
        } font-bold hover:bg-purple-600 hover:text-white px-5 py-5 rounded-md transition-all duration-300`}
      >
        <Users />
        <Link href={"/merchant/customers"}>Customers</Link>
      </div>
      <div
        className={`flex gap-2 ${
          pathname === "/merchant/request"
            ? "bg-purple-600 text-white"
            : "hover:bg-purple-600 hover:text-white"
        } font-bold hover:bg-purple-600 hover:text-white px-5 py-5 rounded-md transition-all duration-300`}
      >
        <HandCoins />
        <Link href={"/merchant/request"}>Payment Request</Link>
      </div>
      <div
        className={`flex gap-2 ${
          pathname === "/merchant/reports"
            ? "bg-purple-600 text-white"
            : "hover:bg-purple-600 hover:text-white"
        } font-bold hover:bg-purple-600 hover:text-white px-5 py-5 rounded-md transition-all duration-300`}
      >
        <ClipboardMinus />
        <Link href={"/merchant/reports"}>Report</Link>
      </div>
    </div>
  );
};

export default Sidebar;
