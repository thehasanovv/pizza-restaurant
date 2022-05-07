import React from "react";
import styles from "../../styles/Featured.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
  const images = [
    "/img/slide/50-offer-banner.jpg",
    "/img/slide/take-away-banner.jpg",
    "/img/slide/1+1-banner.jpg",
  ];

  return (
    <div className={styles.container}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        emulateTouch={true}
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
      >
        {images.map((image, count) => (
          <div key={count}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
