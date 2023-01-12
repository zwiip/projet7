import { useState } from 'react';
import arrow_left from '../assets/images/arrow-left.png'
import arrow_right from '../assets/images/arrow-right.png'

/**
 * Composant react pour afficher un caroussel de photos
 * 2 gestions d'évènements
 * @param {Array} images : tableau d'url des images à afficher
 * @returns affiche une div contenant le caroussel, les boutons précédent et suivant ainsi qu'un compteur s'affichent s'il existe plusieurs images.
 */
function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

/**
 * fonction de gestion d'évènement d'un clic sur le bouton précédent
 * Si l'index courant est égal à 0, l'image précédente sera la dernière image de la liste
 */
  function handlePreviousClick() {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  /**
   * fonction de gestion d'évènement d'un clic sur le bouton suivant
   * Si l'index courant est égal à la longueur de la liste d'images - 1, la prochaine image sera la première image de la liste
   */
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
