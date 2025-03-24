import React from 'react';

const AboutSlider = () => {
  const logos = [
    "/about/s1.jpeg",
    "/about/s2.jpeg",
    "/about/s3.jpeg",
    "/about/s4.jpeg",
    "/about/s5.jpeg",
  ];

  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto overflow-hidden py-6">
      <div className="whitespace-nowrap flex items-center animate-marquee-alternate mt-4">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-8 sm:h-16 mx-6 object-contain"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default AboutSlider;
