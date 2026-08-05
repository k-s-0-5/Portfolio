import "../Stylesheet.css";
import Hand from "./Hand.jsx";
import { Canvas } from "@react-three/fiber";
import { Center } from '@react-three/drei'


const Hero = () => {

  return (
    <>
        <div className="column-2">
            <div className="hero">
                <div className="hero-text">
                    <h2 className="hero-header">
                        Hey my name is <span className="highlight-text">John</span>
                    </h2>
                    <div className="subheading-wrapper">
                        <p className="hero-subheading"> 
                            Check out my GitHub!
                        </p>
                        <button className="hero-button">Github</button>
                    </div>
                </div>

                <div className="hero-model">
                    <Canvas className="canvas">
                        <group>
                            <Center>
                                <Hand />
                            </Center>
                        </group>
                    </Canvas>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero