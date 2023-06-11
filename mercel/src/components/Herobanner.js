import React from "react";
import { Carousel } from "react-bootstrap";

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

      <Carousel>
        <Carousel.Item>
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://img.freepik.com/free-photo/discount-purse-podium_23-2150165455.jpg?size=626&ext=jpg&ga=GA1.1.1949622569.1685824213&semt=ais"
              alt="First slide"
            />
            <div className="carousel-mask"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://img.freepik.com/free-photo/sale-with-special-discount-couch_23-2150040384.jpg?size=626&ext=jpg&ga=GA1.1.1949622569.1685824213&semt=ais"
              alt="second slide"
            />
            <div className="carousel-mask"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_electronics_banner_template_24_1200x628.jpg"
              alt="Third slide"
            />
            <div className="carousel-mask"></div>
          </div>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Herobanner;
