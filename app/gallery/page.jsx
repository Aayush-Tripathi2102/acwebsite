'use client';
import React, { useState } from 'react';

const ScrollableGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full p-4" style={{height: '570px'}}>
      <div 
        className="h-full overflow-y-auto scrollbar-transparent"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            .scrollbar-transparent::-webkit-scrollbar {
              display: none;
            }
          `
        }} />
        <div className="grid grid-cols-12 gap-4 auto-rows-min">
          {/* First row */}
          <div className="col-span-3 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(0)}>
            <img 
              src="https://picsum.photos/400/600?random=1" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-6 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(1)}>
            <img 
              src="https://picsum.photos/600/300?random=2" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(2)}>
            <img 
              src="https://picsum.photos/400/300?random=3" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second row */}
          <div className="col-span-4 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(3)}>
            <img 
              src="https://picsum.photos/500/300?random=4" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(4)}>
            <img 
              src="https://picsum.photos/300/600?random=5" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(5)}>
            <img 
              src="https://picsum.photos/400/600?random=6" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(6)}>
            <img 
              src="https://picsum.photos/400/300?random=7" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third row */}
          <div className="col-span-2 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(7)}>
            <img 
              src="https://picsum.photos/300/300?random=8" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(8)}>
            <img 
              src="https://picsum.photos/300/300?random=9" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(9)}>
            <img 
              src="https://picsum.photos/400/300?random=10" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Additional rows for scrolling */}
          <div className="col-span-3 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(10)}>
            <img 
              src="https://picsum.photos/400/600?random=11" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-6 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(11)}>
            <img 
              src="https://picsum.photos/600/300?random=12" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(12)}>
            <img 
              src="https://picsum.photos/400/300?random=13" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-4 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(13)}>
            <img 
              src="https://picsum.photos/500/300?random=14" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(14)}>
            <img 
              src="https://picsum.photos/300/600?random=15" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(15)}>
            <img 
              src="https://picsum.photos/400/600?random=16" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(16)}>
            <img 
              src="https://picsum.photos/400/300?random=17" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fourth row */}
          <div className="col-span-2 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(17)}>
            <img 
              src="https://picsum.photos/300/300?random=18" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(18)}>
            <img 
              src="https://picsum.photos/400/300?random=19" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(19)}>
            <img 
              src="https://picsum.photos/500/600?random=20" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(20)}>
            <img 
              src="https://picsum.photos/400/300?random=21" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fifth row */}
          <div className="col-span-5 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(21)}>
            <img 
              src="https://picsum.photos/500/300?random=22" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(22)}>
            <img 
              src="https://picsum.photos/400/300?random=23" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(23)}>
            <img 
              src="https://picsum.photos/500/600?random=24" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Sixth row */}
          <div className="col-span-3 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(24)}>
            <img 
              src="https://picsum.photos/400/600?random=25" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(25)}>
            <img 
              src="https://picsum.photos/400/300?random=26" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(26)}>
            <img 
              src="https://picsum.photos/300/300?random=27" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Seventh row */}
          <div className="col-span-6 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(27)}>
            <img 
              src="https://picsum.photos/600/300?random=28" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(28)}>
            <img 
              src="https://picsum.photos/400/300?random=29" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(29)}>
            <img 
              src="https://picsum.photos/400/600?random=30" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Eighth row */}
          <div className="col-span-2 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(30)}>
            <img 
              src="https://picsum.photos/300/300?random=31" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(31)}>
            <img 
              src="https://picsum.photos/500/300?random=32" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(32)}>
            <img 
              src="https://picsum.photos/400/300?random=33" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(33)}>
            <img 
              src="https://picsum.photos/400/300?random=34" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Ninth row */}
          <div className="col-span-12 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(34)}>
            <img 
              src="https://picsum.photos/800/300?random=35" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tenth row */}
          <div className="col-span-4 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(35)}>
            <img 
              src="https://picsum.photos/500/600?random=36" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(36)}>
            <img 
              src="https://picsum.photos/300/300?random=37" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(37)}>
            <img 
              src="https://picsum.photos/400/300?random=38" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(38)}>
            <img 
              src="https://picsum.photos/400/600?random=39" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Eleventh row */}
          <div className="col-span-2 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(39)}>
            <img 
              src="https://picsum.photos/300/300?random=40" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(40)}>
            <img 
              src="https://picsum.photos/400/300?random=41" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Twelfth row */}
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(41)}>
            <img 
              src="https://picsum.photos/400/300?random=42" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-6 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(42)}>
            <img 
              src="https://picsum.photos/600/300?random=43" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(43)}>
            <img 
              src="https://picsum.photos/400/600?random=44" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thirteenth row */}
          <div className="col-span-2 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(44)}>
            <img 
              src="https://picsum.photos/300/600?random=45" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(45)}>
            <img 
              src="https://picsum.photos/500/300?random=46" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(46)}>
            <img 
              src="https://picsum.photos/400/300?random=47" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fourteenth row */}
          <div className="col-span-4 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(47)}>
            <img 
              src="https://picsum.photos/500/300?random=48" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(48)}>
            <img 
              src="https://picsum.photos/400/300?random=49" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(49)}>
            <img 
              src="https://picsum.photos/300/300?random=50" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fifteenth row */}
          <div className="col-span-5 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(50)}>
            <img 
              src="https://picsum.photos/500/300?random=51" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(51)}>
            <img 
              src="https://picsum.photos/500/600?random=52" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(52)}>
            <img 
              src="https://picsum.photos/400/300?random=53" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Sixteenth row */}
          <div className="col-span-5 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(53)}>
            <img 
              src="https://picsum.photos/500/300?random=54" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 row-span-2 w-full h-64 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(54)}>
            <img 
              src="https://picsum.photos/400/600?random=55" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Seventeenth row */}
          <div className="col-span-3 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(55)}>
            <img 
              src="https://picsum.photos/400/300?random=56" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(56)}>
            <img 
              src="https://picsum.photos/300/300?random=57" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(57)}>
            <img 
              src="https://picsum.photos/500/300?random=58" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Final rows */}
          <div className="col-span-6 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(58)}>
            <img 
              src="https://picsum.photos/600/300?random=59" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-6 row-span-1 w-full h-32 rounded-lg bg-black overflow-hidden relative cursor-pointer" onClick={() => handleImageClick(59)}>
            <img 
              src="https://picsum.photos/600/300?random=60" 
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <img 
              src={`https://picsum.photos/800/600?random=${selectedImage + 1}`}
              alt={`Gallery image ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function GalleryPage() {
  return (
    <div style={{height: '570px'}}>
      <ScrollableGallery />
    </div>
  );
}