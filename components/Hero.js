import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import img from "../public/assets/hero.jpg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-[#fff5f1] w-full h-screen px-6 lg:px-16 py-10 rounded-2xl">
      <Navbar />  
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-5 mt-16">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              Give emotions <br className="lg:flex hidden"/> to your loved <br className="lg:flex hidden" /> ones
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Makes a bouquet and pick up a gift with <br  className="lg:flex hidden"/> your wishes. Deliver to any corner of the city
            </p>
            <Link href={"#product"} className="btn btn-sm lg:btn-lg bg-[#a42b55] text-white rounded-full border-none w-36 lg:w-44 capitalize">Get Started</Link>
          </div>
          <Image
          src={img}
          alt=""
          width={750}
          height={200}
          className="rounded-xl mt-9"
          />
        </div>
      </div>
      </section>
 
  );
};

export default Hero;
