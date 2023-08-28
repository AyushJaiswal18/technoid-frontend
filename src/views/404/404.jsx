import React from "react";
import NavbarDefault from "../../components/Navbar";
import backgroundImage from "../../assets/bg.png";
import Error404 from "../../assets/Error404.png";
import logoIEEE from "../../assets/logoIEEE.png";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { Link, useRouteError } from "react-router-dom";

const FourZeroFour = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-[100vh] bg-cover flex flex-col text-white"
        style={{ backgroundImage: `url(${Error404})` }}
      >
        <NavbarDefault />

        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-2/3">
            <h1
              className="flex justify-center 
            md:text-9xl
            sm:text-9xl
            text-9xl"
            >
              404
            </h1>
            <br></br>

            <h2
              className="flex justify-center 
            md:text-5xl
            sm:text-5xl
            text-5xl"
            >
              LOOKS LIKE YOU ARE
            </h2>
            <h2
              className="flex justify-center 
            md:text-5xl
            sm:text-5xl
            text-5xl"
            >
              LOST IN SPACE
            </h2>
          </div>
          <div className="space-x-4 mt-8">
            <button
              className="border=solid border-2 text-[#eeeeee] rounded-full
              sm:text-md sm:px-[3.3rem] sm:py-3 
              text-md py-[8px] px-[1.8rem]"
              onClick={() => navigate("/")}
            >
              GO BACK HOME
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FourZeroFour;
