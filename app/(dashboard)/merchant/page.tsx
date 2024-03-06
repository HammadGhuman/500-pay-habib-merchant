import HeroCard from "@/components/HeroCard";
import React from "react";

const page = () => {
  return (
    <div className="container py-10">
      <div className="border-b-2 py-3">
        <h1 className="font-semibold text-4xl">Dashboard</h1>
      </div>
      <HeroCard />
    </div>
  );
};

export default page;
