import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import PricingCard from "@/components/PricingCard";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Section2 />
      <Section4 />
      <PricingCard />

      <Footer />
    </main>
  );
}
