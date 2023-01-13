import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

/**
 * Permet de créer le composant footer
 * @returns Retourne un composant footer avec le logo pointant vers l'accueil et un texte indiquant les droits d'auteur.
 */
function Footer() {
    return (
        <footer>
            <div className='logo'>
            <Link to="/">
                <img src={logo} alt="logo Kasa" />
            </Link>
        </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer