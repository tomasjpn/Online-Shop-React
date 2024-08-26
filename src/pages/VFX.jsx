import { gif1, gif2, gif3 } from "../assets/videoImports.js";
import BackgroundManager from "../components/BackgroundManager.js";
import Navbar from "../components/Navbar.jsx";
import styles from "../styles/VFX.module.css";
import "../styles/index.css";

const VFX = () => {
  return (
    <div>
      <BackgroundManager />
      <Navbar fixed={true} />
      <div className={styles.mainContainer}></div>
      <section className={styles.gifContainer}>
        <div className={styles.backgroundDiv1}></div>
        <div className={styles.gifGrid}>
          <img src={gif1} alt="verticalBanner" className={styles.item1} />
          <img src={gif2} alt="square" className={styles.item2} />
          <img src={gif3} alt="square" className={styles.item3} />
        </div>
        <div className={styles.textDiv}>
          <h1>POLIS ANIMATION</h1>
          <p>
            Praktikum bei Müller + Busmann GmbH Verlag - Animationen für Polis -
            2022 <br></br>Für den Arbeitsauftrag erhielt ich statische
            Bildelemente, die ich nach den Wünschen des Arbeitsgebers in ein
            interaktives Design bzw. einer Animation zusammenstellen sollte. Das
            Konzept der Animationen durfte ich mit viel Freiraum entwerfen,
            lediglich die Schriftfont sowie Farbpalette waren vorgegeben.
          </p>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default VFX;
