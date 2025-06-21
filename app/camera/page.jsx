"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Webcam from "react-webcam";
import { FaCamera, FaTrash, FaChevronLeft, FaCheck } from "react-icons/fa";
import { MdFlipCameraIos, MdFlashOn, MdFlashOff } from "react-icons/md";

const Camera = () => {
  const webcamRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [viewMode, setViewMode] = useState("camera");
  const [facingMode, setFacingMode] = useState("user");
  const [flash, setFlash] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [showCaptureFeedback, setShowCaptureFeedback] = useState(false);

  const videoConstraints = {
    facingMode: facingMode,
    width: { ideal: 1280 },
    height: { ideal: 720 },
  };

  const capture = useCallback(() => {
    if (webcamRef.current && !isCapturing) {
      setIsCapturing(true);
      setShowCaptureFeedback(true);

      setTimeout(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          setCapturedImages((prev) => [imageSrc, ...prev]);
        }

        setTimeout(() => {
          setShowCaptureFeedback(false);
          setIsCapturing(false);
        }, 1000);
      }, 100);
    }
  }, [isCapturing]);

  const deleteImage = (index) => {
    setCapturedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  const toggleFlash = () => {
    setFlash((prev) => !prev);
  };

  return (
    <div className="relative w-full h-full bg-black">
      <AnimatePresence>
        {viewMode === "camera" ? (
          <motion.div
            key="camera"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full"
          >
            {/* Camera View */}
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="absolute top-0 left-0 w-full h-full object-cover"
              audio={false}
            />

            {/* Flash effect */}
            {showCaptureFeedback && (
              <div className="absolute inset-0 bg-white animate-pulse duration-200"></div>
            )}

            {/* Camera Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between">
              {/* Top controls */}
              <div className="w-full flex justify-between items-center p-4 bg-gradient-to-b from-black/70 to-transparent">
                <button
                  onClick={toggleFlash}
                  className="p-2 rounded-full bg-black/50 text-white"
                >
                  {flash ? <MdFlashOn size={24} /> : <MdFlashOff size={24} />}
                </button>

                <button
                  onClick={() => setViewMode("gallery")}
                  className="text-white font-medium flex items-center gap-1"
                >
                  <span className="text-lg">{capturedImages.length}</span>
                  <FaChevronLeft className="rotate-180" />
                </button>
              </div>

              {/* Bottom controls */}
              <div className="w-full flex flex-col items-center pb-8 bg-gradient-to-t from-black/70 to-transparent">
                {/* Camera switch button */}
                <button
                  onClick={toggleCamera}
                  className="mb-4 p-2 rounded-full bg-black/50 text-white"
                >
                  <MdFlipCameraIos size={24} />
                </button>

                {/* Capture button */}
                <button
                  onClick={capture}
                  disabled={isCapturing}
                  className={`w-16 h-16 rounded-full border-4 ${
                    isCapturing ? "border-gray-400" : "border-white"
                  } flex items-center justify-center transition-all`}
                >
                  <div
                    className={`w-12 h-12 rounded-full ${
                      isCapturing ? "bg-gray-400" : "bg-white"
                    } transition-all`}
                  ></div>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full bg-gray-900"
          >
            {/* Gallery View */}
            <div className="w-full h-full flex flex-col">
              {/* Gallery header */}
              <div className="w-full flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
                <button
                  onClick={() => setViewMode("camera")}
                  className="text-white flex items-center gap-2"
                >
                  <FaChevronLeft size={16} />
                  <span className="font-medium">Camera</span>
                </button>
                <h1 className="text-xl font-bold text-white">Gallery</h1>
                <div className="w-8"></div> {/* Spacer */}
              </div>

              {/* Gallery content */}
              {capturedImages.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                  <p className="text-lg mb-2">No photos yet</p>
                  <p className="text-sm">Capture moments to see them here</p>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {capturedImages.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative aspect-square rounded-lg overflow-hidden bg-gray-800"
                      >
                        <img
                          src={img}
                          alt={`Captured ${index}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => deleteImage(index)}
                          className="absolute top-2 right-2 bg-black/70 p-2 rounded-full hover:bg-black"
                        >
                          <FaTrash className="text-white text-sm" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Camera;
