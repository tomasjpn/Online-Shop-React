import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ fixed }) => {
  const location = useLocation();

  return (
    <div className="mainContainerNavbar">
      {/* Fügt div nur hinzu, wenn fixed true ist */}
      <div className={`navbar ${fixed ? "fixedNavbar" : ""}`}>
        {fixed && <div className="background"></div>}
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/store"
          className={location.pathname === "/store" ? "active" : ""}
        >
          Store
        </Link>
        <Link
          to="/gallery"
          className={location.pathname === "/gallery" ? "active" : ""}
        >
          Gallery
        </Link>
        <Link
          to="/searchpage"
          className={`search-page ${
            location.pathname === "/searchpage" ? "active" : ""
          }`}
        >
          <img />
        </Link>
        <Link
          to="/shoppingcart"
          className={`shopping-cart ${
            location.pathname === "/shoppingcart" ? "active" : ""
          }`}
        >
          <img />
        </Link>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  fixed: PropTypes.bool.isRequired,
};

export default Navbar;
