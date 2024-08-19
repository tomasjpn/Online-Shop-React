import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/store">Store</Link>
      <br></br>
      <Link to="/gallery">Gallery</Link>
    </div>
  );
};

export default Navbar;
