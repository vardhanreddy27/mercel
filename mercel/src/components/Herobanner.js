import React from "react";
function Herobanner() {
  return (
    <div>
      <div className="row herobannerbg">
        <div className="col-8">
          <h1 className="ps-3 pt-4 font">
            Latest
            <br />
            Trending Offers
          </h1>
        </div>
        <div className="col-4">img herobannerbg </div>

        <button className="btn shopnow">shop now</button>
      </div>
    </div>
  );
}

export default Herobanner;
