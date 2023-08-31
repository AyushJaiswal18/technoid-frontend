import React from "react";
import Navbar from "../../components/Navbar";
import backgroundImage from "../../assets/bgfeed.png";
import Footer from "../../components/Footer";
import TicketCard from "./TicketCard";

const Ticket = () => {
    return (
        <div
      className="bg-center bg-[#1F1F1E] flex flex-col text-white"
      style={{ backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: "fixed",
        backgroundSize: "cover", }}
    >
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <TicketCard />
      </div>
      <Footer />
    </div>
    )
}

export default Ticket;