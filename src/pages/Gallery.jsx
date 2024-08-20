import { Link } from "react-router-dom";
import backgroundImage1 from "../assets/GFX.png";
import backgroundImage2 from "../assets/VFX.png";
import Navbar from "../components/Navbar";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
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
    <div className={styles.galleryMainArea}>
      <Navbar className={styles.Navbar} />
      <div className={styles.mainArea}>
        <div className={styles.optionGallery}>
          {/*Linkes Feld der Option Bar für GFX bzw. VFX*/}
          <div
            className={styles.leftSide}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/gfx">
              <h1>GRAFIK DESIGN</h1>
              <p>
                Projekte mit Photoshop CS6 (Avatar, Banner, Ads, Präsentationen)
              </p>
            </Link>
          </div>
          {/*Rectes Feld der Option Bar für GFX bzw. VFX*/}
          <Link to="/vfx">
            <div
              className={styles.rightSide}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h1>MOTION DESIGN</h1>
              <p>
                Übungen mit After Effects CC (amv, motion design, Schulprojekte)
              </p>
            </div>
          </Link>
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
        <Link to="/store">
          <button>View</button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
