import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className="image-gallery">
      <div className="image-gallery__image-container">
        {/* <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} width={100} /> */}
        <img src={images[currentImageIndex]} alt="" width={100} />
      </div>
      <div className="image-gallery__buttons">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default ImageGallery;
