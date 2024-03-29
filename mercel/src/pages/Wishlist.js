import React from 'react'
import Search from "../components/Search";
import MyWishlist from "../components/MyWishlist";
import { HiOutlineHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
function Wishlist() {
    const [isHome, setIsHome] = useState(false);
    const [isShops, setIsShops] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const clickHome = () => {
      setIsHome(false);
      setIsProfile(false);
      setIsShops(false);
      setIsCart(false);
    };
    const clickProfile = () => {
      setIsHome(false);
      setIsProfile(true);
      setIsShops(false);
      setIsCart(false);
    };
    const clickCart = () => {
      setIsHome(false);
      setIsProfile(false);
      setIsShops(false);
      setIsCart(true);
    };
    const clickShops = () => {
      setIsHome(false);
      setIsProfile(false);
      setIsShops(true);
      setIsCart(false);
    };
  return (
    <>
          <Search />
          <MyWishlist />
          <nav className=" fixed-bottom navbar-light bg-light">
        <div className="row nomargin text-center p-2 pt-3">
            
        <div className="col-3">
            <Link to="/" onClick={clickShops}>
              <BiStore size={30} className={isShops ? "active" : ""} />
              <p className={isShops ? "menufont active" : "menufont"}>
                shops
              </p>
            </Link>
          </div> <div className="col-3">
            <Link to="/Dashboard" onClick={clickHome}>
              <HiOutlineHome size={30} className={isHome ? "active" : ""} />
              <p className={isHome ? "menufont active" : "menufont"}>
                Products
              </p>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/profile" onClick={clickProfile}>
              <CgProfile size={30} className={isProfile ? "active" : ""} />
              <p className={isProfile ? "menufont active" : "menufont"}>
                profile
              </p>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/cart" onClick={clickCart}>
              <BsCart4 size={30} className={isCart ? "active" : ""} />
              <p className={isCart ? "menufont active" : "menufont"}>cart</p>
            </Link>
          </div>
        </div>
      </nav>
</>

  )
}

export default Wishlist