// src/app/components/ImageSlider.js
import React, { useState } from 'react';

const ImageSlider = ({ images, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="overlay" style={overlayStyle}>
            <div className="popup" style={popupStyle}>
                <div className="close-btn" onClick={onClose} style={{ cursor: 'pointer', textAlign: 'right' }}>
                    <i className="bi bi-x" style={{ fontSize: '24px' }}></i>
                </div>
                <img src={images[currentIndex]} alt={`Demo for version`} style={{ width: '100%', borderRadius: '8px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <button onClick={prevImage} disabled={images.length <= 1}>Previous</button>
                    <button onClick={nextImage} disabled={images.length <= 1}>Next</button>
                </div>
            </div>
        </div>
    );
};

// Styles for the overlay and popup
const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const popupStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

export default ImageSlider;
