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

        carousel.current.children[i].children[0].classList.remove('active');
      }
      carousel.current.children[0].children[0].classList.add('active'); 
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
        var frontIndex = (count.current - i) % count.current ;
        if (i == rotations) {
          carousel.current.children[frontIndex].children[0].classList.add('active'); 
        } else {
          carousel.current.children[frontIndex].children[0].classList.remove('active');
        }
      }
    }
  };

  return (
    <div className="carousel-wrapper" ref={carouselRef}>
      <button className="carousel-btn left" onClick={() => rotateCarousel(false)}>
        <span>←</span>
      </button>
      <div className="carousel" id="carousel">

        <div className="card-wrapper">
          <div className="card">
            <img src="../../public/favicon.svg" className="card-img"/>
            <div className="card-text">
              <span className="card-title">Project 1</span>
              <p>This was my first project completed using the following languages: Lorem Ipsum...</p>
            </div>
            <button className="card-button t-button">Project's Itch</button>
            <button className="card-button b-button">Project's Github</button>
          </div>
        </div>
        
        <div className="card-wrapper">
          <div className="card">
            <img src="../../public/favicon.svg" className="card-img"/>
            <div className="card-text">
              <span className="card-title">Project 1</span>
              <p>This was my first project completed using the following languages: Lorem Ipsum...</p>
            </div>
            <button className="card-button t-button">Project's Itch</button>
            <button className="card-button b-button">Project's Github</button>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <img src="../../public/favicon.svg" className="card-img"/>
            <div className="card-text">
              <span className="card-title">Project 1</span>
              <p>This was my first project completed using the following languages: Lorem Ipsum...</p>
            </div>
            <button className="card-button t-button">Project's Itch</button>
            <button className="card-button b-button">Project's Github</button>
          </div>
        </div>
        
        <div className="card-wrapper">
          <div className="card">
            <img src="../../public/favicon.svg" className="card-img"/>
            <div className="card-text">
              <span className="card-title">Project 1</span>
              <p>This was my first project completed using the following languages: Lorem Ipsum...</p>
            </div>
            <button className="card-button t-button">Project's Itch</button>
            <button className="card-button b-button">Project's Github</button>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <img src="../../public/favicon.svg" className="card-img"/>
            <div className="card-text">
              <span className="card-title">Project 1</span>
              <p>This was my first project completed using the following languages: Lorem Ipsum...</p>
            </div>
            <button className="card-button t-button">Project's Itch</button>
            <button className="card-button b-button">Project's Github</button>
          </div>
        </div>

      </div>
      <button className="carousel-btn right" onClick={() => rotateCarousel(true)}>
        <span>→</span>
      </button>
    </div>
  );
};

export default Carousel;
