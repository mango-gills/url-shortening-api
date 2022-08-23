import React from "react";
import logo from "../assets/logo.svg";
import { footerLinks, socialIcons } from "../Constants";

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

      <div className="flex justify-between mx-auto mt-20 tablet:max-w-7xl">
        <div className="">
          <img src={logo} alt="logo-img" className="" />
        </div>
        <ul className="flex space-x-24 ml-44">
          {footerLinks.map((link, index) => (
            <li className="">
              <h1 className="mb-4 text-white">{link.title}</h1>
              <ul className="flex flex-col space-y-4 text-sm font-normal text-[#9e9aa7]">
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
