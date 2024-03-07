import NavbarMechant from "@/components/NavbarMechant";
import Sidebar from "@/components/Sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className=" px-4 py-5 border-b-2 ">
        <NavbarMechant />
      </div>
      <div className="flex">
        <div className="w-1/4 bg-[#FAFAFA] min-h-screen border-r-2 ">
          <div className="mt-10 px-5 py-5">
            <Sidebar />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
