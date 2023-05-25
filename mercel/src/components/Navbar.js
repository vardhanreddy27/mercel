import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";

function Navbar() {
  return (
    <nav className=" fixed-bottom navbar-light bg-light pb-1">
      <div className="row text-center p-2">
        <div className="col-3">
          <HiOutlineHome size={30} />
          <p>home</p>
        </div>
        <div className="col-3">
          <BiStore size={30} />
          <p>stores</p>
        </div>
        <div className="col-3">
          <CgProfile size={30} />
          <p>profile</p>
        </div>
        <div className="col-3">
          <BsCart4 size={30} />
          <p>cart</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
