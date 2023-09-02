import React, { useEffect, useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchShop from "../components/SearchShop";
import { Offer } from "@styled-icons/boxicons-solid/Offer";
import { Grid, Skeleton } from "@mui/material";

function Shops() {
  const [shops, setShops] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    fetch("https://mercel.vercel.app/api/shops")
      .then((response) => response.text())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setShops(parsedData);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSort = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredShops =
    selectedCategory === "All"
      ? shops
      : shops.filter((shop) => shop.category.includes(selectedCategory));

  const searchedShops = filteredShops.filter((shop) =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
    <>
    
      <SearchShop handleSearch={handleSearch} />
      {/* <div className="container">
        <div className="d-flex justify-content-center">
          <button
            className={`btn herobannerbg marginsort shadow-sm ${
              selectedCategory === "Sports" ? "selected" : ""
            }`}
            onClick={() =>  handleSort("Sports")}
          >
            Sports
          </button>
       
          <button
            className={`btn herobannerbg marginsort shadow-sm ${
              selectedCategory === "Fashion" ? "selected" : ""
            }`}
            onClick={() => handleSort("Fashion")}
          >
            Fashion
          </button>
          <button
            className={`btn herobannerbg shadow-sm mback ${
              selectedCategory === "Electronics" ? "selected" : ""
            }`}
            onClick={() => handleSort("Electronics")}
          >
            Electronics
          </button>
          <button
            className={`btn herobannerbg shadow-sm  ${
              selectedCategory === "All" ? "" : ""
            }`}
            onClick={() => handleSort("All")}
          >
            More
          </button> 
        </div>
      </div> */}
      <div className={isFixed ? 'myrules' : 'pt-3'}
>
        <div className="row ps-2 pe-2">
          {isLoading ? (
            // Display skeleton loading for images and card text
            <Grid container spacing={3}>
              {[...Array(6)].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Skeleton variant="rectangular" height={200} />
                  <Skeleton height={24} />
                  <Skeleton height={18} width="70%" />
                  <Skeleton height={18} width="50%" />
                  <Skeleton height={18} width="30%" />
                </Grid>
              ))}
            </Grid>
          ) : (
            // Display actual data once it's loaded
            searchedShops.map((shop, index) => (
                    <div key={index} className="col-md-6  p-2">
                  <div className="card mb-3 shadow-sm rounded ">
                    <div className="image-container card-top-radius">
                      <img
                        src={shop.image}
                        alt={shop.name}
                        className="card-img-top fixed-height-img card-top-radius"
                      />
                      <div className="overlay card-top-radius"></div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{shop.name}</h5>
                      <p className="card-text mb-1 text-muted">
                        <small className="text-muted">{shop.address}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{shop.category}</small>
                      </p>
                      <hr className="dashed-line" />
                      <p className="card-text offer-text">
                        <small className="active ">
                          <Offer className="offer" />
                          {shop.offer}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
            ))
          )}
        </div>
      </div>
      <nav className="fixed-bottom navbar-light bg-light">
        <div className="row text-center p-2 pt-3">
            
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
  );
}

export default Shops;