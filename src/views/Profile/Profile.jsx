import React from "react";
import backgroundImage from "../../assets/bgprofile.png";
import Navbar from "../../components/Navbar";
import Ticket from "../Ticket/Ticket";
import TicketCard from "../Ticket/TicketCard";
import Footer from "../../components/Footer";
const dummyProfileImg = require("../../assets/profileDP.jpg");


const Profile = () => {
    return (
        <>

        <div className="
        h-full flex flex-col bg-center text-white"
             style={{ backgroundImage: `url(${backgroundImage})`,
                 backgroundAttachment: "fixed",
                 backgroundSize: "cover", }}>
            <Navbar/>
            <div className="columns-3 m-2 flex flex-row justify-evenly">
            <div className="max-w-full">
                <div className="min-h-screen max-w-full flex items-center justify-center">
                    <div className="relative z-10 p-8 rounded-2xl shadow-md w-full max-w-sm bg-opacity-50 bg-[#FF3365]">
                        <h2 className="md:text-5xl text-3xl font-semibold mb-2">NAME</h2>
                        <hr className="m-[1rem] w-full mx-auto border-black" />
                        <div className="flex items-center justify-around">
                            <img
                                src={dummyProfileImg}
                                alt="User Profile"
                                className="w-32 h-32 rounded-full mr-2"
                            />
                        </div>
                        <hr className="m-[1rem] w-full mx-auto border-black" />
                        <div className="text-left">
                            <p><span className='text-black font-semibold'>Reg No.:</span><span> 299300123</span></p>
                            <p><span className='text-black font-semibold'>College ID:</span><span> johndoe.299300123</span><br/>@muj.manipal.edu</p>
                        </div>
                         <hr className="m-[1rem] w-full mx-auto border-black" />
                    </div>
                </div>
            </div>

                    <div className="relative z-10 p-8 rounded-2xl shadow-md w-full max-w-sm bg-opacity-50 bg-white mt-[6rem]">
                        <h1 className="text-5xl text-black text-bold">
                            APPROVED</h1>
                        <hr className="m-[1rem] w-full mx-auto border-black" />
                        <TicketCard/></div>
                    <div className="relative z-10 p-8 rounded-2xl shadow-md w-full max-w-sm bg-opacity-50 bg-white mt-[6rem]">
                        <h1 className="text-5xl text-black text-bold">
                            PENDING</h1>
                        <hr className="m-[1rem] w-full mx-auto border-black" />
                        <TicketCard/></div>

                 </div>
            <Footer/>
        </div>
        </>
    )
}

export default Profile;