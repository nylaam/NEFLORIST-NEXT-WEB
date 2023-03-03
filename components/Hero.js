import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";


const Hero = () => {
  return (
    <section className="hero">
      <Navbar />  
      <div className="items-center justify-center w-full h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="lg:flex-row justify-start lg:justify-between items-center gap-5 mt-96 md:ml-40 md:mt-52 mx-40 mt-">
          <div className="flex flex-col gap-5 lg:gap-5">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              Give emotions <br className="lg:flex hidden"/> to your loved <br className="lg:flex hidden" /> ones
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Makes a bouquet and pick up a gift with <br  className="lg:flex hidden"/> your wishes. Deliver to any corner of the city
            </p>
            <Link href={"#product"} className="btn btn-sm lg:btn-md bg-[#d3829f] text-white rounded border-none w-20 lg:w-40 capitalize">Get Started</Link>
          </div>
        </div>
      </div>
      </section>
 
  );
};

export default Hero;
