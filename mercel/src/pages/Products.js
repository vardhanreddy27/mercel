import React from "react";
import Search from "../components/Search";
import ProductsList from "../pages/ProductsList";
import { HiOutlineHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
function Products() {
  const [isHome, setIsHome] = useState(true);
  const [isShops, setIsShops] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const clickHome = () => {
    setIsHome(true);
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
    <div className="fluid-container">
    <Search />
    <ProductsList />
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
  </div>  )
}

export default Products