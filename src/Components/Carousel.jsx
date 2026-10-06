import "../Stylesheet.css";
import { useState, useMemo, useRef, useEffect } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const groupRef = useRef([]);
  const isMoving = useRef(false);

  useEffect(() => {
    groupRef.current = carouselRef.current.querySelectorAll(".group");
    cardsRef.current = carouselRef.current.querySelector(".group").querySelectorAll(".card");

    setSlideWidth(
      cardsRef.current[0].getBoundingClientRect().width +
        parseFloat(getComputedStyle(carouselRef.current).fontSize),
    );
  }, []);

  function updateIndex(moveBy) {
    if (isMoving.current) {
      return;
    }
    isMoving.current = true;
    setIndex(index + moveBy);
  }

  function handleTransitionEnd() {
    const carousel = carouselRef.current;
    isMoving.current = false;
    if(index > cardsRef.current.length - 1 || index < 0) {
      const next = getMod(index, cardsRef.current.length);
      carousel.style.transition = `none`;
      carousel.style.transform = `translateX(calc(${-next * slideWidth}px))`;
      setIndex(next);
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.style.transition = `transform .4s ease-in-out`;
    carousel.style.transform = `translateX(calc(${-index * slideWidth}px))`;
  }, [index, slideWidth]);

  function getMod(input, mod) {
    return (input + mod) % mod;
  }

  return (
    <>
    <button className="carousel-control left" onClick={() => updateIndex(-1)}>←</button>
      <div className="scroll" id={"scroll"} ref={trackRef}>
        <div className="carousel" ref={carouselRef} onTransitionEnd={handleTransitionEnd}>
          <div className="group">
            <div className="card active">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/PureAzure.png`}
                  className="card-img"
                />
              </div>
              <h3>Pure Azure Reworked</h3>
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
                  Itch
                </a>
                <a
                  className="card-button"
                  href="https://github.com/k-s-0-5/pure-azure"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/Login.png`}
                  className="card-img"
                />
              </div>
              <h3>Chat Web Application</h3>
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
                  Github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/PiratesTD.png`}
                  className="card-img"
                />
              </div>
              <h3>PiratesTD</h3>
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
                  Itch
                </a>
                <a
                  className="card-button"
                  href="https://github.com/k-s-0-5/PiratesTD"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="card active">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/PureAzure.png`}
                  className="card-img"
                />
              </div>
              <h3>Pure Azure Reworked</h3>
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
                  Itch
                </a>
                <a
                  className="card-button"
                  href="https://github.com/k-s-0-5/pure-azure"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/Login.png`}
                  className="card-img"
                />
              </div>
              <h3>Chat Web Application</h3>
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
                  Github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/PiratesTD.png`}
                  className="card-img"
                />
              </div>
              <h3>PiratesTD</h3>
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
                  Itch
                </a>
                <a
                  className="card-button"
                  href="https://github.com/k-s-0-5/PiratesTD"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="card active">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/PureAzure.png`}
                  className="card-img"
                />
              </div>
              <h3>Pure Azure Reworked</h3>
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
                  Itch
                </a>
                <a
                  className="card-button"
                  href="https://github.com/k-s-0-5/pure-azure"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/Login.png`}
                  className="card-img"
                />
              </div>
              <h3>Chat Web Application</h3>
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
                  Github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-img-background">
                <img
                  src={`${import.meta.env.BASE_URL}/PiratesTD.png`}
                  className="card-img"
                />
              </div>
              <h3>PiratesTD</h3>
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
                  Itch
                </a>
                <a
                  className="card-button"
                  href="https://github.com/k-s-0-5/PiratesTD"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control right" onClick={() => updateIndex(1)}>→</button>
    </>
  );
};

export default Carousel;
