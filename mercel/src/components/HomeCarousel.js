import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
  return (
    <>
      {" "}
      <Carousel indicators={false}>
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
    </>
  );
}

export default HomeCarousel;
