import React, { useEffect, useState } from "react";
import banner1 from "../assets/hero/banner1.webp";
import banner2 from "../assets/hero/banner2.webp";
import banner3 from "../assets/hero/banner3.webp";
import banner4 from "../assets/hero/banner4.webp";
import "./HeroBanner.css";

const HeroBanner = () => {
  const heroImages = [banner1, banner2, banner3, banner4];

  // Clone last image at start and first image at end
  const sliderImages = [
    heroImages[heroImages.length - 1],
    ...heroImages,
    heroImages[0],
  ];

  // Start from first real image
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Re-enable transition after jumping
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }
  }, [transition]);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // Reached cloned first image
    if (index === sliderImages.length - 1) {
      setTransition(false);
      setIndex(1);
    }

    // Reached cloned last image
    if (index === 0) {
      setTransition(false);
      setIndex(sliderImages.length - 2);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        <div
          className="slider-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: transition ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {sliderImages.map((image, i) => (
            <img key={i} src={image} alt={`Banner ${i + 1}`} />
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          ❮
        </button>

        <button className="next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;