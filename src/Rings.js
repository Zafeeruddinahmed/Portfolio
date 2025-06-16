import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function RotatingRings() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ring1.current.rotation.z = t * 0.3;
    ring2.current.rotation.z = -t * 0.4;
    ring3.current.rotation.z = t * 0.5;
  });

  return (
    <>
      <mesh ref={ring1}>
        <ringGeometry args={[1, 1.2, 64]} />
        <meshBasicMaterial color="#00ffff" side={2} />
      </mesh>
      <mesh ref={ring2}>
        <ringGeometry args={[1.4, 1.6, 64]} />
        <meshBasicMaterial color="#444444" side={2} />
      </mesh>
      <mesh ref={ring3}>
        <ringGeometry args={[1.8, 2.0, 64]} />
        <meshBasicMaterial color="#0011ff" side={2} />
      </mesh>
    </>
  );
}

const Rings = () => (
  <Canvas camera={{ position: [0, 0, 5] }}>
    <ambientLight />
    <OrbitControls enableZoom={false} autoRotate />
    <RotatingRings />
  </Canvas>
);

export default Rings;
