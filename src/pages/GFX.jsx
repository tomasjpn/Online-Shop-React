import {
  image1B,
  image1D,
  image1P,
  image1PD,
  image2B,
  image2D,
  image2P,
  image3P,
  image4P,
} from "../assets/imageImports.js";
import Navbar from "../components/Navbar";
import styles from "../styles/GFX.module.css";

const GFX = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Navbar />
        <section className={styles.politikSection}>
          <div className={styles.mainPreview}>
            <div className={styles.PolitikGrid}>
              <img src={image2P} className={styles.item1}></img>
              <img src={image3P} className={styles.item2}></img>
              <img src={image4P} className={styles.item3}></img>
              <img src={image1P} className={styles.item4}></img>
            </div>
            <p>
              P O L I T I K 2 0 2 2 - Schulpräsentation über den
              Bundespräsidenten
            </p>
          </div>
        </section>
        <section>
          <div className={styles.deutschGrid}>
            <img src={image1D} className={styles.item5}></img>
            <p>
              D E U T S C H 2 0 2 1<br></br> Flyer zum Traumberuf - 9. Klasse
            </p>
            <img src={image2D} className={styles.item6}></img>
          </div>
        </section>
        <section>
          <div className={styles.politikDGrid}>
            <img src={image1PD} className={styles.item7}></img>
            <p>
              <span> P O L I T I K 2 0 1 9</span> <br></br> Flyer zum Thema
              ''Drogen und Sucht'' - 8. Klasse
            </p>
          </div>
        </section>
        <section>
          <div className={styles.socialMedia}>
            <img src={image2B} className={styles.item8}></img>
            <p>
              <span>SOCIAL MEDIA DESIGN</span>
              <br></br> Beispiele von Social Media Designs für Freunde 2019-2020
            </p>
            <img src={image1B} className={styles.item9}></img>
          </div>
        </section>
      </div>
    </>
  );
};

export default GFX;
