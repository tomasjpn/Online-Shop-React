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
  // Animation Variante für Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  // Hintergrund Animation
  const backgroundVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation Varianten
  const createChildVariants = (duration, blur = "5px") => ({
    hidden: { opacity: 0, x: -300, filter: `blur(${blur})` },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration, ease: "easeOut" },
    },
  });

  const createChildVariants2 = (duration, xvalue, blur = "2px") => ({
    hidden: { opacity: 0, x: xvalue, filter: `blur(${blur})` },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration, ease: "easeOut" },
    },
  });

  const createChildVariants3 = (yvalue, duration) => ({
    hidden: { opacity: 0, y: yvalue },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration, ease: "easeOut" },
    },
  });

  // Child Variants mit unterschiedlichen Übergangszeiten und Filtern
  const childVariants1 = createChildVariants(0.7);
  const childVariants2 = createChildVariants(0.9);
  const childVariants3 = createChildVariants(1.2);
  const childVariants4 = createChildVariants(0.6, "10px");

  const childVariants5 = createChildVariants2(0.7, -300);
  const childVariants6 = createChildVariants2(0.7, 300);
  const childVariants7 = createChildVariants3(200, 0.7);

  const childVariants8 = createChildVariants3(-200, 0.6);
  const childVariants9 = createChildVariants2(0.7, 300);

  const childVariants10 = createChildVariants3(200, 0.6);
  const childVariants11 = createChildVariants3(200, 0.8);
  const childVariants12 = createChildVariants3(200, 1.0);

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

        {/* Section für Politik Bundespräsident Präsentation*/}
        <motion.section
          className={`${styles.politikSection} ${styles.hidden}`}
          initial="hidden"
          animate={controlsPolitik}
          variants={containerVariants}
        >
          <motion.div
            className={styles.background}
            variants={backgroundVariants}
          />
          <motion.div className={styles.mainPreview} variants={childVariants1}>
            <motion.div className={styles.PolitikGrid}>
              <motion.img
                src={image2P}
                className={styles.item1}
                alt="Politik Image 2"
                variants={childVariants1}
              />
              <motion.img
                src={image3P}
                className={styles.item2}
                alt="Politik Image 3"
                variants={childVariants2}
              />
              <motion.img
                src={image4P}
                className={styles.item3}
                alt="Politik Image 4"
                variants={childVariants3}
              />
              <motion.img
                src={image1P}
                className={styles.item4}
                alt="Politik Image 1"
                variants={childVariants4}
              />
            </motion.div>
            <p>
              P O L I T I K 2 0 2 2 - Schulpräsentation über den
              Bundespräsidenten
            </p>
          </motion.div>
        </motion.section>

        {/* Section für Deutsch Flyer Auto Präsentation*/}
        <motion.section
          className={styles.deutschGrid}
          initial="hidden"
          animate={controlsDeutsch}
          variants={containerVariants}
        >
          <div className={styles.deutschGrid}>
            <motion.img
              src={image1D}
              className={styles.item5}
              alt="Deutsch Image 1"
              variants={childVariants5}
            />
            <motion.p variants={childVariants7}>
              D E U T S C H 2 0 2 1<br /> Flyer zum Traumberuf - 9. Klasse
            </motion.p>
            <motion.img
              src={image2D}
              className={styles.item6}
              alt="Deutsch Image 2"
              variants={childVariants6}
            />
          </div>
        </motion.section>

        {/* Section für Politik Flyer Drogen Aufklärung Präsentation*/}
        <motion.section
          className={styles.politikDGrid}
          initial="hidden"
          animate={controlsPolitikD}
          variants={containerVariants}
        >
          <motion.div
            className={styles.background2}
            variants={backgroundVariants}
          />
          <motion.div className={styles.politikDMain}>
            <motion.div className={styles.politikDGrid}>
              <motion.img
                src={image1PD}
                className={styles.item7}
                alt="Politik D Image 1"
                variants={childVariants8}
              />
              <motion.p variants={childVariants9}>
                <span> P O L I T I K 2 0 1 9</span> <br /> Flyer zum Thema
                Drogen und Sucht - 8. Klasse
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Section für Social Media Banner Präsentation*/}
        <motion.section
          className={styles.socialMedia}
          initial="hidden"
          animate={controlsSocialMedia}
          variants={containerVariants}
        >
          <div className={styles.socialMedia}>
            <motion.img
              src={image2B}
              className={styles.item8}
              alt="Social Media Image 2"
              variants={childVariants10}
            />
            <motion.p variants={childVariants11}>
              <span>SOCIAL MEDIA DESIGN</span> <br /> Beispiele von Social Media
              Designs für Freunde 2019-2020
            </motion.p>
            <motion.img
              src={image1B}
              className={styles.item9}
              alt="Social Media Image 1"
              variants={childVariants12}
            />
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default GFX;
