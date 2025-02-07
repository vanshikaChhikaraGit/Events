import React, { useState, useEffect } from "react";

export const Carousel = () => {
  const slides = [
    "https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_2000/c_crop%2Cg_custom%2Fv1738557813%2Fpbtvfv5t7jbupg8bikpl.jpg",
    "https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_2000/c_crop%2Cg_custom%2Fv1734848906%2Fkd2gxa8ggi3dpb72wst4.jpg",
    "https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_2000/c_crop%2Cg_custom%2Fv1736528998%2Fveitsuhqa8pzpnt5qnul.jpg",
    "https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_2000/c_crop%2Cg_custom%2Fv1737717838%2Fgnx1juukgwqruycrvsxf.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="carousel-container overflow-hidden relative w-full h-64">
        <div
          className="carousel flex transition-transform duration-800 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-64 flex items-center justify-center p-2"
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
