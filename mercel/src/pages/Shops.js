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
      <div className="container pt-5">
        <div className="row start">
          <div className="col-2">
            <button
              type="button"
              className="btn mt-3 mybtn ms-1  shadow-sm herobannerbg"
            >
              <p className="sort">Sort</p>
              <RiListSettingsFill className="d-inline sorticon" />
            </button>
          </div>
          <div className="col-2 mymargins">
            <button
              type="button"
              className="btn mt-3 ms-1  shadow-sm herobannerbg"
            >
              <p className="sorts">Nearest </p>
            </button>
          </div>
          <div className="col-2 mymar">
            <button
              type="button"
              className="btn mt-3 ms-1  shadow-sm herobannerbg"
            >
              <p className="sorts">Electronics </p>
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn mt-3 ms-1 mymargin shadow-sm herobannerbg"
            >
              <p className="sorts">Fashion </p>
            </button>
          </div>
        </div>
      </div>

      <div className=" ">
        <table className="table">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr key={shop.id}>
                <td>
                  <img
                    src={shop.logo}
                    alt="Shop Logo"
                    className="rounded-circle"
                    width="50"
                    height="50"
                  />
                </td>
                <td>{shop.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
