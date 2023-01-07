import { Link } from 'react-router-dom'
import '../assets/styles/sass/main.scss'

/**
 * Composant fonctionnel qui permet d'insérer les éléments de la page 404 et un lien pour retourner à l'accueil.
 */
function NotFound() {

  return (
    <div className='notfound'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;