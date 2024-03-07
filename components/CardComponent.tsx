import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeEuro, CheckCircle, Clock3, X } from "lucide-react";

const CardComponent = ({ total, pending, rejected, succeeded }: any) => {
  return (
    <div className="flex gap-5 items-center mt-5">
      <Card className="w-full bg-purple-100 border-2 hover:border-purple-500 transition-all duration-100">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <CardTitle>All Payments</CardTitle>
          <div className="bg-purple-500 rounded-full p-2">
            <BadgeEuro className="text-white" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{total.amount} PKR</p>
        </CardContent>
        <CardFooter>
          <button className="bg-white text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white rounded-full px-2 py-1">
            {total.count} records
          </button>
        </CardFooter>
      </Card>
      <Card className="w-full bg-green-100 border-2 hover:border-green-500  transition-all duration-100">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <CardTitle>Succeeded</CardTitle>
          <div className="rounded-full p-2 bg-green-500">
            <CheckCircle className="text-white" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{succeeded.amount} PKR</p>
        </CardContent>
        <CardFooter>
          <button className="bg-white text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white rounded-full px-2 py-1">
            {succeeded.count} records
          </button>
        </CardFooter>
      </Card>
      <Card className="w-full bg-yellow-100 border-2 hover:border-yellow-500 transition-all duration-100">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <CardTitle>Pending</CardTitle>
          <div className="bg-yellow-500 p-2 rounded-full">
            <Clock3 className="text-white" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{pending.amount} PKR</p>
        </CardContent>
        <CardFooter>
          <button className="bg-white text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-full px-2 py-1">
            {pending.count} records
          </button>
        </CardFooter>
      </Card>
      <Card className="w-full bg-red-100 border-2 hover:border-red-500  transition-all duration-100">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <CardTitle>Rejected</CardTitle>
          <div className="bg-red-500 rounded-full p-2">
            <X className="text-white" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{rejected.amount} PKR</p>
        </CardContent>
        <CardFooter>
          <button className="bg-white text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-full px-2 py-1">
            {rejected.count} records
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComponent;
