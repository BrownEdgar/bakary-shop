import { Link } from 'react-router-dom'
import ROUTES from '../../ROUTES/routes'
import Logo from '../../assets/images/logo.jpg'

import '../../sass/Navbar.scss'

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="site ligo" />
        </a>
      </div>
      <nav>
        <ul id="menu">
          <li>
            <Link to={ROUTES.HOME}>home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>about</Link>
          </li>
          <li>
            <Link to={ROUTES.PRODUCTS}>our products</Link>
          </li>
          <li>
            <Link to={ROUTES.NEWS}>news</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACT_US}>contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
