import Image from "next/image";
import React from "react";
import Feature1 from "@/public/undraw_customer_survey_re_v9cj.svg";
import Feature2 from "@/public/undraw_credit_card_payments_re_qboh.svg";
import Link from "next/link";
import { MoveRight } from "lucide-react";

function Section2() {
  return (
    <section id="solutions" className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-40 lg:space-y-40 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 my-10">
          <Image
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={Feature2}
            alt="feature image 2"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400 flex flex-col gap-5">
            <h1 className="text-zinc-500">YOU CAN</h1>
            <h2 className="mt-2 mb-4 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <span className="text-pink-500">Monitor</span> payments
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              View real-time updates on successful payments, refunds, and other
              transaction-related activities
            </p>
            <div className="flex flex-row items-center gap-2 text-pink-500 hover:text-pink-700 transition-all duration-300">
              <Link href={"/"} className="">
                Learn More
              </Link>
              <MoveRight />
            </div>
          </div>
        </div>
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 mt-10">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400 flex flex-col gap-5">
            <h1 className="text-zinc-500">YOU CAN</h1>
            <h2 className="mt-2 mb-4 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <span className="text-purple-500">Manage</span> customers
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              View real-time updates on successful payments, refunds, and other
              transaction-related activities
            </p>
            <div className="flex flex-row items-center gap-2 text-purple-500 hover:text-purple-700 transition-all duration-300">
              <Link href={"/"} className="">
                Learn More
              </Link>
              <MoveRight />
            </div>
          </div>
          <Image
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={Feature1}
            alt="dashboard feature image"
          />
        </div>
      </div>
    </section>
  );
}

export default Section2;
