import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { gif1, gif2, gif3 } from "../assets/videoImports.js";
import BackgroundManager from "../components/BackgroundManager.js";
import Navbar from "../components/Navbar.jsx";
import "../styles/index.css";
import styles from "../styles/VFX.module.css";

const VFX = () => {
  // Animation Variante für Container
  const horizontalAnim = (xvalue, duration, blur = "2px") => ({
    hidden: { opacity: 0, x: xvalue, filter: `blur(${blur})` },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration, ease: "easeOut" },
    },
  });

  const verticalAnim = (yvalue, duration, blur = "4px") => ({
    hidden: { opacity: 0, x: 200, y: yvalue, filter: `blur(${blur})` },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, ease: "easeOut" },
    },
  });

  const verticalAnim2 = (yvalue, duration, blur = "2px") => ({
    hidden: { opacity: 0, y: yvalue, filter: `blur(${blur})` },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, ease: "easeOut" },
    },
  });

  // Praktikum Animation
  const variant1 = horizontalAnim(500, 0.7);
  const variant2 = horizontalAnim(500, 1);
  const variant3 = verticalAnim(400, 0.7);
  const variant4 = verticalAnim2(200, 0.7);

  const vartiant5 = horizontalAnim(200, 0.7);
  const vartiant6 = horizontalAnim(300, 0.9);

  const vartiant7 = horizontalAnim(-200, 0.7);
  const vartiant8 = horizontalAnim(-300, 0.9);

  const vartiant9 = verticalAnim2(200, 0.7);
  const vartiant10 = verticalAnim2(300, 0.9);

  // Verschiedene Animationseinstellungen
  const controlsPraktikum = useAnimation();
  const controlsEnglish = useAnimation();
  const controlsMusik = useAnimation();
  const controlsShapes = useAnimation();

  // useEffect -> um afu das Scrollen der Seite zu reagieren
  useEffect(() => {
    let ticking = false; // Stellt sicher, dass die Scroll Position nur dann verarbeitet wird, wenn keine anderen Aktualisierungen anstehen

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Jedes Motion-Section wird mit dem jeweiligen Aniamtionseinstellungen definiert
          const sections = [
            {
              className: styles.gifContainer,
              control: controlsPraktikum,
            },
            {
              className: styles.mainContainerEnglish,
              control: controlsEnglish,
            },
            {
              className: styles.mainContainerMusik,
              control: controlsMusik,
            },
            {
              className: styles.mainContainerShapes,
              control: controlsShapes,
            },
          ];

          sections.forEach(({ className, control }) => {
            const element = document.querySelector(`.${className}`);
            if (element) {
              const rect = element.getBoundingClientRect(); // Gibt die Position des Elemeents zum Sichtfenster zurück
              // Stellt sicher, dass das Element im Fenster ist
              if (rect.bottom < 0 || rect.top > window.innerHeight) {
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
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlsPraktikum, controlsEnglish, controlsMusik, controlsShapes]);

  return (
    <div>
      <BackgroundManager />
      <Navbar fixed={true} />
      <div className={styles.mainContainer}></div>

      {/*Section: Praktikum Projekt */}
      <motion.section
        className={styles.gifContainer}
        initial="hidden"
        animate={controlsPraktikum}
      >
        <div className={styles.backgroundDiv1}></div>
        <div className={styles.gifGrid}>
          <motion.img
            src={gif1}
            alt="verticalBanner"
            className={styles.item1}
            variants={variant3}
          />
          <motion.img
            src={gif2}
            alt="square"
            className={styles.item2}
            variants={variant1}
          />
          <motion.img
            src={gif3}
            alt="square"
            className={styles.item3}
            variants={variant2}
          />
        </div>
        <motion.div className={styles.textDiv} variants={variant4}>
          <h1>POLIS ANIMATION</h1>
          <p>
            Praktikum bei Müller + Busmann GmbH Verlag - Animationen für Polis -
            2022 <br></br>Für den Arbeitsauftrag erhielt ich statische
            Bildelemente, die ich nach den Wünschen des Arbeitsgebers in ein
            interaktives Design bzw. einer Animation zusammenstellen sollte. Das
            Konzept der Animationen durfte ich mit viel Freiraum entwerfen,
            lediglich die Schriftfont sowie Farbpalette waren vorgegeben.
          </p>
        </motion.div>
      </motion.section>

      {/*Section: Englisch Projekt */}
      <motion.section
        className={styles.mainContainerEnglish}
        initial="hidden"
        animate={controlsEnglish}
      >
        <motion.div className={styles.englishVideo} variants={vartiant5}>
          <iframe
            src="https://drive.google.com/file/d/1_uiGMI8o_snSmzqlSIRQlb9uggj-Q5zk/preview"
            width="800 "
            height="450 "
            allow="accelerometer; autoplay; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
            title="Google Drive Video"
          ></iframe>
        </motion.div>
        <motion.div
          className={styles.textContainerEnglish}
          variants={vartiant6}
        >
          <h1>ENGLISCH PROJEKT</h1>
          <p>Raleigh Internationl Ad - Simple Promotion - Englisch Kurs 2022</p>
          <p>
            In der Erprobungsstufe (EF) 10. Klasse Gymnasium Englisch Kurs
            sollten wir in der Gruppenarbeit ein Werbevideo für eine beliebige
            Hilfsorganisation erstellen und So haben wir uns für die
            Organisation Raleigh entschieden. Hierbei entschied ich mich für
            eine 2D Animation, denn dieses Format eignet sich für die
            verständliche Wiedergabe sowie Repräsentation der Werte der
            Organisation Raleigh. Da wir keinen Synchronsprecher bzw. Erzähler
            zur Verfügung hatten, habe ich das Werbevideo ausschließlich auf die
            visuelle Erzählung durch Text und Bildern beschränkt. In Kombination
            mit der Hintergrundmusik wird das Interesse sowie Aufmerksamkeit
            gestärkt und das gesamte Projekt wirkt wie ein kleiner Film.
          </p>
        </motion.div>
      </motion.section>

      {/*Section: Musik Projekt*/}
      <motion.section
        className={styles.mainContainerMusik}
        initial="hidden"
        animate={controlsMusik}
      >
        <motion.div className={styles.textContainerMusik} variants={vartiant8}>
          <h1>MUSIK PROJEKT</h1>
          <p>Mozart Podcast -Musik Kurs - 2021</p>
          <p>
            In der 9.Klasse Gymnasium Musik Kurs sollten wir ein Podcast drehen
            bezüglich des Künstlers Wolfgang Amadeus Mozart und zu beachten war
            die Inhaltliche Darstellung, bei der seine Biografie im Mittelpunkt
            stand. Hierbei haben wir uns dazu entschieden, dass ich den Podcast
            in Form eines Erklärungsvideo durch Animationen visualisiere. Daher
            entschied ich mich für die 2D Animation, denn diese ermöglicht eine
            verständliche Darstellung des Inhalts und durch die Bewegende
            Inhalte wird die Aufmerksamkeit des Publikums aufrecht erhalten. Der
            Text wurde von meinem Mitschüler Julian P. eingesprochen.
          </p>
        </motion.div>
        <motion.div className={styles.musikVideo} variants={vartiant7}>
          <iframe
            src="https://drive.google.com/file/d/1CjL6N9Ci3bTjRI6Wn-HAiqkBahEFrocf/preview"
            width="800 "
            height="450 "
            allow="accelerometer; autoplay; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
            title="Google Drive Video"
          ></iframe>
        </motion.div>
      </motion.section>

      {/*Section: Random Shapes Projekt*/}
      <motion.section
        className={styles.mainContainerShapes}
        initial="hidden"
        animate={controlsShapes}
      >
        <motion.div className={styles.shapesVideo} variants={vartiant9}>
          <iframe
            src="https://drive.google.com/file/d/1RIof005uCU_W3rr4gkO8pfm8aTUrOQ2W/preview"
            width="800 "
            height="450 "
            allow="accelerometer; autoplay; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
            title="Google Drive Video"
          ></iframe>
        </motion.div>

        <motion.div
          className={styles.textContainerShapes}
          variants={vartiant10}
        >
          <h1>RANDOM SHAPES</h1>
          <p>
            Hierbei handelt es sich nur um eine Übung mit der Animation von
            verschiedenen geometrischen Objekten in After Effects. Das Konzept
            basiert darauf, dass alle Elemente in einem dynamsichen Zusammenhang
            stehen, sowie zwischeneinander Interagieren und der Flow des
            Projekts stets aufrecht erhalten bleibt. Daher bleiben alle Elemente
            in Bewegung mit flüssigen Übergangen.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default VFX;
