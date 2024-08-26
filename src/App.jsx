import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "./assets/25231.png";
import BackgroundManager from "./components/BackgroundManager";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import styles from "./styles/Home.module.css";

function App() {
  // useState um die Animation zu togglen
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate(); // Hook um die Seiten zu navigieren

  const handleExploreClick = () => {
    setIsAnimating(true); // Animation = true -> Slide Up
    setTimeout(() => {
      navigate("/gallery"); // Wechselt die Seite nach der Verzögerung
    }, 1000);
  };

  return (
    <div className={isAnimating ? styles.slideUpEnd : ""}>
      <BackgroundManager />
      <Navbar fixed={false} />
      <div className={styles.mainArea}>
        <div className={styles.mainAreaTitle}>
          <h1>Tomas Pham</h1>
          <p>Graphic Design Portfolio</p>
          <button onClick={handleExploreClick}>Explore</button>
          <br></br>
          <a
            href="https://github.com/tomasjpn?tab=repositories"
            className={styles.linkToGitHub}
          >
            <img src={image} alt="GitHub Link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
