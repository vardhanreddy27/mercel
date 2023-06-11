import React from "react";
function Herobanner() {
  return (
    <>
      <div className="row herobannerbg">
        <div className="col-4">
          <h1 className="ps-3 pt-4 font">
            Latest
            <br />
            Trending Offers
          </h1>
          <button className="btn shopnow">shop now</button>
        </div>
        <div className="col-8 bimg">
          <img src="./banner.png" alt="banner img " />
        </div>
      </div>
      <div className="offer2">
        <div className="">great sale | great sale |</div>
        <div className="">great sale | great sale</div>
        <div className="">| great sale</div>
      </div>
      <div className="fluid-container gradient1 text-center">
        <div className="d-flex">
          <div className="card shadow">
            <div className="card-header text-center">Featured</div>
            <img
              className=""
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <p className="card-text">Electronics & More</p>
              <p className="font-weight-bold">upto 60% off</p>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-header text-center">Best Sellers</div>
            <img
              className=""
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/cycle_379._SY232_CB592080532_.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <p className="card-text">Adults & Kids Cycles</p>
              <p className="font-weight-bold">upto 20% off</p>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="card shadow">
            <div className="card-header text-center">Top Rated</div>
            <img
              className=""
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-372-232._SY232_CB636055991_.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <p className="card-text">Fashion & Clothing</p>
              <p className="font-weight-bold">Clearance Sale</p>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-header text-center">Latest</div>
            <img
              className=""
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-372-232._SY232_CB636055991_.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <p className="card-text ps-1 pe-1">Backpacks & Bags</p>
              <p className="font-weight-bold">upto 40% off</p>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />
      <br />
      {/* <div className="container">
        <div className="row textcenter mt-4">
          <div className="col-5 gradient">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg"
              alt="home 1"
              className="homeimage"
            />
          </div>
          <div className="col-5 gradient">
            <img
              className="homeimage"
              src="https://rukminim1.flixcart.com/image/400/400/ktyp8cw0/t-shirt/a/y/n/s-14806378-mast-harbour-original-imag76r6ba6kgj8f.jpeg?q=70"
              alt="home 2"
            />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Herobanner;
