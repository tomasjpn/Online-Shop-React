import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
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
  // Animation Varianten
  const variants = {
    // Slide up mit Fade
    hidden: { opacity: 0, x: -500, filter: "blur(5px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  };

  const transition = { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 };

  // Vier verschiedene Animationseinstellungen
  const controlsPolitik = useAnimation();
  const controlsDeutsch = useAnimation();
  const controlsPolitikD = useAnimation();
  const controlsSocialMedia = useAnimation();

  useEffect(() => {
    let ticking = false;
    // Prüft, ob ein Element innerhalb des sichtbaren Bereichs des Fenster liegt
    const handleScroll = () => {
      if (!ticking) {
        // Methode, um eine Funktion für den nächsten Frame-Aktualisierung zu planen
        window.requestAnimationFrame(() => {
          // Jedes Motion-Section wird mit dem jeweiligen Aniamtionseinstellungen definiert
          const sections = [
            { className: styles.politikSection, control: controlsPolitik },
            { className: styles.deutschGrid, control: controlsDeutsch },
            { className: styles.politikDGrid, control: controlsPolitikD },
            { className: styles.socialMedia, control: controlsSocialMedia },
          ];

          sections.forEach(({ className, control }) => {
            const element = document.querySelector(`.${className}`);
            if (element) {
              const rect = element.getBoundingClientRect(); // Gibt die Position des Elemeents zum Sichtfenster zurück
              if (rect.bottom < 0 || rect.top > window.innerHeight) {
                // Stellt sicher, dass das Element im Fenster ist
                control.start("hidden"); // toggelt die Sichtbarkeit
              } else {
                control.start("visible");
              }
            }
          });

          ticking = false;
        });

        ticking = true; // Nachdem requestAnimationFrame aufgerufen wurde, wurd ticking auf true gesetzt. -> Zeigt an, dass die Frame-Aktualisierung geplant wurde.
        // Dadurch, dass der ticking auf true ist: wird requestAnimationFrame nicht erneut augerufen, bis der aktuelle Frame abgeschlossen ist. -> Dadurch wird verhindert, dass der Scroll-Handler mehrmals pro Frame aufgerufen wird.
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Stellt sicher, dass der Zustand beim ersten Laden korrekt gesetzt ist
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up -> Entfernt Eventlistener
    };
  }, [controlsPolitik, controlsDeutsch, controlsPolitikD, controlsSocialMedia]);

  return (
    <>
      <div className={styles.mainContainer}>
        <Navbar />
        <motion.section
          className={`${styles.politikSection} ${styles.hidden}`}
          initial="hidden"
          animate={controlsPolitik}
          variants={variants}
          transition={transition}
        >
          <motion.div className={styles.mainPreview}>
            <motion.div className={styles.PolitikGrid}>
              <motion.img
                src={image2P}
                className={styles.item1}
                alt="Politik Image 2"
              />
              <motion.img
                src={image3P}
                className={styles.item2}
                alt="Politik Image 3"
              />
              <motion.img
                src={image4P}
                className={styles.item3}
                alt="Politik Image 4"
              />
              <motion.img
                src={image1P}
                className={styles.item4}
                alt="Politik Image 1"
              />
            </motion.div>
            <p>
              P O L I T I K 2 0 2 2 - Schulpräsentation über den
              Bundespräsidenten
            </p>
          </motion.div>
        </motion.section>
        <motion.section
          className={styles.deutschGrid}
          initial="hidden"
          animate={controlsDeutsch}
          variants={variants}
          transition={transition}
        >
          <div className={styles.deutschGrid}>
            <img src={image1D} className={styles.item5} alt="Deutsch Image 1" />
            <p>
              D E U T S C H 2 0 2 1<br /> Flyer zum Traumberuf - 9. Klasse
            </p>
            <img src={image2D} className={styles.item6} alt="Deutsch Image 2" />
          </div>
        </motion.section>
        <motion.section
          className={styles.politikDGrid}
          initial="hidden"
          animate={controlsPolitikD}
          variants={variants}
          transition={transition}
        >
          <div className={styles.politikDGrid}>
            <img
              src={image1PD}
              className={styles.item7}
              alt="Politik D Image 1"
            />
            <p>
              <span> P O L I T I K 2 0 1 9</span> <br /> Flyer zum Thema Drogen
              und Sucht - 8. Klasse
            </p>
          </div>
        </motion.section>
        <motion.section
          className={styles.socialMedia}
          initial="hidden"
          animate={controlsSocialMedia}
          variants={variants}
          transition={transition}
        >
          <div className={styles.socialMedia}>
            <img
              src={image2B}
              className={styles.item8}
              alt="Social Media Image 2"
            />
            <p>
              <span>SOCIAL MEDIA DESIGN</span> <br /> Beispiele von Social Media
              Designs für Freunde 2019-2020
            </p>
            <img
              src={image1B}
              className={styles.item9}
              alt="Social Media Image 1"
            />
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default GFX;
