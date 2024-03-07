import React from "react";
import Logo from "@/public/icons8-wallet-50.png";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="/" className="flex items-center">
            <Image src={Logo} className="mr-3" alt="Landwind Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              PayHabib
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <Link
              href="/login"
              className="bg-purple-100 text-purple-500 rounded-md px-3 py-2 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Log in
            </Link>
          </div>
          <div
            className="items-center justify-between lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#services"
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
