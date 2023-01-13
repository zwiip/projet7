import React, { useState } from 'react';
import arrow from "../assets/images/arrow.png"

/**
 * un composant Dropdown qui affiche un onglet déroulant
 * utilise useState pour gérer l'état de développement ou réduction du contenu (par défaut réduit)
 * @param {string} props.title :  permet d'afficher le titre à intégrer au composant
 * @param {string} props.children : permet d'afficher le contenu textuel à intégrer au composant
 * @returns un composant comprenant une div pour le titre cliquable avec une image de flèche et une autre div avec le contenu à cacher et afficher.
 */
function Dropdown(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  /**
   * permet de gérer l'évènement de clic sur le titre
   * utilise le state avec la fonction setIsExpanded pour inverser l'état courant et développer ou réduire le contenu
   */
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dropdown-box">
      <div className="dropdown-box_header" onClick={handleClick}>
        <h2 className='dropdown-box_title'>{props.title}</h2>
        <div className="arrow">
            <img src={arrow} alt="arrow" className={isExpanded ? 'arrow-up' : 'arrow-down'} />
            </div>
      </div>
      {isExpanded && (
        <div className="dropdown-box_content">
          {props.children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
