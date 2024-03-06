import React from "react";
import Image from "next/image";
import Link from "next/link";
import chart from "@/public/chart.jpeg";

const HeroCard = () => {
  return (
    <div className="bg-[#FAFAFA] px-10 py-10 my-5 rounded-md">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-2xl text-black">
          Getting start with us
        </h1>
        <div className="flex gap-5">
          <div>
            <Image src={chart} alt="chart" />
            <div className="flex flex-col gap-2 mt-5">
              <h1 className="font-semibold">Monitor Payment</h1>
              <p className="text-slate-600 text-sm max-w-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, impedit!
              </p>
              <Link
                href={"/"}
                className="text-purple-600 hover:text-purple-800"
              >
                Read more
              </Link>
            </div>
          </div>
          <div>
            <div>
              <Image src={chart} alt="chart" />
              <div className="flex flex-col gap-2 mt-5">
                <h1 className="font-semibold">Monitor Payment</h1>
                <p className="text-slate-600 text-sm max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, impedit!
                </p>
                <Link
                  href={"/"}
                  className="text-purple-600 hover:text-purple-800"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={chart} alt="chart" />
              <div className="flex flex-col gap-2 mt-5">
                <h1 className="font-semibold">Monitor Payment</h1>
                <p className="text-slate-600 text-sm max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, impedit!
                </p>
                <Link
                  href={"/"}
                  className="text-purple-600 hover:text-purple-800"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
