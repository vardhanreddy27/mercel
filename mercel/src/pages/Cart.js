import React, { useEffect, useState } from 'react';
import { HiOutlineHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import RecommendedProducts from "../components/RecommendedProducts";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isHome, setIsHome] = useState(false);
  const itemCount = 0;
  const user = useSelector((state) => state.user.user);
  const [isShops, setIsShops] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isCart, setIsCart] = useState(true);
  const clickHome = () => {
    setIsHome(true);
    setIsProfile(false);
    setIsShops(false);
    setIsCart(false);
  };
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('https://mercel.vercel.app/api/cartItems', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userEmail: user.email }),
        });

        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
          console.log(data);
        } else {
          // Handle error case
          console.error('Error fetching cart items:', response.status);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [user.email]);
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
      {/* https://cdnl.iconscout.com/lottie/premium/thumb/shopping-bag-6866084-5624247.gif test with this img also this is for expty cart image*/}

      {itemCount === 0 ? (
        <>
          <div className="pt-4">
            <div className="row p-2 ps-3">
              <h3>Cart</h3>
              <ul>
        {cartItems.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
            </div>
            <div className="row text-center">
              <img
                src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif"
                alt="cart"
              />
              <p className="fw-bold text-muted">your cart is empty!</p>
            </div>
            <div className="">
              <RecommendedProducts />
              <br />
              <br />
            </div>
          </div>

          <nav className=" fixed-bottom navbar-light bg-light">
            <div className="row text-center p-2 pt-3">
              <div className="col-3">
                <Link to="/Dashboard" onClick={clickHome}>
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
          <h1 className="text-muted">Your cart is not empty</h1>
          <p>Add items to your cart to continue shopping.</p>
        </div>
      )}
    </>
  );
};
export default Cart;
