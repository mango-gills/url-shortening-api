import React from "react";
import logo from "../assets/logo.svg";
import { footerLinks, socialIcons } from "../Constants";

const Footer = () => {
  return (
    <section className="bg-[#232127] w-full tablet:h-[500px]">
      <div
        className="w-full h-[200px] bg-cover bg-no-repeat bg-[#3b3054] text-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url(/bg-boost-desktop.svg)" }}
      >
        <h1 className="mb-6 text-2xl font-bold text-white tablet:text-3xl">
          Boost your links today
        </h1>
        <button className="px-8 rounded-full py-3 bg-[#2acfcf] text-white text-normal laptop:py-2 laptop:px-8 font-bold laptop:text-lg">
          Get Started
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-10 mx-auto tablet:items-start tablet:py-0 tablet:mt-20 tablet:justify-between tablet:max-w-7xl tablet:flex-row">
        <div className="mb-8 tablet:mb-0">
          <img src={logo} alt="logo-img" className="invert contrast-200" />
        </div>
        <ul className="flex flex-col text-center tablet:text-left tablet:space-x-24 tablet:ml-44 tablet:flex-row">
          {footerLinks.map((link, index) => (
            <li className="">
              <h1 className="mb-0 text-white tablet:mb-4">{link.title}</h1>
              <ul className="flex flex-col space-y-2 tablet:space-y-4 text-sm font-normal my-6 tablet:my-0 text-[#9e9aa7]">
                {link.links.map((item, idx) => (
                  <a href="#">{item.name}</a>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="flex space-x-20">
          <ul className="flex items-start space-x-6">
            {socialIcons.map((social, index) => (
              <img
                src={social.icon}
                alt={social.id}
                className="cursor-pointer"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
