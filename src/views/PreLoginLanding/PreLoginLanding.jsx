import React from "react";
import NavbarDefault from "../../components/Navbar";
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
        className="h-[100vh] bg-center flex flex-col text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <NavbarDefault />

        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-2/3">
            <h2
              className="flex justify-center 
            md:text-4xl
            sm:text-3xl
            text-2xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lorem.
            </h2>
          </div>
          <div className="space-x-4 mt-8">
            <button
              className="bg-[#eeeeee] text-black rounded-full border border-black
              sm:text-md sm:py-2 sm:px-[3.3rem] 
              text-sm py-[6px] px-[1.8rem]"
              onClick={() => navigate("/login")}
            >
              LOG IN
            </button>
            <button
              className="bg-[#C72F55] text-[#eeeeee] rounded-full
              sm:text-md sm:px-[3.3rem] sm:py-2 
              text-sm py-[6px] px-[1.8rem]"
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
