import React from "react";
import brandRecognition from "../assets/icon-brand-recognition.svg";
import detailedRecords from "../assets/icon-detailed-records.svg";
import fullyCustomizable from "../assets/icon-fully-customizable.svg";

const Details = () => {
  return (
    <section className="w-full px-4 py-10 mx-auto my-[4.5rem] tablet:px-0 ">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-4xl font-bold">Advanced Statistics</h1>
        <p className=" w-full tablet:w-[550px] mx-auto font-normal text-[#9e9aa7]">
          Track how your links are performing across the weeb with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="relative flex flex-col justify-between tablet:flex-row">
        <div className="relative flex flex-col items-center justify-center px-4 py-8 mb-16 bg-white rounded-md tablet:px-8 tablet:m-4 tablet:items-start z-[5] laptop:h-[280px]">
          <div className="bg-[#3b3054] h-14 w-14 rounded-full flex items-center justify-center p-4 absolute top-[-20px] laptop:h-16 laptop:w-16">
            <img src={brandRecognition} alt="brand-recognition" />
          </div>
          <h2 className="mt-6 tablet:mt-10 mb-4 text-lg font-bold text-[#3b3054]">
            Brand Recognition
          </h2>
          <p className="text-sm leading-6 text-gray-500 w-full tablet:w-[95%] text-center tablet:text-left laptop:leading-8 laptop:text-base">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center px-4 py-8 mb-16 bg-white rounded-md tablet:m-4 laptop:mt-16 tablet:items-start laptop:px-8 z-[5] laptop:h-[280px]">
          <div className="bg-[#3b3054] h-14 w-14 rounded-full flex items-center justify-center p-4 absolute top-[-20px] laptop:h-16 laptop:w-16">
            <img src={detailedRecords} alt="detailed-records" />
          </div>
          <h2 className="mt-6 tablet:mt-10 mb-4 text-lg font-bold text-[#3b3054]">
            Detailed Records
          </h2>
          <p className="text-sm leading-6 text-gray-500 w-full tablet:w-[95%] text-center tablet:text-left laptop:leading-8 laptop:text-base">
            Gain insights into who is clicking your links. Knowing when and
            where people engange with your content helps inform better
            decisions.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center px-4 py-8 bg-white rounded-md tablet:m-4 tablet:items-start laptop:px-8 z-[5] laptop:h-[280px] laptop:mt-32">
          <div className="bg-[#3b3054] h-14 w-14 rounded-full flex items-center justify-center p-4 absolute top-[-20px] laptop:h-16 laptop:w-16">
            <img src={fullyCustomizable} alt="fully-customizable" />
          </div>
          <h2 className="mt-6 tablet:mt-10 text-lg mb-4 font-bold text-[#3b3054]">
            Fully Customizable
          </h2>
          <p className="text-sm leading-6 text-gray-500 w-full tablet:w-[95%] text-center tablet:text-left laptop:leading-8 laptop:text-base">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
        {/* <hr className="absolute border-4 border-[#2acfcf] w-[600px] mx-auto right-0 left-0 top-[42%] z-[1]" /> */}
        <hr className="hidden absolute tablet:block border-4 border-[#2acfcf] w-[500px] mx-auto right-0 left-0 top-[42%] z-[1]" />
        <hr className="absolute tablet:hidden border-4 border-[#2acfcf] w-[0] h-[500px] mx-auto right-0 left-0 top-[18%] z-[1]" />
      </div>
    </section>
  );
};

export default Details;
