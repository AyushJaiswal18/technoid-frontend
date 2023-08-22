import React from "react";
import Nav from "../../components/Nav";
import backgroundImage from "../../assets/bg.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const Login = () => {
  return (
    <div
      className="h-[100vh] bg-center flex flex-col text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
      <div className="relative z-10 p-8 rounded-3xl shadow-md w-full max-w-sm bg-opacity-50 bg-black">
        <h2 className="text-3xl font-semibold mb-2">LOGIN</h2>
        <hr className="mb-[3rem] w-[70px] mx-auto border-red-500" />
        <div className="mb-4">
          <input
            type="text"
            id="registrationNumber"
            className="my-8 py-3 text-xl px-4 text-black placeholder-black block w-full border-gray-300 rounded-xl shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
            placeholder="Registration number"
            required
          />
        </div>
        <div className="mb-4 text=2xl">
          <input
            type="password"
            id="password"
            className="my-8 py-3 text-xl text-black px-4 block w-full placeholder-black border-gray-300 rounded-xl focus:ring focus:ring-indigo-200 focus:outline-none"
            placeholder="Password"
            required
          />
        </div>
        <button className="w-[7rem] mt-2 mb-[3rem] py-2 px-4 text-white bg-red-500 rounded-3xl hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200">
          LOGIN
        </button>
      </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Login;
