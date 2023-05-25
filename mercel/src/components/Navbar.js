import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";

function Navbar() {
  return (
    <nav className=" fixed-bottom navbar-light bg-light">
      <div className="row text-center p-2">
        <div className="col-3">
          <HiOutlineHome />
          <p>home</p>
        </div>
        <div className="col-3">
          <BiStore />
          <p>stores</p>
        </div>
        <div className="col-3">
          <CgProfile />
          <p>profile</p>
        </div>
        <div className="col-3">
          <BsCart4 />
          <p>cart</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
