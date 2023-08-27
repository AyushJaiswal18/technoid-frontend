import React, { useState } from "react";
import backgroundImage from "../../assets/bg.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className="h-[100%] bg-center flex flex-col text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="z-10 p-6 rounded-2xl shadow-md md:w-full w-[60%] max-w-sm bg-opacity-50 bg-black my-32">
          <h2 className="md:text-2xl text-xl font-semibold mb-2">SIGN UP</h2>
          <hr className="mb-[1rem] w-[70px] mx-auto border-red-500" />
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              className="my-4 md:py-[11px] py-[9px] md:text-md text-sm px-3 text-black placeholder-black block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              className="my-4 py-[11px] md:text-md text-sm px-3 text-black placeholder-black block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              className="my-4 py-[11px] md:text-md text-sm px-3 text-black placeholder-black block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Registration Number"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="firstName"
              className="my-4 py-[11px] md:text-md text-sm px-3 text-black placeholder-black block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="College E-Mail ID"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              className="my-4 py-[11px] md:text-md text-sm px-3 text-black placeholder-black block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="mb-4">
            <button
              className="absolute right-[2.5rem] mt-[0.6rem] text-black"
              onClick={togglePasswordVisibility}
            >
              {showConfirmPassword ? (
                <AiOutlineEye size={24} />
              ) : (
                <AiOutlineEyeInvisible size={24} />
              )}
            </button>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="firstName"
              className="my-4 py-[11px] md:text-md text-sm px-3 text-black placeholder-black block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Create a new password"
              required
            />
          </div>
          <div className="mb-4">
            <button
              className="absolute right-[2.5rem] mt-[0.6rem] text-black"
              onClick={togglePasswordVisibility2}
            >
              {showPassword ? (
                <AiOutlineEye size={24} />
              ) : (
                <AiOutlineEyeInvisible size={24} />
              )}
            </button>
            <input
              type={showPassword ? "text" : "password"}
              id="firstName"
              className="my-4 py-[11px] md:text-md text-sm px-3 text-black placeholder-black block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Confirm password"
              required
            />
          </div>
          <button className="w-[8rem] md:text-md text-sm mb-[0.4rem] py-2 px-4 text-[#eeeeeee] bg-[#FF3365] rounded-3xl hover:bg-[#FF3335] focus:outline-none focus:ring focus:ring-red-200">
            SIGN UP
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
