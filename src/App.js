import React, { useState } from "react";
import "./App.css";
import slider1 from './img/slider1.jpg';
import slider2 from './img/slider 2.jpg';
import slider3 from './img/slider 3.jpg';
import slider4 from './img/slider 4.jpg';


const images = [
  {
    src: slider1,
    title: "name Slider 1",
    description: "Description 1",
  },
  {
    src: slider2,
    title: "name Slider 2",
    description: "Description 2",
  },
  {
    src: slider3,
    title: "name Slider 3",
    description: "Description 3",
  },
  {
    src: slider4,
    title: "name Slider 4",
    description: "Description 4",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slider-container">
      <div className="main-slider">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="main-image"
        />
        <div className="text-content">
          <h1>{images[currentIndex].title}</h1>
          <p>{images[currentIndex].description}</p>
          <button className="see-more">See More</button>
          <button className="subscribe">Subscribe to</button>
        </div>
      </div>

      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${
              currentIndex === index ? "active-thumbnail" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={image.src} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
