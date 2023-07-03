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
              src="https://img.freepik.com/free-photo/discount-purse-podium_23-2150165455.jpg?size=626&ext=jpg&ga=GA1.1.1949622569.1685824213&semt=ais"
              alt="second slide"
            />
            <div className="carousel-mask"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://img.freepik.com/free-photo/discount-purse-podium_23-2150165455.jpg?size=626&ext=jpg&ga=GA1.1.1949622569.1685824213&semt=ais"
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
