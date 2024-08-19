import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-area">
        <div className="main-area-title">
          <h1>Tomas Pham</h1>
          <p>Graphic Design Portfolio</p>
          <Link to="/gallery">
            <button>Explore</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
