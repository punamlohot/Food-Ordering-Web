import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <Carousel
      showThumbs={false} // Optionally, hide the thumbnail navigation
      autoPlay={true} // Auto-play the carousel
      interval={2000} // Time between slides in milliseconds
    >
      <div className="carousel-slide">
        <img
          src="https://i1.wp.com/www.techjaja.com/wp-content/uploads/2018/01/Food-Delivery.jpeg?fit=1200%2C760&ssl=1"
          alt="rest-1"
          height="500px"
        />
        <p className="carousel-text">Lightning-Fast Delivery</p>
      </div>
      <div className="carousel-slide">
        <img
          src="http://www.pngmart.com/files/7/Delivery-PNG-HD.png"
          alt="rest-2"
          height="500px"
        />
        <p className="carousel-text">Cash On Delivery</p>
      </div>
      <div className="carousel-slide">
        <img
          src="https://thesmartlocal.com/wp-content/uploads/2020/05/healthy-delivery9.png"
          alt="rest-2"
          height="500px"
        />
        <p className="carousel-text">No Minimum Order</p>
      </div>
      <div className="carousel-slide">
        <img
          src="https://www.enukesoftware.com/blog/wp-content/uploads/2017/04/onine-food-delivery.jpg"
          alt="rest-2"
          height="500px"
        />
        <p className="carousel-text">Food Available At Your Doorstep 24/7 </p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
