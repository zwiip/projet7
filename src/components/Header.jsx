import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

/**
 * composant react pour afficher le header avec le logo et les liens de navigation
 * @returns affiche le composant header
 */
function Header() {
    return (
    <header>
        <div className='logo'>
            <Link to="/">
                <img src={logo} alt="logo Kasa" />
            </Link>
        </div>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">A Propos</Link>
        </nav>
    </header>
    )
}

export default Header