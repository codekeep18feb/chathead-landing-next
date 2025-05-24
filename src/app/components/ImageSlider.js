// src/app/components/ImageSlider.js
import React, { useState } from "react";

const ImageSlider = ({ images, onClose,}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const finishImage = () => {
    console.log("You clicked on finsih btn");
    setCurrentIndex(0);
    onClose();
  };

  return (
    <div>
      <div>
        {/* <div
          className="close-btn"
          onClick={onClose}
          style={{ cursor: "pointer", textAlign: "right" }}
        >
          <i className="bi bi-x" style={{ fontSize: "24px" }}></i>
        </div> */}

        {/* <img src={images[0]} alt="addChat" /> */}

        <img
          src={images[currentIndex]}
          alt={`Demo for version`}
        //   style={{ width: "100%"}}
        />
     

        <div className="step-navigation">
          <button
            onClick={prevImage}
            disabled={images.length === 0 || currentIndex === 0}
            className="btn btn-prev"
          >
            Previous
          </button>

          {images.length > 1 && currentIndex < images.length - 1 ? (
            <button onClick={nextImage} className="btn btn-next">
              Next
            </button>
          ) : (
            <button onClick={finishImage} className="btn btn-finish">
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


export default ImageSlider;
