import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

function Home() {
  return (
    <>
      <Search />
      <h1 className="p-5">my data</h1>

      <Navbar />
    </>
  );
}

export default Home;
