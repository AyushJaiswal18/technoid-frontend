import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import backgroundImage from "../../assets/bgfeed.png";
import Footer from "../../components/Footer";
import TicketCard from "./TicketCard";

// async function fetchrepo(name) {
//   const response = await fetch("https://api.github.com/l-pircy");
//   const repo = await response.json();
//   return repo;
// }

const Ticket = async () => {
  const [tickets, setTickets] = useState([]);

  const fetchData = () => {
    return fetch("https://api.github.com/l-pircy")
      .then((response) => response.json())
      .then((data) => setTickets(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  // const repo = await fetchrepo();
  // console.log(repo);

  return (
    <div
      className="bg-center bg-[#1F1F1E] flex flex-col text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <TicketCard />
      </div>
      <Footer />
    </div>
  );
};

export default Ticket;
