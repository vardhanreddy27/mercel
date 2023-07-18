import React, { useEffect, useState } from 'react';
import { HiOutlineHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { GrFormClose} from "react-icons/gr";
import { Link } from "react-router-dom";
import RecommendedProducts from "../components/RecommendedProducts";
import { ObjectId } from "mongodb"; // Import ObjectId from mongodb

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isHome, setIsHome] = useState(false);
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
  
const removeFromCart = async (productId) => {
  try {
    const response = await fetch('https://mercel.vercel.app/api/removeFromCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: ObjectId(productId), // Convert productId to ObjectId format
        userEmail: user.email, // Pass the user's email
      }),
    });

    if (response.ok) {
      // Remove the item from the cart locally
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.productId !== productId)
      );
      console.log('Product removed from cart');
    } else {
      console.error('Error removing product from cart:', response.status);
    }
  } catch (error) {
    console.error('Error removing product from cart:', error);
  }
};
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`https://mercel.vercel.app/api/cartItems?userEmail=${user.email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            Pragma: 'no-cache',
            Expires: '0',
          },
        });

        if (response.ok) {
          const cartItemsData = await response.json();
          setCartItems(cartItemsData);
          console.log(cartItemsData);
        } else {
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
      {cartItems.length > 0 ? (
        <>
          {/* Cart is not empty */}
          <div className="pt-4 secd">
            <div className=" p-2 ps-3">
              <h3>Cart</h3>
            </div>
            <div className="container checkoutcon">
              {/* Cart items rendering */}
              {cartItems.map((item) => (
                  <div className='row pt-4 pb-4'>
                    <div className="col-4 cartimgcon">
  <img src={item.picture} alt={item.name} className="cartimg"/>
</div>                    <div className="col-8 d-flex justify-content-center align-items-center">
                <div className="col-8">
                    <p className='ps-1 d-inline'>{item.name}</p></div>
                    <div className="col-2 d-inline">1</div>
                    <div className="col-2 d-inline" onClick={() => removeFromCart(item.productId)} ><GrFormClose color="red" /></div>
                    </div>
                  </div>
              ))}
            </div>
              <RecommendedProducts />
              
             <div className="row p-3 stickybtn">
             <button type="button" className="btn backgroundcolor fixed-bottom checkout  btn-lg btn-block">Checkout</button>

             </div>

              <br />
              <br />

          </div>
        </>
      ) : (
        <>
          {/* Cart is empty */}
          <div>
            <p>Your cart is empty!</p>
            <RecommendedProducts />
            <br />
            <br />
            <br />
         </div>
        </>
      )}
  {/* Navigation */}
  <nav className="fixed-bottom navbar-light bg-light">
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
              <p className={isCart ? "menufont active" : "menufont"}>cart</p>
            </Link>
          </div>
        </div>
      </nav>   
  
    </>
  );
};

export default Cart;