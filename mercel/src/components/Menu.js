import React from "react";

function Menu() {
  return (
    <div className="row pt5 text-center ">
      <div className="flex-parent">
        <div className="flex-item">
          <img src="./laundry.png" className="menuicons" alt="img" />
          <p>clothing</p>
        </div>
        <div className="flex-item">
          <img src="./mobiles.png" className="menuicons" alt="img" />
          <p>electronics</p>
        </div>
        <div className="flex-item">
          <img src="./sports.png" className="menuicons" alt="img" />
          <p>sports</p>
        </div>
        <div className="flex-item">
          <img src="./homeappliance.png" className="menuicons" alt="img" />
          <p>kitchen</p>
        </div>
        <div className="flex-item">
          <img src="./beauty.png" className="menuicons" alt="img" />
          <p>beauty</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
