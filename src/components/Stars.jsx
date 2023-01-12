/**
 * composant react affichant une notation avec des étoiles
 * utilise une boucle pour créer une liste d'éléments span qui représentent des étoiles vides ou remplies en fonction de la propriété rating. 
 * @param {number} props.rating : La valeur de notations entre 0 et 5
 * @returns affiche une div contenant les étoiles de notation
 */
function Stars({ rating }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="star filled">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            &#9733;
          </span>
        );
      }
    }
    return <div className="stars">{stars}</div>;
  }
  
  export default Stars;