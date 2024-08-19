import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/store">Store</Link>
      <br></br>
      <Link to="/gallery">Gallery</Link>
      <br></br>
      <Link to="/searchpage">Search</Link>
      <br></br>
      <Link to="/shoppingcart">Sopping Cart</Link>
    </div>
  );
};

export default Navbar;
