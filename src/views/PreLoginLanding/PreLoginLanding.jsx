import React from "react";
import backgroundImage from "../../assets/bg.png";
import logoIEEE from "../../assets/logoIEEE.png";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";

const PreLoginLanding = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-[100vh] bg-cover bg-fixed bg-center flex flex-col text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Navigation Bar */}
        <Nav />
        {/* <nav className="w-full bg-opacity-75 bg-transparent">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-22">
              <div className="mr-4 mt-2">
                <img src={logoIEEE} alt="Logo" className="w-[150px] h-[45px]" />
              </div>
              <div className="flex space-x-8 mr-10">
                <a
                  href="#"
                  className="text-[#eeeeee] text-lg hover:text-gray-300"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-[#eeeeee] text-lg hover:text-gray-300"
                >
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
        </nav> */}

        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-2/3">
            <h2 className="flex justify-center text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lorem.
            </h2>
          </div>
          <div className="space-x-4 mt-8">
            <button
              className="bg-[#eeeeee] text-black text-md py-2 px-[3.3rem] rounded-full border border-black"
              onClick={() => navigate("/login")}
            >
              LOG IN
            </button>
            <button
              className="bg-[#C72F55] text-[#eeeeee] text-md px-[3.3rem] py-2 rounded-full"
              onClick={() => navigate("/signup")}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PreLoginLanding;
