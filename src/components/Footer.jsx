import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
 
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