import React from "react";

const Product = () => {
  return (
    <section id="product">
      <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
       Key Our Product
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      Choose your favorite product now !! 
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <img src="/assets/flow1.jpg" alt="v1" className="rounded-3xl "/>
          <p className="text-2xl font-semibold">Pink Luxury</p>
          <div className="flex items-center gap-2">
            <img src="/assets/italy.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          Italian HangFlow Bouquet
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/flow2.jpg" alt="v1" className="rounded-3xl"/>
          <p className="text-2xl font-semibold">Gradient Tulips Fyd</p>
          <div className="flex items-center gap-2">
            <img src="/assets/spain.svg" alt="itersfgjds" />
            <p className="text-gray-500">
            Spanish Flowers Bouquet
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/flow3.jpg" alt="v1" className="rounded-3xl"/>
          <p className="text-2xl font-semibold">Daisy Yellow Tie</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          English Dais Hungt
          </p>
          </div>
       
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Product;
