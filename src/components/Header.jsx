import { Link } from 'react-router-dom'
 
function Header() {
    return (
    <header>
        <div className='logo'>
            <Link to="/">
                <img src="../assets/images/logo.png" alt="logo Kasa" />
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