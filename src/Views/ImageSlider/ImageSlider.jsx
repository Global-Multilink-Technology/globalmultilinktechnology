import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "./b4.jpg"
import banner2 from "./b3.jpg"

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;