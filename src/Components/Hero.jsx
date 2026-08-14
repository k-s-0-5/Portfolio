import "../Stylesheet.css";
import Hand from "./Hand.jsx";
import { Canvas } from "@react-three/fiber";
import { Center } from '@react-three/drei'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-text">
            <h2 className="hero-header">
                Hey my name is <span className="highlight-text">Kjeld</span>
            </h2>
            <div className="subheading-wrapper">
                <p className="hero-subheading"> 
                    Check out my GitHub!
                </p>
                <a className="hero-button" href="https://github.com/k-s-0-5">Github</a>
            </div>
        </div>

        <div className="hero-model">
            <Canvas className="canvas">
                <Hand />
            </Canvas>
        </div>
    </div>
  )
}

export default Hero