import "../Stylesheet.css";
import { useState, useMemo, useRef, useEffect } from "react";

const Carousel = () => {
  const carouselRef = useRef();
  const carousel = useRef();
  const carouselRotation = useRef(0);
  const count = useRef(0);

  useEffect(() => {
    if (carouselRef.current) {
      carousel.current = carouselRef.current.querySelector("#carousel");
      count.current = carousel.current.childElementCount;

      for (var i = 0; i < count.current; i++) {
        const angle = i * (360 / count.current);
        const depth = Math.abs(Math.sin(angle * (Math.PI / 180)));
        carousel.current.children[i].style.transform =
          `rotateY(${angle}deg) translateZ(${800}px)`;

        carousel.current.children[i].style.transition = "filter 0.3s ease";

        carousel.current.children[i].style.filter =
          `brightness(.5) saturate(.5)`;
      }

      carousel.current.children[0].style.filter = `brightness(1) saturate(1)`;
      carousel.current.children[1 % count.current].style.filter =
        `brightness(0.75) saturate(0.75)`;
      carousel.current.children[
        ((-1 % count.current) + count.current) % count.current
      ].style.filter = `brightness(0.75) saturate(0.75)`;
    }
  }, []);

  const rotateCarousel = (right) => {
    if (count.current > 0) {
      carouselRotation.current += right
        ? 360 / count.current
        : -360 / count.current;

      carousel.current.style.transform = `rotateY(${carouselRotation.current}deg)`;

      const rotations =
        (((carouselRotation.current % 360) + 360) % 360) /
        (360 / count.current);

      for (var i = 0; i < count.current; i++) {
        var inv = (count.current - i) % count.current ;
        if (i == rotations) {
          carousel.current.children[inv].style.filter =
            `brightness(1) saturate(1)`;
        } else if (
          i ==
            (rotations - (1 % count.current) + count.current) % count.current ||
          i == (rotations + (1 % count.current) + count.current) % count.current
        ) {
          carousel.current.children[inv].style.filter =
            `brightness(0.75) saturate(0.75)`;
        } else {
          carousel.current.children[inv].style.filter =
            `brightness(0.5) saturate(0.5)`;
        }
      }
    }
  };

  return (
    <>
      <div className="carousel-wrapper" ref={carouselRef}>
        <button className="btn-1 left" onClick={() => rotateCarousel(false)}>
          <span>←</span>
        </button>
        <div className="carousel" id="carousel">

          <div className="card">
            <img src="../../public/favicon.svg" className="card-img"/>
            <div className="card-text">
              <span className="card-title">Project 1</span>
              <p>This was my first project completed using the following languages: Lorem Ipsum...</p>
            </div>
            <button className="card-button t-button">Project's Itch</button>
            <button className="card-button b-button">Project's Github</button>
          </div>

          
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
        <button className="btn-1 right" onClick={() => rotateCarousel(true)}>
          <span>→</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
