import Example from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import React from "react";

const page = () => {
  return (
    <div className="container py-10">
      <div className="border-b-2 py-3">
        <h1 className="font-semibold text-4xl">Reports</h1>
      </div>
      <div className="flex flex-col mt-10 gap-10">
        <div>
          <Example />
        </div>
        {/* <div>
          <PieChart />
        </div> */}
      </div>
    </div>
  );
};

export default page;
