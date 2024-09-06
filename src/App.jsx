import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/assets/Logo.png";
import image from "./assets/25231.png";
import BackgroundManager from "./components/BackgroundManager";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Watermark from "./components/Watermark/Watermark";
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
      <ScrollToTop />
      <div className={styles.mainArea}>
        <div className={styles.leftSide}>
          <div className={styles.mainAreaTitle}>
            <div className={styles.titleContainer}>
              <h1>Tomas Pham</h1>
            </div>

            <p>Graphic Design Shop</p>
            <div className={styles.infoText}>
              <p>
                Hier finden Sie nicht nur eine Auswahl meiner kreativen
                Arbeiten, sondern auch die Möglichkeit, maßgeschneiderte
                Grafikdesign-Dienstleistungen direkt zu beauftragen. Ob Sie ein
                neues Branding für Ihr Unternehmen, ein modernes Logo oder
                ansprechende visuelle Inhalte benötigen – ich biete Ihnen
                individuelle Lösungen, die perfekt auf Ihre Bedürfnisse
                abgestimmt sind.
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={handleExploreClick}>Explore</button>
            </div>
          </div>

          <br></br>
          <a
            href="https://github.com/tomasjpn?tab=repositories"
            className={styles.linkToGitHub}
          >
            <img src={image} alt="GitHub Link" />
          </a>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.gradientWrapper}>
            <img src={logo} alt="Logo" className="coloredLogo" />
          </div>
        </div>
        <div className={styles.markText}>
          <p>
            2<br />
            <br />
            0<br />
            <br />2<br />
            <br />4
          </p>
        </div>
      </div>
      <Watermark />
    </div>
  );
}

export default App;
