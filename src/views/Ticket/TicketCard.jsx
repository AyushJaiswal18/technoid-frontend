import React, { useState, useEffect } from "react";
import { TicketData } from "./TicketData"; //will change to api call
import { FiUpload } from "react-icons/fi";
import ReactPaginate from "react-paginate";

const TicketCard = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerpage = 10;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerpage;
    setCurrentItems(TicketData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(TicketData.length / itemsPerpage));
  }, [itemOffset, itemsPerpage]);

  const handlePageClick = (event) => {
    window.scrollTo({ top: 0 });
    const newOffset = (event.selected * itemsPerpage) % TicketData.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="max-w-sm mx-auto shadow-lg rounded-lg ">
      {currentItems.map((ticket, index) => (
        <div key={index} className="p-4 mb-4 bg-black rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-white-700 font-semibold p-2">
                {ticket.userName}
              </span>
              <img
                src={ticket.userProfileImage}
                alt="User Profile"
                className="w-10 h-10 rounded-full mr-2"
              />
            </div>
            <span className="text-white-500">{ticket.time}</span>
          </div>
          <img src={ticket.ticketImg} alt="Ticket" className="w-full mb-4" />
          <div className="flex items-center justify-between mb-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-[2rem] rounded">
              Accept
            </button>
            <button className="text-white-500 text-2xl hover:text-gray-400">
              <FiUpload />
            </button>
          </div>
          <hr className="text-white mb-3" />
          <div className="text-white text-sm text-left">
            <p>{ticket.caption}</p>
          </div>
        </div>
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num py-[8px] px-[15px] cursor-pointer rounded-md font-normal"
        previousLinkClassName="page-num py-[8px] px-[15px] cursor-pointer rounded-md font-normal"
        nextLinkClassName="page-num py-[8px] px-[15px] cursor-pointer rounded-md font-normal"
        activeLinkClassName="active bg-white text-black"
        className="flex justify-center list-none items-center mb-[5rem] text-[1.2rem] gap-6"
      ></ReactPaginate>
    </div>
  );
};

export default TicketCard;
