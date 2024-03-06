import React from "react";
import { Button } from "./ui/button";
import iconwallet from "@/public/icons8-wallet-50.png";
import Image from "next/image";
const NavbarMechant = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <Image src={iconwallet} alt="wallet" />
        <h1 className="font-extrabold">PayHabib</h1>
      </div>
      <div>
        <Button className="bg-white border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300">
          Create
        </Button>
      </div>
    </div>
  );
};

export default NavbarMechant;
