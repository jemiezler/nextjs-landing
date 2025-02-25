"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

export default function HeroBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && backgroundRef.current) {
      setVantaEffect(
        HALO({
          el: backgroundRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x111111,
          backgroundColor: 0x000000,
          THREE: THREE, // Ensure Three.js is passed correctly
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup to prevent memory leaks
    };
  }, [vantaEffect]);

  return <div ref={backgroundRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
}
