import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Trackorders from "./pages/Trackorders";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Shops from "./pages/Shops";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home Isactive="active" />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/ProductsList" element={<ProductsList />} />
          <Route path="/shops" element={<Shops Isactive="active" />}></Route>
          <Route
            path="/trackorders"
            element={<Trackorders Isactive="active" />}
          ></Route>
          <Route
            path="/profile"
            element={<Profile Isactive="active" />}
          ></Route>
          <Route path="/cart" element={<Cart Isactive="active" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
