import React from "react";

const Values = () => {
  return (
    <section id="values">
      <div id="A1" className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        WHY CHOOSE US ?
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        Our Values
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/val1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Quality</p>
          <p className="text-gray-500 text-center">
          Fresh flowers that will enchant you! <br /> Feel the beauty of nature blending in with our colorful and fragrant fresh flowers. <br /> Add a touch of nature to your life with our charming collection of fresh flowers
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/val2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Delivery</p>
          <p className="text-gray-500 text-center">
          Enjoy fast and safe delivery service to the destination! <br /> With fresh flowers and attractive design choices, it will definitely make their day more colorful.  <br /> Order now and witness the happy smiles of your loved ones!
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <img src="/assets/val3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Message</p>
          <p className="text-gray-500 text-center">
          Send messages of love, hope or expressions of gratitude in an unforgettable way with the help of our florists. <br /> Trust us to send your special message through beautiful flowers. <br /> Order now and give your loved ones an unforgettable surprise!
          </p>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Values;
