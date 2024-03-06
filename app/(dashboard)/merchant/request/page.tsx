import RequestForm from "@/components/RequestForm";
import React from "react";

const page = () => {
  return (
    <div className="container py-10">
      <div className="border-b-2 py-3">
        <h1 className="font-semibold text-4xl">Payment Request</h1>
      </div>
      <RequestForm />
    </div>
  );
};

export default page;
