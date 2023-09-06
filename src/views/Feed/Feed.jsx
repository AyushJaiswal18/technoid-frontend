import React from "react";
import backgroundImage from "../../assets/bg.png";
import NavbarDefault from "../../components/Navbar";
import Footer from "../../components/Footer";
import Ticket from "../Ticket/Ticket";
import TicketCard from "../Ticket/TicketCard";

const Feed = () => {
    return (
        <>
            <div
                className="h-full bg-center flex flex-col text-white"
                style={{backgroundImage: `url(${backgroundImage})`}}
            >
                <NavbarDefault/>

                <div className='mt-[6rem]'><TicketCard/></div>

            </div>
            <Footer/>
        </>
    );
}

export default Feed;