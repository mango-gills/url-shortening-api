import React from "react";
import { useState, useEffect } from "react";
import Details from "./Details";
import axios from "axios";

const UrlShortener = () => {
  const [input, setInput] = useState("");
  const [shortURL, setShortURL] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [errorCode, setErrorCode] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorCode("");
    }, 5000);
  }, [errorCode]);

  const handleSubmit = () => {
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((res) => {
        const data = res.data;
        setShortURL([
          ...shortURL,
          {
            id: data.result.code,
            userInput: input,
            full_link: data.result.full_short_link,
          },
        ]);
      })
      .catch((error) => {
        setErrorCode(error.response.data.error);
      });
  };

  return (
    <section className="relative">
      <div className="relative px-4 mx-auto mt-12 tablet:mt-0 laptop:max-w-7xl laptop:px-0">
        <div
          className="flex flex-col tablet:flex-row py-4 w-full tablet:py-8 bg-[#3b3054] bg-cover bg-no-repeat rounded-md items-center justify-center tablet:px-6"
          style={{ backgroundImage: "url(/bg-shorten-desktop.svg)" }}
        >
          <input
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Shorten a link here..."
            className="w-[80%] my-4 tablet:mr-4 h-12 rounded-md py-2 px-5"
          />
          <button
            onClick={() => handleSubmit()}
            className="rounded-md bg-[#2acfcf] text-white mt-4 tablet:mt-0 text-xl tablet:text-sm font-bold px-4 py-[.9rem]
          w-[80%] mx-auto tablet:mx-0 tablet:w-36"
          >
            Shorten It!
          </button>
        </div>
        {errorCode !== "" ? (
          <p className="absolute text-sm font-normal text-red-500 top-[6.5rem] left-16 ml-1 italic ease-in duration-300">
            {errorCode}
          </p>
        ) : null}

        <div>
          <ul className="w-full my-4 space-y-6">
            {shortURL?.map((url, index) => (
              <li
                key={index}
                className="flex flex-col items-start justify-between px-8 py-4 bg-white rounded-md tablet:items-center tablet:flex-row"
              >
                <p className="w-full pb-3 mb-2 text-sm text-gray-700 border-b-2 tablet:text-normal tablet:mb-0 tablet:pb-0 tablet:border-b-0">
                  {url?.userInput}
                </p>
                <div className="flex flex-col items-start w-full space-y-2 tablet:space-y-0 tablet:w-[35%] tablet:items-center tablet:flex-row justify-end">
                  <p className="mr-4 text-[#2acfcf] text-sm tablet:text-normal">
                    {url?.full_link}
                  </p>
                  <button className="bg-[#2acfcf] px-5 py-2 rounded-md text-white text-xs w-full tablet:w-20">
                    Copy
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Details />
      </div>
      <div className="absolute w-full bg-gray-200 h-full z-[-1] top-[70px]" />
    </section>
  );
};

export default UrlShortener;
