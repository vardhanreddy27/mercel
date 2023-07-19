import React, { useRef } from "react";
import HomeCarousel from "./HomeCarousel";
import HomeCarousel1 from "./HomeCarousel1";
import MultipleItems from "./MultipleItems";

function Herobanner() {
  return (
    <>
      <HomeCarousel1 />

      <div className="deals-card p-3 pb-5">
      <div className="text-center">
        <h3 className="p-4 ">Deals of The day</h3>
      </div>
      <div className="fluid-container deals-card text-center">
        <div className="d-flex">
          <div className="card">
            <img
              className=""
              src="https://m.media-amazon.com/images/I/811HqEmouAL._AC_UL600_QL65_.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <p className="font-weight-bold1">Extra 10% off</p>
            </div>
          </div>
          <div className="card">

            <img
              className=""
              src="https://m.media-amazon.com/images/I/415dA5tCLHL.jpg" 
              alt="Card cap"
            />
            <div className="card-body">
              <p className="font-weight-bold1">upto 60% off</p>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="card">

            <img
              className=""
              src="https://images.dailyobjects.com/marche/product-images/1201/all-blue-pedal-daypack-images/All-Blue-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-640,h-487,dpr-1"
              alt="Card cap"
            />
            <div className="card-body">
              <p className="font-weight-bold1">upto 60% off</p>
            </div>
          </div>
          <div className="card">

            <img
              className=""
              src="https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-133978.jpg?size=626&ext=jpg&ga=GA1.1.1520291970.1688405752&semt=ais"
              alt="Card cap"
            />
            <div className="card-body">

              <p className="font-weight-bold1">upto 60% off</p>
            </div>
          </div>
        </div>
      </div>
      </div>




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

<MultipleItems />


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
              <p className="font-weight-bold1">upto 60% off</p>
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
              <p className="font-weight-bold1">upto 20% off</p>
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
              <p className="font-weight-bold1">Clearance Sale</p>
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
              <p className="font-weight-bold1">upto 40% off</p>
            </div>
          </div>
        </div>
      </div>
     

      <HomeCarousel />

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

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Herobanner;
