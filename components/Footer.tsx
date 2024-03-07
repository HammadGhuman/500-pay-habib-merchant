import React from "react";
import Logo from "@/public/icons8-wallet-50.png";
import Image from "next/image";
import { Input } from "./ui/input";
import Dropdown from "./Dropdown";
import { DropdownMenu } from "./ui/dropdown-menu";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";
function Footer() {
  return (
    <footer id="footer" className="bg-white">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 border-t-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-row items-center justify-center gap-2">
            <Image src={Logo} alt="logo" className="mt-5" />
            <h1 className="font-bold">PayHabib</h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">Product</h1>
            <div className="flex flex-col gap-2">
              <h1>Services</h1>
              <h1>Solutions</h1>
              <h1>Pricing</h1>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">Resources</h1>
            <div className="flex flex-col gap-2">
              <h1>Blog</h1>
              <h1>User guides</h1>
              <h1>Webinars</h1>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">Company</h1>
            <div className="flex flex-col gap-2">
              <h1>About</h1>
              <h1>Join us</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-purple-500 font-semibold text-lg">
              Subscribe to our newsletter
            </h1>
            <p>For product announcements and exclusive insights</p>
            <Input placeholder="Input your email" />
            <Button className="bg-purple-500 text-white hover:bg-purple-500 hover:opacity-80 transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-10 items-center justify-between">
          <div>
            <Input placeholder="English" className="max-w-xs" />
          </div>
          <div>
            <p className="text-zinc-500">
              2022 Brand, Inc. Privacy Terms Sitemap
            </p>
          </div>
          <div className="flex flex-row gap-10">
            <Twitter />
            <Facebook />
            <Linkedin />
            <Youtube />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
