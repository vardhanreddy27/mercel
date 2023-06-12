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
              src="https://scontent.fbom65-1.fna.fbcdn.net/v/t39.30808-6/342872511_957758175588433_9185985959562274254_n.png?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=a-KPcwwaO0QAX_Mc9P5&_nc_ht=scontent.fbom65-1.fna&oh=00_AfDkqIZZSbii6XMMucm_waw3uuqS7IofeHLlJASANmUUWg&oe=648B74F9"
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
