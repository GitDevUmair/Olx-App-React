import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Slider(){
    return(
        <div>
         <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.olx.com.pk/thumbnails/308200224-800x600.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.olx.com.pk/thumbnails/308200224-800x600.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.olx.com.pk/thumbnails/308200224-800x600.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
}
export default Slider;