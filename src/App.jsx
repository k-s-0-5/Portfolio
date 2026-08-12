import { useState, useMemo } from "react";
import "./Stylesheet.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PI, vec3 } from "three/src/nodes/TSL.js";
import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useFBO } from "@react-three/drei";
import { clamp } from "three/src/math/MathUtils.js";
import Hand from "./Components/Hand.jsx";
import Hero from "./Components/Hero.jsx";
import Carousel from "./Components/Carousel.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="grid">
        <div className="gradient"></div>
        <div className="main-content">
          <Hero />
          <Carousel />
          <Footer />
        </div>
        </div>
    </>
  );
};

export default App;
