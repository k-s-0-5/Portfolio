import "../Stylesheet.css";
import Hand from "./Hand.jsx";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import Carousel from "./Carousel.jsx";

const Hero = () => {
  return (
    <>
      <div className="hero-grid">
        <div className="header" style={{ gridArea: "header" }}>
          <h2>KJELD // SOFTWARE DEVELOPER</h2>
        </div>
        <div className="projects">
          <Carousel />
        </div>
        <div className="spiel">
          <p>
            I got into programming because I wanted to make video games as a kid.
            That grew into a general love of building software, and after finishing 
            an IT degree I am now looking for work in software engineering. Most of
            my personal projects have been full-stack, my most recent is a local web 
            chat application with a decent list of features. If you want to build 
            something, please reach out to me at <span className="bright-text">KjeldS2005@gmail.com</span>.
          </p>
          <a className="hero-button" href="https://github.com/k-s-0-5">
            Github
          </a>
        </div>
        <div className="stack" style={{ gridArea: "stack" }}>
          <div className="stack-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
          </div>
          <div className="stack-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
          </div>
          <div className="stack-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          </div>
          <div className="stack-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />
          </div>
          <div className="stack-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          </div>
          <div className="stack-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
          </div>
          <div className="stack-item">
            <Canvas>
              <Hand />
            </Canvas>
          </div>
          <div className="stack-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          </div>
          <div className="stack-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
