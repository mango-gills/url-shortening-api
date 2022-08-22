import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#232127] w-full h-[600px]">
      <div
        className="w-full h-[200px] bg-cover bg-no-repeat bg-[#3b3054] text-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url(/bg-boost-desktop.svg)" }}
      >
        <h1 className="mb-4 text-2xl font-bold text-white">
          Boost your links today
        </h1>
        <button className="px-8 rounded-full py-3 bg-[#2acfcf] text-white text-normal laptop:py-2 laptop:px-8 font-bold laptop:text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Footer;
