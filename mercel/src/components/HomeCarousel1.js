import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarousel1() {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item>
          <div className="">
            <img
              className="d-block w-100 carousel-image"
              src="https://imgk.timesnownews.com/story/Vivo_Christmas_offer.jpg"
              alt="First slide"
            />
            <div className=""></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_electronics_banner_template_24_1200x628.jpg"
              alt="second slide"
            />
            <div className=""></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_electronics_banner_template_24_1200x628.jpg"
              alt="Third slide"
            />
            <div className=""></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomeCarousel1;
