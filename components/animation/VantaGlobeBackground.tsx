import { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

type VantaEffect = {
  destroy: () => void;
};

export default function VantaGlobeBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect && typeof window !== "undefined") {
      const effect = GLOBE({
        el: vantaRef.current,
        THREE,
        color: 0xff3f81,
        backgroundColor: 0x23153c,
        backgroundAlpha: 0.0,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
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
