import React, { useEffect, useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { RiListSettingsFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchShop from "../components/SearchShop";

function Shops() {
  const [shops, setShops] = useState([]);
  const [isHome, setIsHome] = useState(false);
  const [isShops, setIsShops] = useState(true);
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
  useEffect(() => {
    fetch("/shops.json")
      .then((response) => response.json())
      .then((data) => setShops(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <SearchShop />
      <div className="container">
        <div className="d-flex justify-content-center">
          <button className="btn herobannerbg marginsort shadow-sm ">
            Sort
            <RiListSettingsFill className="sort" />
          </button>
          <button className="btn herobannerbg marginsort shadow-sm ">
            Nearest
          </button>
          <button className="btn herobannerbg marginsort shadow-sm ">
            Fashion
          </button>
          <button className="btn herobannerbg shadow-sm ">Electronics</button>
        </div>
      </div>

      <div className="container ps-3 pe-3 pt-3 pb-5 mb-5">
        <div className="row">
          {shops.map((shop, index) => (
            <div key={index} className="col-md-6">
              <div className="card mb-3 shadow-sm">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="card-img-top fixed-height-img"
                />
                <div className="card-body">
                  <h5 className="card-title">{shop.name}</h5>
                  <p className="card-text mb-1">{shop.address}</p>
                  <p className="card-text">
                    <small className="text-muted">{shop.category}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav className=" fixed-bottom navbar-light bg-light">
        <div className="row text-center p-2 pt-3">
          <div className="col-3">
            <Link to="/" onClick={clickHome}>
              <HiOutlineHome size={30} className={isHome ? "active" : ""} />
              <p className={isHome ? "menufont active" : "menufont"}>home</p>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/shops" onClick={clickShops}>
              <BiStore size={30} className={isShops ? "active" : ""} />
              <p className={isShops ? "menufont active" : "menufont"}>shops</p>
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
  );
}

export default Shops;
