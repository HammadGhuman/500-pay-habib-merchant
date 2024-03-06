import { DataTableDemo } from "@/components/DataTableDemo";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
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

      <DataTableDemo />
    </div>
  );
};

export default page;
