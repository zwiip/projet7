import { useState } from 'react';
import arrow_left from '../assets/images/arrow-left.png'
import arrow_right from '../assets/images/arrow-right.png'

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);


  function handlePreviousClick() {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleNextClick() {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="gallery">
        <div className='gallery_nav gallery_nav-left'>
            {images.length > 1 && (
            <img className="arrow_nav" src={arrow_left} alt="précédent" onClick={handlePreviousClick} />
            )}
        </div>
        <div className='gallery_image'>
            <img src={images[currentIndex]} alt="" />
        </div>
        <div className='gallery_nav gallery_nav-right'>
            {images.length > 1 && (
            <img className="arrow_nav" src={arrow_right} alt="suivant" onClick={handleNextClick} />
            )}
        </div>
        <div>
            {images.length > 1 && (
            <div className="gallery_counter">
            {currentIndex + 1}/{images.length}
        </div>
      )}
        </div>
    </div>
  );
}

export default Gallery;
