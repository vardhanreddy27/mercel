import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Trackorders from "./pages/Trackorders";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home Isactive="active" />}></Route>
          <Route path="/shops" element={<Shops Isactive="active" />}></Route>
          <Route
            path="/trackorders"
            element={<Trackorders Isactive="active" />}
          ></Route>
          <Route
            path="/profile"
            element={<Profile Isactive="active" />}
          ></Route>
          <Route path="/signup" element={<Signup Isactive="active" />}></Route>
          <Route path="/cart" element={<Cart Isactive="active" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
