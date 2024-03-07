import Image from "next/image";
import React from "react";
import HeroPng from "@/public/hero.png";
import { Button } from "./ui/button";
import Link from "next/link";
function Hero() {
  return (
    <section className="bg-purple-700">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">
            Optimize business <br />
            payments.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">
            Payment processing platform that facilitates transactions between
            businesses and their customers{" "}
          </p>
          <div>
            <Link href={"/login"}>
              <Button className="bg-white text-purple-700 hover:bg-white hover:opacity-80 transition-all duration-300">
                Open Account
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={HeroPng} alt="hero image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
