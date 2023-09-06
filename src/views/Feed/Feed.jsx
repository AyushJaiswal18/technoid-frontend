import React from "react";
import backgroundImage from "../../assets/bgfeed.png";
import NavbarDefault from "../../components/Navbar";
import Footer from "../../components/Footer";
import Ticket from "../Ticket/Ticket";
import TicketCard from "../Ticket/TicketCard";

const Feed = () => {
    return (
        <>
            <div
                className="h-full bg-center flex flex-col text-white bg-[#1F1F1E]"
                style={{ backgroundImage: `url(${backgroundImage})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover", }}
            >
                <NavbarDefault/>

                <div className='mt-[6rem]'><TicketCard/></div>

            </div>
            <Footer/>
        </>
    );
}

export default Feed;