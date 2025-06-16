// src/InteractiveRings.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Ring({ position, color }) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[2, 0.05, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}

function RingsScene() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        background: "#000",
      }}
      camera={{ position: [0, 0, 8], fov: 60 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} />
      <Ring position={[0, 0, 0]} color="#1a1aff" />
      <Ring position={[0, 0, -1]} color="#444" />
      <Ring position={[0, 0, -2]} color="#000" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

export default RingsScene;
