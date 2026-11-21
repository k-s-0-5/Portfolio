import "../Stylesheet.css";
import Hand from "./Hand.jsx";
import { Canvas } from "@react-three/fiber";
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
            I am a recent graduate and full-stack software developer, seeking an
            opportunity to build real world projects. I am motivated by the
            prospect of working on creative and complex projects, especially
            with a team that brings vast and varying experiences and viewpoints.
            Through academics and personal projects I have accrued experience in
            website, application, and game development. My most recent project
            is a local web chat application with a decent list of features. If
            you want to build something, please reach out to me at {" "}
            <a href="mailto:KjeldS2005@gmail.com">KjeldS2005@gmail.com</a> or
            check out my work on <a href="https://github.com/k-s-0-5">GitHub</a>
            .
          </p>
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
