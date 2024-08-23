import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ fixed }) => {
  return (
    <div className="mainContainerNavbar">
      <div className={`navbar ${fixed ? "fixedNavbar" : ""}`}>
        {/* Fügt div nur hinzu, wenn fixed true ist */}
        {fixed && <div className="background"></div>}
        <Link to="/">Home</Link>
        <br />
        <Link to="/store">Store</Link>
        <br />
        <Link to="/gallery">Gallery</Link>
        <br />
        <Link to="/searchpage" className="search-page">
          <img />
        </Link>
        <br />
        <Link to="/shoppingcart" className="shopping-cart">
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
