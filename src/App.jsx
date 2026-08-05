import { useState, useMemo } from "react";
import "./Index.css";
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

const App = () => {
  return (
    <div >
      <div className="gradient">
        <Hero />
        <Carousel />
      </div>
    </div>
  );
};

export default App;
