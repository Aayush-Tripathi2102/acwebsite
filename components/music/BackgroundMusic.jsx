"use client";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.05;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Autoplay failed:", err));
    }
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed top-4 right-4 p-2 bg-white rounded-full shadow z-50 flex items-center justify-center"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-gray-900" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-900" />
        )}
      </button>
      <audio ref={audioRef} src="/sounds/bgm.mp3" loop />
    </>
  );
}
