import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0f0f0f,
          color: 0x00e6e6,
          spacing: 18.0,
          ringCount: 3.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }} />;
};

export default VantaBackground;
