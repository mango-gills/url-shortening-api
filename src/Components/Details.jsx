import React from "react";
import brandRecognition from "../assets/icon-brand-recognition.svg";
import detailedRecords from "../assets/icon-detailed-records.svg";
import fullyCustomizable from "../assets/icon-fully-customizable.svg";

const Details = () => {
  return (
    <section className="w-full px-4 mx-auto my-16 tablet:px-0 ">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-4xl font-bold">Advanced Statistics</h1>
        <p className=" w-full tablet:w-[550px] mx-auto font-normal text-[#9e9aa7]">
          Track how your links are performing across the weeb with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col justify-around space-y-12 tablet:space-y-0 tablet:flex-row">
        <div className="relative flex flex-col items-center justify-center px-4 py-8 bg-white rounded-md tablet:m-4 tablet:items-start">
          <div className="bg-[#3b3054] h-14 w-14 rounded-full flex items-center justify-center p-4 absolute top-[-20px]">
            <img src={brandRecognition} alt="brand-recognition" />
          </div>
          <h2 className="mt-6 tablet:mt-10 mb-4 font-bold text-[#3b3054]">
            Brand Recognition
          </h2>
          <p className="text-sm leading-6 text-gray-500 w-[95%] text-center tablet:text-left">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center px-4 py-8 bg-white rounded-md tablet:m-4 tablet:items-start">
          <div className="bg-[#3b3054] h-14 w-14 rounded-full flex items-center justify-center p-4 absolute top-[-20px]">
            <img src={detailedRecords} alt="detailed-records" />
          </div>
          <h2 className="mt-6 tablet:mt-10 mb-4 font-bold text-[#3b3054]">
            Detailed Records
          </h2>
          <p className="text-sm leading-6 text-gray-500 w-full tablet:w-[95%] text-center tablet:text-left">
            Gain insights into who is clicking your links. Knowing when and
            where people engange with your content helps inform better
            decisions.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center px-4 py-8 bg-white rounded-md tablet:m-4 tablet:items-start">
          <div className="bg-[#3b3054] h-14 w-14 rounded-full flex items-center justify-center p-4 absolute top-[-20px]">
            <img src={fullyCustomizable} alt="fully-customizable" />
          </div>
          <h2 className="mt-6 tablet:mt-10 mb-4 font-bold text-[#3b3054]">
            Fully Customizable
          </h2>
          <p className="text-sm leading-6 text-gray-500 w-full tablet:w-[95%] text-center tablet:text-left">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
