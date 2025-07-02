import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();

  const navLinkClass = (path) =>
    `nav-link-custom ${pathname === path ? "active-nav" : ""}`;

  return (
    <nav className="custom-navbar shadow-sm">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        
        {/* LOGO LEFT SIDE */}
        <div className="navbar-logo d-flex align-items-center gap-2">
          <span className="logo-icon">🍽️🛒</span>
          <span className="logo-text fw-bold text-white">FoodCart</span>
        </div>

        {/* LINKS RIGHT SIDE */}
        <div className="navbar-links d-flex gap-3 flex-wrap">
          <Link to="/" className={navLinkClass("/")}>
            🏠 Home
          </Link>
          <Link to="/cart" className={navLinkClass("/cart")}>
            🧺 Cart
          </Link>
          <Link to="/recipes" className={navLinkClass("/recipes")}>
            👨‍🍳 Recipes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
