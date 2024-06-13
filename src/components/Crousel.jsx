import { slides } from "../assets/Data";
import React, { useState, useEffect } from "react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
      className="w-full h-full bg-center bg-cover mix-blend-overlay duration-500"
    ></div>
  );
}

export default Carousel;
