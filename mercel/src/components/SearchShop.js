import React, { useState, useEffect } from 'react';
import { BiFilterAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

function SearchShop({ handleSearch }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 20) { // Adjust the threshold as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="row">
      <div className="row pb-2">
        <div className="col">
          <ImLocation style={{ fontSize: "12px" }} /> Delivery at 1/380-5-1 <BsChevronDown />
        </div>
        <div className="col text-end me-2">
          Filters <BiFilterAlt />
        </div>
      </div>
      <div className={isFixed ? 'fixed-search-bar' : 'dwidth row'}>
        <input
          type="text"
          className="searchbar "
          placeholder="Search shops..."
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default SearchShop;