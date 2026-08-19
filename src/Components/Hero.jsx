import "../Stylesheet.css";
import Hand from "./Hand.jsx";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";

const Hero = () => {
  return (
    <>
      <div className="hero-grid">
        <div className="header" style={{ gridArea: "header" }}>
          <h2>
            Hey my name is&nbsp;<span className="highlight-text">Kjeld</span>
          </h2>
        </div>
        <div style={{ gridArea: "model" }}>
          <div className="hero-model">
            <Canvas className="canvas">
              <Hand />
            </Canvas>
          </div>
        </div>
        <div className="spiel" style={{ gridArea: "spiel" }}>
          <div style={{ fontWeight: "bold" }}>About Me:</div>
          <div>
            I'm a developer based in Queensland. I enjoy building games and
            websites' frontends and backends. Outside of work, I love learning
            languages and talking to people from all around the world.
          </div>
        </div>
        <div className="stack" style={{ gridArea: "stack" }}>
          <div className="stack-carousel">
            <div className="group">
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
            </div>
            <div className="group">
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
            </div>
          </div>
        </div>
        <div className="button" style={{ gridArea: "button" }}>
          <p className="hero-subheading">Check out my GitHub!</p>
          <a className="hero-button" href="https://github.com/k-s-0-5">
            Github
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
