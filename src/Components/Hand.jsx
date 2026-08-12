import { useState, useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, useFBO } from "@react-three/drei";
import * as THREE from "three";
import vertexShader from "../Shaders/vertex.glsl?raw";
import fragmentShader from "../Shaders/fragment.glsl?raw";
import { clamp } from "three/src/math/MathUtils.js";

function usePlayAnimations(meshRef, scene, animations, hovered) {
  const { actions } = useAnimations(animations, scene);
  const [wave, setWave] = useState(true);
  const timerRef = useRef(0);
  const startRotRef = useRef(0);
  const targetRotRef = useRef(0);

  useEffect(() => {
    const action = actions["Wave"];
    if (!action) return;
    action.clampWhenFinished = true; // Pause on finish
    action.setLoop(THREE.LoopOnce); // Oneshot action
    if (hovered) {
      action.paused = false;
      action.timeScale = 1;
      action.play();
    } else {
      action.paused = false;
      action.timeScale = -1;
      action.play();
    }
  }, [hovered, actions]);

  useEffect(() => {
    if (!meshRef.current) return;
    let targetDeg = hovered ? 90 + (wave ? 15. : -25.) : 0.;
    const targetRad = targetDeg * (Math.PI / 180);
    targetRotRef.current = -targetRad;
    startRotRef.current = meshRef.current.rotation.z;
    timerRef.current = 0.;
  }, [hovered, wave]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const targetScale = hovered ? 1 : 1.1;
    meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1,);

    const currentDeg = meshRef.current.rotation.z / (Math.PI / 180);
    
    if (hovered){
      timerRef.current = clamp(timerRef.current + (hovered ? 4 : 1.5) * delta, 0., 1.);

      if (wave && currentDeg + 90 <= -14.){
        setWave(false);
      } else if (!wave && currentDeg + 90 >= 24.){
        setWave(true);
      }  
    } 
    else {
      if(currentDeg < .1){
        timerRef.current = clamp(timerRef.current + (hovered ? 4 : 1.5) * delta, 0., 1.);
      } 
    }
    
    let time = ((4 * Math.pow(timerRef.current, 3)) - (3 * Math.pow(timerRef.current, 4)));
    meshRef.current.rotation.z = THREE.MathUtils.lerp(startRotRef.current, targetRotRef.current, 
        time);
  });

  return {
    onPointerOver: () => setHovered(true),
    onPointerOut: () => setHovered(false),
  };
}

function useApplyShader(scene) {
  const { camera } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      cameraPos: { value: camera.position },
    }),
    [],
  );

  const lightCamera = useMemo(() => {
    const cam = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 20);
    cam.position.set(-3, 4, 4);
    cam.lookAt(0, 0, 0);
    cam.updateMatrixWorld();
    return cam;
  }, []);

  const target = useMemo(() => {
    const rt = new THREE.WebGLRenderTarget(2048, 2048);
    rt.depthTexture = new THREE.DepthTexture();
    return rt;
  }, []);

  const depthMaterial = new THREE.MeshDepthMaterial({
    depthPacking: THREE.RGBADepthPacking,
  });

  useFrame(({ gl, scene }) => {
    scene.overrideMaterial = depthMaterial;
    gl.setRenderTarget(target);
    gl.render(scene, lightCamera);
    gl.setRenderTarget(null);
    scene.overrideMaterial = null;
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.ShaderMaterial({
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          uniforms: {
            cameraPos: { value: camera.position },
            shadowMap: { value: target.depthTexture },
            lightProjection: { value: lightCamera.projectionMatrix },
            lightView: { value: lightCamera.matrixWorldInverse },
          },
        });
      }
    });
  }, [scene]);
}

function GetModel() {
  const meshRef = useRef();
  const { scene, animations } = useGLTF("/Hand.glb");
  const [hovered, setHovered] = useState(false);

  useApplyShader(scene);
  
  const events = usePlayAnimations(meshRef, scene, animations, hovered);

  return (
    <primitive
      object={scene}
      ref={meshRef}
      scale={[1, 1, 1]}
      position={[0, -.5, 0]}
      rotation={[0, 0, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    />
  );
}

export default function Hand() {
  return (
    <GetModel />
  );
};