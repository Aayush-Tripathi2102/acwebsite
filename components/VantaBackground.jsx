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
            // Then load Vanta WAVES
            const vantaScript = document.createElement("script");
            vantaScript.src =
              "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js";
            document.head.appendChild(vantaScript);

            vantaScript.onload = () => {
              if (window.VANTA) {
                window.VANTA.WAVES({
                  el: vantaRef.current,
                  mouseControls: false,
                  touchControls: false,
                  gyroControls: false,
                  minHeight: 200.0,
                  minWidth: 200.0,
                  scale: 1.0,
                  scaleMobile: 1.0,
                  color: 0x6b00,
                  waveSpeed: 0.55,
                  zoom: 1.8,
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
