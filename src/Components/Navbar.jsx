import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="relative flex items-center justify-between px-4 mx-auto my-8 tablet:px-0 max-w-7xl">
      <img className="mr-2" src={logo} alt="logo" />

      <div className="hidden w-full mx-5 tablet:block">
        <div className="flex items-center justify-between font-bold text-[#bfbfbf]">
          <ul className="flex space-x-4">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <ul className="flex items-center">
            <li className="mr-4">Login</li>
            <li className="bg-[#2acfcf] font-bold text-white rounded-full px-8 py-2 mx-auto">
              Signup
            </li>
          </ul>
        </div>
      </div>
      <div className="block tablet:hidden">
        <AiOutlineMenu
          size={25}
          className="cursor-pointer z-[99]"
          onClick={() => handleMenu()}
        />
      </div>

      <div
        className={`${
          menu ? "block" : "hidden"
        } absolute top-16 left-0 right-0 rounded-xl h-[350px] z-[1]  bg-[#3b3054] text-white w-[90%] mx-auto`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-bold rounded-lg cursor-pointer">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <hr className="w-[85%] bg-gray-100 opacity-10" />
          <li>Login</li>
          <li className="bg-[#2acfcf] rounded-full px-20 py-2 mx-auto">
            Signup
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
