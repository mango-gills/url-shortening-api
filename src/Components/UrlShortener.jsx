import React from "react";

const UrlShortener = () => {
  return (
    <section className="relative">
      <div className="relative mx-auto laptop:max-w-7xl">
        <div
          className="flex w-full py-8 bg-[#3b3054] bg-cover bg-no-repeat rounded-md items-center justify-center"
          style={{ backgroundImage: "url(/bg-shorten-desktop.svg)" }}
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="w-[80%] my-4 mr-4 h-12 rounded-md py-2 px-5"
          />
          <button className="rounded-md bg-[#2acfcf] text-white text-normal font-bold px-4 py-[.8rem]">
            Shorten It!
          </button>
        </div>

        <div>
          <ul className="w-full my-4">
            <li className="flex items-center justify-between p-4 bg-white rounded-md">
              <p className="text-gray-700">
                https://www.frontendmentor.io/home
              </p>
              <div className="flex items-center">
                <p className="mr-4 text-[#2acfcf]">https://www.asdfdfme</p>
                <button className="bg-[#2acfcf] px-5 py-2 rounded-md text-white text-xs">
                  Copy
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute w-full bg-gray-200 h-[300px] z-[-1] top-[70px]" />
    </section>
  );
};

export default UrlShortener;
