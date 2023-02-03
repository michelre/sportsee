import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo-container">
      <img src={logo} alt="logo" className="main-logo"/>
      </Link>

      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Profil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Réglage
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Communauté
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header