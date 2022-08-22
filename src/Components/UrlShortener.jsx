import React from "react";
import Details from "./Details";

const UrlShortener = () => {
  return (
    <section className="relative">
      <div className="relative mx-auto mt-12 tablet:mt-0 laptop:max-w-7xl">
        <div
          className="flex flex-col tablet:flex-row py-4 w-full tablet:py-8 bg-[#3b3054] bg-cover bg-no-repeat rounded-md items-center justify-center"
          style={{ backgroundImage: "url(/bg-shorten-desktop.svg)" }}
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="w-[80%] my-4 tablet:mr-4 h-12 rounded-md py-2 px-5"
          />
          <button
            className="rounded-md bg-[#2acfcf] text-white mt-4 tablet:mt-0 text-xl tablet:text-sm font-bold px-4 py-[.9rem]
          w-[80%] mx-auto tablet:mx-0 tablet:w-36"
          >
            Shorten It!
          </button>
        </div>

        <div>
          <ul className="w-full my-4">
            <li className="flex flex-col items-start justify-between px-8 py-4 bg-white rounded-md tablet:items-center tablet:flex-row">
              <p className="w-full pb-3 mb-2 text-gray-700 border-b-2 tablet:mb-0 tablet:pb-0 tablet:border-b-0">
                https://www.frontendmentor.io/home
              </p>
              <div className="flex flex-col items-start w-full space-y-2 tablet:space-y-0 tablet:w-[300px] tablet:items-center tablet:flex-row">
                <p className="mr-4 text-[#2acfcf]">https://www.asdfdfme</p>
                <button className="bg-[#2acfcf] px-5 py-2 rounded-md text-white text-xs w-full tablet:w-20">
                  Copy
                </button>
              </div>
            </li>
          </ul>
        </div>
        <Details />
      </div>
      <div className="absolute w-full bg-gray-200 h-[600px] z-[-1] top-[70px]" />
    </section>
  );
};

export default UrlShortener;
