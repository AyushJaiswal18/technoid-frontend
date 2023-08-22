import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logoIEEE from "../assets/logoIEEE.png";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="z-20 app fixed w-full">
      <nav>
        <div
          className={`justify-around my-0  ${
            !toggleMenu
              ? " "
              : "bg-[#FF3365] bg-opacity-50 backdrop-blur-sm duration-700"
          }`}
        >
          <div className="lg:bg-[#FF3365] lg:backdrop-blur-sm lg:bg-opacity-50 w-full flex items-center justify-between mx-auto my-0 px-12 ">
            {/* Primary menu and logo */}
            <div className="flex flex-nowrap items-center justify-end gap-16 my-4">
              {/* logo */}
              <div>
                <a href="#" class="flex items-center">
                  <img
                    src={logoIEEE}
                    class="w-[150px] h-[45px]"
                    alt="TECHNOID by IEEE"
                  />
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              {/* primary */}
              <div className="hidden lg:flex gap-8">
                <a href="#" className="">
                  HOME
                </a>
                <a href="#">SERVICES</a>
                <a href="#">CONTACT US</a>
                <a href="#">ABOUT US</a>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-[#FF3365] backdrop-blur-sm bg-opacity-50 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-screen py-20"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col font-light gap-16 text-2xl underline underline-offset-8 tracking-wider">
              <a href="#" className="">
                HOME
              </a>
              <a href="#">SERVICES</a>
              <a href="#">CONTACT US</a>
              <a href="#">ABOUT US</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
