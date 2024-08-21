import image1P from "../assets/Sowie Präsetation/1-1.png";
import image2P from "../assets/Sowie Präsetation/2-1.png";
import image3P from "../assets/Sowie Präsetation/3-1.png";
import image4P from "../assets/Sowie Präsetation/4-1.png";
import Navbar from "../components/Navbar";
import styles from "../styles/GFX.module.css";

const GFX = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Navbar />
        <section>
          <div className={styles.mainPreview}>
            <div className={styles.PolitikGrid}>
              <img src={image2P} className={styles.item1}></img>
              <img src={image3P} className={styles.item2}></img>
              <img src={image4P} className={styles.item3}></img>
              <img src={image1P} className={styles.item4}></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GFX;
