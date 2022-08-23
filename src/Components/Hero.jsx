import React from "react";
import heroImg from "../assets/illustration-working.svg";

const Hero = () => {
  return (
    <section className="py-10 laptop:py-20">
      <div className="grid grid-cols-1 gap-5 mx-auto tablet:grid-cols-2 tablet:gap-10 tablet:place-items-center tablet:max-w-7xl">
        <article className="px-4 text-center tablet:text-left tablet:px-0">
          <h1 className="mb-5 text-4xl font-bold tablet:text-5xl laptop:text-6xl text-slate-800">
            More than just shorter links
          </h1>
          <p className="mb-10 laptop:text-lg text-[#9e9aa7]">
            Build your brand's recognition and get detailed isnights on how your
            links are performing.
          </p>
          <button className="px-8 rounded-full py-3 bg-[#2acfcf] text-white text-normal laptop:py-2 laptop:px-8 font-bold laptop:text-lg">
            Get Started
          </button>
        </article>

        <article className="order-first mb-6 tablet:mb-0 tablet:order-last">
          <img src={heroImg} alt="hero-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
