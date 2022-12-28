import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

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