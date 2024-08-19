import { Link } from "react-router-dom";
import image from "./assets/25231.png";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import styles from "./styles/Home.module.css";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.mainArea}>
        <div className={styles.mainAreaTitle}>
          <h1>Tomas Pham</h1>
          <p>Graphic Design Portfolio</p>
          <Link to="/gallery">
            <button>Explore</button>
          </Link>
          <br></br>
          <a
            href="https://github.com/tomasjpn?tab=repositories"
            className={styles.linkToGitHub}
          >
            <img src={image}></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
