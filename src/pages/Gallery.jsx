import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../styles/Gallery.module.css";
const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainArea}>
        <div className={styles.optionGallery}>
          <div className={styles.leftSide}>
            <h1>G R A F I K D E S I G N</h1>
            <p>
              Projekte mit Photoshop CS6 (Avatar,Banner, Ads,Präsentationen)
            </p>
          </div>
          <div className={styles.rightSide}>
            <h1>M O T I O N D E S I G N</h1>
            <p>
              Übungen mit After Effects CC (amv,motion design, Schulprojekte)
            </p>
          </div>
        </div>
      </div>
      <div className={styles.storeButton}>
        <Link to="/store">
          <button> Store </button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
