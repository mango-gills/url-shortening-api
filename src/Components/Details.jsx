import React from "react";
import brandRecognition from "../assets/icon-brand-recognition.svg";
import detailedRecords from "../assets/icon-detailed-records.svg";
import fullyCustomizable from "../assets/icon-fully-customizable.svg";

const Details = () => {
  return (
    <section className="w-full mx-auto mt-20 h-[600px]">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-4xl font-bold">Advanced Statistics</h1>
        <p className="text-sm text-gray-500">
          Track how your links are performing across the weeb with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex justify-around">
        <div className="relative p-4 m-4 bg-white rounded-md">
          <div className="bg-[#3b3054] h-14 w-14 rounded-full flex items-center justify-center p-4 absolute top-[-20px]">
            <img src={brandRecognition} alt="brand-recognition" />
          </div>
          <h2 className="mt-10 mb-4 font-bold">Brand Recognition</h2>
          <p className="text-gray-500">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className="relative p-4 m-4 bg-white rounded-md">
          <div className="bg-[#3b3054] h-14 w-14 rounded-full flex items-center justify-center p-4 absolute top-[-20px]">
            <img src={detailedRecords} alt="detailed-records" />
          </div>
          <h2 className="mt-10 mb-4 font-bold">Detailed Records</h2>
          <p className="text-gray-500">
            Gain insights into who is clicking your links. Knowing when and
            where people engange with your content helps inform better
            decisions.
          </p>
        </div>
        <div className="relative p-4 m-4 bg-white rounded-md">
          <div className="bg-[#3b3054] h-14 w-14 rounded-full flex items-center justify-center p-4 absolute top-[-20px]">
            <img src={fullyCustomizable} alt="fully-customizable" />
          </div>
          <h2 className="mt-10 mb-4 font-bold">Fully Customizable</h2>
          <p className="text-gray-500">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
