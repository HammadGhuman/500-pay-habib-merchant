import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardComponent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <p>1,380 PKR</p>
      </CardContent>
      <CardFooter>
        <button className="bg-white border-2 border-purple-500 hover:bg-purple-500 hover:text-white rounded-full px-2 py-1">
          234 records
        </button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
