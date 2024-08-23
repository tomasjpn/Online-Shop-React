import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage1 from "../assets/GFX.png";
import backgroundImage2 from "../assets/VFX.png";
import Navbar from "../components/Navbar";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
  // useState um die Animation zu togglen
  const [animation, setAnimation] = useState("");

  const navigate = useNavigate(); // Hook um die Seiten zu navigieren

  // Animation für die Option Grafik Design
  const handleOptionBarLeft = () => {
    setAnimation("slideLeft");
    setTimeout(() => navigate("/gfx"), 800);
  };

  // Animation für die Option Motion Design
  const handleOptionBarRight = () => {
    setAnimation("slideRight");
    setTimeout(() => navigate("/vfx"), 800);
  };

  // Animation für die Option Store
  const handleStoreOption = () => {
    setAnimation("slideStore");
    setTimeout(() => navigate("/store"), 800);
  };

  // Funktion um das Bild je nachdem, ob das like oder rechte Feld ausgewählt wird, wird der Hintergrund verändert
  const handleMouseEnter = (event) => {
    // event -> um das derzeit ausgewählte Feld zu identifizieren
    const targetClassName = event.currentTarget.className;

    // Linkes Feld
    if (targetClassName.includes(styles.leftSide)) {
      document.documentElement.style.setProperty(
        "--background-image", // CSS Variable
        `url(${backgroundImage1})` // Bild URL
      );
      // Rechtes Feld
    } else if (targetClassName.includes(styles.rightSide)) {
      document.documentElement.style.setProperty(
        "--background-image", // CSS Variable
        `url(${backgroundImage2})` // Bild URL
      );
    }

    document.documentElement.style.setProperty("--background-blur", "10px"); // Der Background Blur wird gesetzt
    document.body.classList.add("background-visible"); // Toggle: Sichbarkeit des Backgrounds AN
  };

  const handleMouseLeave = () => {
    document.body.classList.remove("background-visible"); // Toggle: Sichtbarkeit des Backgrounds AUS
  };

  return (
    <div className={`${styles.galleryMainArea} ${styles[animation]}`}>
      <Navbar className={styles.Navbar} fixed={false} />
      <div className={styles.mainArea}>
        <div className={styles.optionGallery}>
          {/*Linkes Feld der Option Bar für GFX bzw. VFX*/}
          <div
            className={styles.leftSide}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleOptionBarLeft}
          >
            <h1>GRAFIK DESIGN</h1>
            <p>
              Projekte mit Photoshop CS6 (Avatar, Banner, Ads, Präsentationen)
            </p>
          </div>
          {/*Rectes Feld der Option Bar für GFX bzw. VFX*/}

          <div
            className={styles.rightSide}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleOptionBarRight}
          >
            <h1>MOTION DESIGN</h1>
            <p>
              Übungen mit After Effects CC (amv, motion design, Schulprojekte)
            </p>
          </div>
        </div>
      </div>
      <div className={styles.storeButton}>
        <h2>S T O R E</h2>
        <p>Commission Work</p>
        <p2>
          Tauchen Sie ein in die Welt der visuellen Kreativität und lassen Sie
          Ihre Marke durch beeindruckende Grafiken und dynamische Animationen
          erstrahlen. Ich biete Ihnen maßgeschneiderte Designlösungen, die Ihre
          Botschaft auf einzigartige Weise zum Leben erwecken.
        </p2>

        <button onClick={handleStoreOption}>View</button>
      </div>
    </div>
  );
};

export default Gallery;
