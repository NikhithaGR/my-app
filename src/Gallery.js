import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  // Pagination controls for gallery
  const nextPage = () => {
    if ((currentPage + 1) * 3 < images.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get the current set of images to display (3 per page)
  const currentImages = images.slice(currentPage * 3, (currentPage * 3) + 3);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        {/* Gallery button styled as shown in the design */}
        <h2>Gallery</h2>

        {/* Add image input */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          id="upload"
          hidden
        />
        <label htmlFor="upload" className="add-image-btn">+ Add Image</label>
        
        {/* Pagination controls (arrows) */}
        <div className="gallery-controls">
          <button onClick={prevPage} disabled={currentPage === 0}>
            ←
          </button>
          <button onClick={nextPage} disabled={(currentPage + 1) * 3 >= images.length}>
            →
          </button>
        </div>
      </div>

      {/* Gallery images */}
      <div className="gallery-images">
        {currentImages.map((image, index) => (
          <img key={index} src={image} alt={`uploaded ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;