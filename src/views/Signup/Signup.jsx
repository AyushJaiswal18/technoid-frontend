import React, {useState} from "react";
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
      className="h-[100vh] bg-center flex flex-col text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative z-10 p-8 rounded-3xl shadow-md w-full max-w-sm bg-opacity-50 bg-black mt-[4rem]">
          <h2 className="text-3xl font-semibold mb-2">SIGN UP</h2>
          <hr className="mb-[1rem] w-[70px] mx-auto border-red-500" />
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              className="my-7 py-2 text-xl px-4 text-black placeholder-black block w-full border-gray-300 rounded-xl shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              className="my-7 py-2 text-xl px-4 text-black placeholder-black block w-full border-gray-300 rounded-xl shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              className="my-7 py-2 text-xl px-4 text-black placeholder-black block w-full border-gray-300 rounded-xl shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Registration Number"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="firstName"
              className="my-7 py-2 text-xl px-4 text-black placeholder-black block w-full border-gray-300 rounded-xl shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="College E-Mail ID"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              className="my-7 py-2 text-xl px-4 text-black placeholder-black block w-full border-gray-300 rounded-xl shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="mb-4">
          <button
              className="absolute right-[2.5rem] mt-[0.6rem] text-black"
              onClick={togglePasswordVisibility}
            >
              {showConfirmPassword ? <AiOutlineEye size={24} /> : <AiOutlineEyeInvisible size={24} />}
            </button>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="firstName"
              className="my-7 py-2 text-xl px-4 text-black placeholder-black block w-full border-gray-300 rounded-xl shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Create a new password"
              required
            />
          </div>
          <div className="mb-4">
          <button
              className="absolute right-[2.5rem] mt-[0.6rem] text-black"
              onClick={togglePasswordVisibility2}
            >
              {showPassword ? <AiOutlineEye size={24} /> : <AiOutlineEyeInvisible size={24} />}
            </button>
            <input
              type={showPassword ? "text" : "password"}
              id="firstName"
              className="my-7 py-2 text-xl px-4 text-black placeholder-black block w-full border-gray-300 rounded-xl shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Confirm password"
              required
            />
          </div>
          <button className="w-[7rem] mb-[0.4rem] py-2 px-4 text-white bg-[#FF3365] rounded-3xl hover:bg-[#FF3335] focus:outline-none focus:ring focus:ring-red-200">
            SIGN UP
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
