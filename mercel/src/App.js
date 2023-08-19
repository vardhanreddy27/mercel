import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Trackorders from "./pages/Trackorders";
import NonMobile from "./components/NonMobile";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Shops from "./pages/Shops";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import Wishlist from "./pages/Wishlist";
import Return from "./pages/Return";
import Terms from "./pages/Terms";

function App() {
  const isMobile = window.innerWidth < 800;

  return (
    <>
      <BrowserRouter>
        <Routes>
        {isMobile ? (
        <>
        <Route path="/Login" element={<Home Isactive="active" />}></Route>
          <Route path="/" element={<Shops Isactive="active" />}></Route>
          <Route path="/Wishlist" element={<Wishlist />}></Route>
          <Route path="/Faq" element={<Faq />}></Route>
          <Route path="/Terms" element={<Terms />}></Route>
          <Route path="/Return" element={<Return />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/ProductsList" element={<ProductsList />} />
          <Route path="/Dashboard" element={<Dashboard />} ></Route>
          <Route
            path="/trackorders"
            element={<Trackorders Isactive="active" />}
          ></Route>
          <Route
            path="/profile"
            element={<Profile Isactive="active" />}
          ></Route>
          <Route path="/cart" element={<Cart Isactive="active" />}></Route></>
      ) : (
        <Route path="/*" element={<NonMobile />} />
      )}
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
