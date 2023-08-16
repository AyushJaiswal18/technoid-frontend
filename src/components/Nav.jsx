import React from "react";
import logoIEEE from "../assets/logoIEEE.png";

const Nav = () => {
  return (
    <nav className="w-full bg-opacity-75 bg-transparent">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          <div className="mr-4 mt-2">
            <img src={logoIEEE} alt="Logo" className="w-[150px] h-[45px]" />
          </div>
          <div className="flex space-x-8 mr-10">
            <a href="#" className="text-[#eeeeee] text-lg hover:text-gray-300">
              HOME
            </a>
            <a href="#" className="text-[#eeeeee] text-lg hover:text-gray-300">
              SERVICES
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-300">
              CONTACT US
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-300">
              ABOUT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
