import React, { useState, useEffect } from "react";

const images = [
  "/Home/slider1.jpg",
  "/Home/slider2.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] lg:h-[80vh] md:h-[60vh] overflow-hidden group rounded-lg shadow-lg">
      {/* Image Slides */}
      <div className="absolute inset-0 ">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Left-Aligned Text Content (Only on First Slide) */}
      {currentIndex === 0 && (
        <div className="absolute left-10 top-1/4 md:left-25 md:top-1/4 lg:left-40 lg:top-2/7 text-left">
          <h1 className="text-gray-700 text-3xl lg:text-7xl md:text-7xl font-semibold ">
            Camera lens  
          </h1>
          <h2 className="text-gray-700 text-3xl lg:text-7xl md:text-7xl font-semibold">
          & photo
          </h2>
          <p className="text-gray-700 text-lg mt-1 md:mt-5 lg:mt-5">
            Avail 15% off on Making Charges for all Items
          </p>
          <button className=" text-white bg-yellow-500 mt-1 md:mt-4 lg:mt-4 px-3 py-1 md:py-3 md:px-7 lg:py-3 lg:px-7 lg:mt-7 md:mt-6 cursor-pointer">Shop Now</button>
        </div>
      )}

          {/* Left-Aligned Text Content (Only on second Slide) */}
          {currentIndex === 1 && (
        <div className="absolute left-10 top-1/4 md:left-25 md:top-1/4 lg:left-40 lg:top-2/7 text-left">
          <h1 className="text-gray-700 text-3xl lg:text-7xl md:text-7xl font-semibold ">
            Home Security
          </h1>
          <h2 className="text-gray-700 text-3xl lg:text-7xl md:text-7xl font-semibold">
          Camera 360 
          </h2>
          <p className="text-gray-700 text-lg mt-1 md:mt-5 lg:mt-5">
            Avail 15% off on Making Charges for all Items
          </p>
          <button className="  text-white bg-yellow-500 mt-1 md:mt-4 lg:mt-4 px-3 py-1 md:py-3 md:px-7 lg:py-3 lg:px-7 lg:mt-7 md:mt-6 cursor-pointer">Shop Now</button>
        </div>
      )}


      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={prevSlide}
          className="w-14 h-14 flex items-center justify-center bg-black/30 text-white rounded-full hover:bg-yellow-500 transition duration-300"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 flex items-center justify-center bg-black/30 text-white rounded-full hover:bg-yellow-500 transition duration-300"
        >
          ❯
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition ${
              index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
