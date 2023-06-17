import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomeCarousel1 from "./HomeCarousel1";
function Herobanner() {
  return (
    <>
      <div className="row nomargin herobannerbg">
        <div className="col-4">
          <h1 className="ps-3 pt-4 font">
            Latest
            <br />
            Trending Offers
          </h1>
          <button className="btn shopnow">shop now</button>
        </div>
        <div className="col-8 bimg">
          <img src="./banner.png" className="bannericonimg" alt="banner img " />
        </div>
      </div>
      <div className="offer2">
        <div className="">great sale | great sale |</div>
        <div className="">great sale | great sale</div>
        <div className="">| great sale</div>
      </div>
      <div className="fluid-container gradient1 text-center">
        <div className="d-flex">
          <div className="card app shadow">
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
          <div className="card app shadow">
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
          <div className="card app shadow">
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
          <div className="card app shadow">
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
      <HomeCarousel />
      <h3 className="mt-4 txtmar">Winter Collection</h3>
      <p className="txtmar">Get your comfort with style</p>
      <div className="card d-flex bgcard heroimg">
        <div className="card-body ms-4 mt-2 mb-2">
          <h3>
            Winter sale <br />
            20% Off
          </h3>
          <button className="btn btn3 ">shop now</button>
        </div>
        <div className="">
          <img src="./winter.png" className="dimg" alt="winter" />
        </div>
      </div>
      <div className="fluid-container d-flex">
        <div className="row nomargin">
          <div className="col-6 removepadr">
            <h3 className="ms-4 mt-4">Grab Best Deals</h3>
            <div className="card">
              <img
                className="card-img-top roundcard "
                src="./beauty.jpg"
                alt="Card cap"
              />
            </div>{" "}
            <div className="card">
              <img
                className="card-img-top roundcard"
                src="./ele.png"
                alt="Card cap"
              />
            </div>
          </div>
          <div className="col-6 removepadl">
            <div className="card">
              <img
                className="card-img-top roundcard"
                src="./apple.jpg"
                alt="Card cap"
              />
            </div>
            <div className="card">
              <img
                className="card-img-top roundcard"
                src="./test.jpg"
                alt="Card cap"
              />
            </div>
          </div>
        </div>
      </div>
      <HomeCarousel1 />

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Herobanner;
