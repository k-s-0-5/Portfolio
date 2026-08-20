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
          `rotateY(${angle}deg) translateZ(${600}px)`;

        carousel.current.children[i].children[0].classList.remove("active");
      }
      carousel.current.children[0].children[0].classList.add("active");
    }
  }, []);

  const rotateCarousel = (right) => {
    if (count.current > 0) {
      carouselRotation.current += right
        ? -360 / count.current
        : 360 / count.current;
      carousel.current.style.transform = `rotateY(${carouselRotation.current}deg)`;

      const rotations =
        (((carouselRotation.current % 360) + 360) % 360) /
        (360 / count.current);

      for (var i = 0; i < count.current; i++) {
        var frontIndex = (count.current - i) % count.current;
        if (i == rotations) {
          carousel.current.children[frontIndex].children[0].classList.add(
            "active",
          );
        } else {
          carousel.current.children[frontIndex].children[0].classList.remove(
            "active",
          );
        }
      }
    }
  };

  return (
    <>
      <div className="carousel-title">Personal Projects</div>
      <div className="carousel-wrapper" ref={carouselRef}>
        <button
          className="carousel-button left"
          onClick={() => rotateCarousel(false)}
        >
          <span>←</span>
        </button>

        <div className="carousel" id="carousel">
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/PureAzure.png`}
                  className="card-img"
                />
              </div>
              <span className="card-title">Pure Azure Reworked</span>
              <div className="card-text">
                <p>
                  An extension of a former group Unity project with a heavy
                  focus on decoupling code, improving maintainability, improving
                  art, and improving enemy AIs.
                </p>
                <ul>
                  <li>C#</li>
                </ul>
              </div>
              <div className="button-wrapper">
                <a
                  className="card-button"
                  href="https://ks05.itch.io/pure-azure-reworked"
                >
                  Project's Itch
                </a>
                <a
                  className="card-button"
                  href="https://github.com/k-s-0-5/pure-azure"
                >
                  Project's Github
                </a>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/PiratesTD.png`}
                  className="card-img"
                />
              </div>
              <span className="card-title">PiratesTD</span>
              <div className="card-text">
                <p>
                  A 2D tower defense game that utilizes A* pathfinding to allow
                  the player to create their own path for enemies to traverse.
                </p>
                <ul>
                  <li>C#</li>
                </ul>
              </div>
              <div className="button-wrapper">
                <a
                  className="card-button"
                  href="https://ks05.itch.io/piratestd"
                >
                  Project's Itch
                </a>
                <a
                  className="card-button"
                  href="https://github.com/k-s-0-5/PiratesTD"
                >
                  Project's Github
                </a>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/Login.png`}
                  className="card-img"
                />
              </div>
              <span className="card-title">Test Chat Webapp</span>
              <div className="card-text">
                <p>
                  A stateless local chat app created with the Spring Boot Java
                  framework. Allows users to create accounts, log in, and
                  communicate with connected users in real-time through the use
                  of WebSockets.
                </p>
                <ul>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className="button-wrapper">
                <a
                  className="card-button"
                  href="https://github.com/k-s-0-5/chat-app"
                >
                  Project's Github
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-button right"
          onClick={() => rotateCarousel(true)}
        >
          <span>→</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
