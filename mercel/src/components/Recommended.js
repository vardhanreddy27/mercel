import React, { useState, useEffect, useRef } from "react";

const Recommended = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);
  useEffect(() => {
    fetch("/rec.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);
  const handleTouchMove = (event) => {
    event.preventDefault();
    const x = event.touches[0].clientX - carouselRef.current.offsetLeft;
    const slideWidth = carouselRef.current.offsetWidth / 3;
    const delta = Math.round((x - startX) / slideWidth);

    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - delta;
      if (newIndex < 0) return newIndex + images.length;
      if (newIndex >= images.length) return newIndex - images.length;
      return newIndex;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX - carouselRef.current.offsetLeft);
  };

  return (
    <div className="image-carousel">
      <button className="btn btn-primary" onClick={handlePrevious}>
        Previous
      </button>
      <div
        className="carousel-images"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {images.slice(currentIndex, currentIndex + 3).map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.alt}
            style={{ height: "150px", width: "100px" }}
          />
        ))}
      </div>
      <button className="btn btn-primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Recommended;
