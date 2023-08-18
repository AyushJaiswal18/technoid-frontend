import React from "react";
import logoIEEE from "../assets/logoIEEE.png";
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="grid text-[#eeeeee] w-full py-[1.8rem] sm:px-[3rem]
    lg:bg-[#938588] lg:grid-flow-col lg:grid-cols-8 lg:gap-9 
    sm:bg-[#456789]
    bg-[#123456] px-[0.9rem]"
    >
      <div
        className="w-full text-left justify-self-center mb-6
      lg:col-span-2 lg:self-center col-span-2 grid justify-center items-center
      "
      >
        <div className="mr-4 grid justify-center items-center">
          <img src={logoIEEE} alt="Logo" className="w-[210px] h-[60px]" />
          <p className="text-2xl">
            <span className="font-bold">IEEE</span> Student Branch
          </p>
          <span className="text-lg">Manipal University Jaipur</span>
        </div>
        <div className="flex text-2xl mt-4 justify-end mx-[6rem]">
          <a href="#">
            <BsLinkedin />
          </a>
          <a href="#" className="mx-3">
            <BsInstagram />
          </a>
          <a href="#">
            <BsTwitter />
          </a>
        </div>
      </div>
      <div
        className="w-full text-left 
      lg:col-span-3"
      >
        <h3 className="font-bold text-2xl">Contact Us:</h3>
        <p className="text-md">
          <div className="sm:flex">
            {" "}
            <p>Aarohi Manchanda :</p>
            <p> +91 99992 14243 </p>
          </div>
          <div className="sm:flex">
            <p>Vikramaditya Hiran :</p>
            <p>+91 99300 48037</p>
          </div>
        </p>
        <p className="my-1">
          <p className="text-lg font-bold">Email:</p>
          <span className="text-md">ieee@muj.manipal.edu</span>
        </p>
        <p className="text-md my-1">
          <p className="text-lg font-bold">Address:</p>
          <p>
            Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza,
            Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007
          </p>
        </p>
      </div>
      <div
        className="w-full text-left 
      lg:col-span-3 px-4"
      >
        <h3 className="font-bold text-xl">Faculty Messages:</h3>
        <p
          className="text-lg grid grid-flow-row 
        lg:grid-cols-2"
        >
          <a href="#" className="underline">
            Director's Message
          </a>
          <a href="#" className="underline">
            Coordinator's Message
          </a>
          <a href="#" className="underline">
            DSW's Message
          </a>
          <a href="#" className="underline">
            Advisor's Message
          </a>
        </p>
        <div>
          <h3 className="font-bold text-xl mt-4">Links:</h3>
          <p className="text-lg grid grid-flow-row lg:grid-cols-2">
            <a href="#" className="underline">
              Website Team{" "}
            </a>
            <a href="" className="underline">
              {" "}
              MUJ Official
            </a>
            <a href="#" className="underline">
              IEEE Official Website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
