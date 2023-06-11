import React from "react";
function Herobanner() {
  return (
    <>
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
      <div className="offer2">
        <div className="">great sale | great sale |</div>
        <div className="">great sale | great sale</div>
        <div className="">| great sale</div>
      </div>
      <div className="fluid-container gradient1 text-center">
        <div className="d-flex">
          <div className="card">
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
          <div className="card">
            <div className="latestbadge card-header text-center">Latest</div>
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
        </div>
        <div className="d-flex">
          <div className="card">
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
          <div className="card">
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
        </div>
      </div>
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
