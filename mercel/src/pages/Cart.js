import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
const Cart = () => {
  const [isHome, setIsHome] = useState(false);
  const itemCount = 0;
  const [isShops, setIsShops] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isCart, setIsCart] = useState(true);
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
    <div>
      {itemCount === 0 ? (
        <>
          <div className="fluid-container pt-4">
            <div className="row text-center">
              <h3>Cart</h3>
            </div>
            <div className="row text-center">
              <img
                src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif"
                alt="cart"
              />
              {/* https://cdnl.iconscout.com/lottie/premium/thumb/shopping-bag-6866084-5624247.gif test with this img also this is for expty cart image*/}
              <p className="fw-bold">your cart is empty!</p>
            </div>
            <div className="row customheight  p-2 secondaryback">
              <h3 className="pt-4">Recommended for you</h3>
            </div>
          </div>

          <nav className=" fixed-bottom navbar-light bg-light">
            <div className="row text-center p-2 pt-3">
              <div className="col-3">
                <Link to="/" onClick={clickHome}>
                  <HiOutlineHome size={30} className={isHome ? "active" : ""} />
                  <p className={isHome ? "menufont active" : "menufont"}>
                    home
                  </p>
                </Link>
              </div>
              <div className="col-3">
                <Link to="/shops" onClick={clickShops}>
                  <BiStore size={30} className={isShops ? "active" : ""} />
                  <p className={isShops ? "menufont active" : "menufont"}>
                    shops
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
                  <p className={isCart ? "menufont active" : "menufont"}>
                    cart
                  </p>
                </Link>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <div>
          <h1>Your cart is not empty</h1>
          <p>Add items to your cart to continue shopping.</p>
        </div>
      )}
    </div>
  );
};
export default Cart;
