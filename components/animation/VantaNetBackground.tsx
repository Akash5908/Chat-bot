"use client";

import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

// Type for Vanta effect instance
type VantaEffect = {
  destroy: () => void;
};

export default function VantaNetBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect && typeof window !== "undefined") {
      const effect = NET({
        el: vantaRef.current,
        THREE,
        color: 0xff3f81, // Dot and line color
        backgroundColor: 0x23153c,
        backgroundAlpha: 0.0, // Transparent background
        points: 10,
        maxDistance: 20,
        spacing: 15,
        showDots: true,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
        backgroundColor: "transparent",
      }}
    />
  );
}
