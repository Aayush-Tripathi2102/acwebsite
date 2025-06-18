"use client";
import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (typeof window !== "undefined") {
        try {
          // Load Three.js first
          const threeScript = document.createElement("script");
          threeScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
          document.head.appendChild(threeScript);

          threeScript.onload = () => {
            // Then load Vanta FOG
            const vantaScript = document.createElement("script");
            vantaScript.src =
              "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";
            document.head.appendChild(vantaScript);

            vantaScript.onload = () => {
              if (window.VANTA) {
                window.VANTA.FOG({
                  el: vantaRef.current,
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.0,
                  minWidth: 200.0,
                  highlightColor: 0x1eff00,
                  midtoneColor: 0x0a0a0a,
                  lowlightColor: 0x000000,
                  baseColor: 0x0a0a0a,
                  blurFactor: 0.9,
                  speed: 1.0,
                  zoom: 1.0,
                });
              }
            };
          };
        } catch (error) {
          console.error("Failed to load Vanta.js:", error);
        }
      }
    };

    loadVanta();
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10"
      style={{ zIndex: -1 }}
    />
  );
}
