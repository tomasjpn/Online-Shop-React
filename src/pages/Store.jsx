import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundManager from "../components/BackgroundManager";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import data from "../data/products.json";
import styles from "../styles/Store.module.css";

const Store = () => {
  const navigate = useNavigate();
  const handleClickProduct = (productId) => {
    // Sicherstellen, dass productId nicht null oder undefined ist
    if (productId != null) {
      navigate(`/product/${productId}`);
    } else {
      console.error("Product ID is undefined");
    }
  };
  // Animation Variante für Container
  const variantDefault = () => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 5,
        delay: 4,
        ease: "easeOut",
      },
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

  const opacity = () => ({
    hidden: { opacity: 0, filter: "blur(2px)" },
    visible: {
      opacity: 1,

      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
  });

  const variant1 = verticalAnim2(300, 0.7);
  const variant2 = verticalAnim2(300, 0.9);
  const variants = [
    verticalAnim2(300, 0.7),
    verticalAnim2(300, 0.9),
    verticalAnim2(300, 1),
    verticalAnim2(300, 1.2),
    verticalAnim2(300, 1.3),
    verticalAnim2(300, 1.5),
  ];

  // Verschiedene Animationseinstellungen
  const controlsIntroduction = useAnimation();
  const controlsIntroductionSecond = useAnimation();
  const controlsMainShop = useAnimation();

  // useEffect -> um afu das Scrollen der Seite zu reagieren
  useEffect(() => {
    let ticking = false; // Stellt sicher, dass die Scroll Position nur dann verarbeitet wird, wenn keine anderen Aktualisierungen anstehen

    const handleScroll = () => {
      // Stellt sicher, dass die Scroll Position nur dann verarbeitet wird, wenn keine anderen Aktualisierungen anstehen
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Jedes Motion-Section wird mit dem jeweiligen Aniamtionseinstellungen definiert
          const sections = [
            {
              className: styles.introductionContainerMain,
              control: controlsIntroduction,
            },
            {
              className: styles.textSecondMain,
              control: controlsIntroductionSecond,
            },
            { className: styles.mainProducts, control: controlsMainShop },
          ];

          sections.forEach(({ className, control }) => {
            const element = document.querySelector(`.${className}`);
            if (element) {
              const rect = element.getBoundingClientRect(); // Gibt die Position des Elemeents zum Sichtfenster zurück
              const triggerOffset = 0;
              // Stellt sicher, dass das Element im Fenster ist
              if (
                rect.bottom < 0 + triggerOffset ||
                rect.top > window.innerHeight - triggerOffset
              ) {
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
  }, [controlsIntroduction, controlsIntroductionSecond, controlsMainShop]);

  return (
    <div className={styles.body}>
      <BackgroundManager />
      <ScrollToTop />
      <Navbar fixed={true} />

      {/* Introduction 1*/}
      <motion.section
        className={styles.introductionContainerMain}
        animate={controlsIntroduction}
        initial="hidden"
      >
        <div className={styles.introductionContainer}>
          <motion.div className={styles.textDiv} variants={variantDefault}>
            <motion.h1 variants={variant1}>
              ST<label>O</label>RE
            </motion.h1>
            <motion.p variants={variant2}>
              Willkommen in meinem kreativen Design-Shop! Ich biete Ihnen eine
              breite Palette an hochwertigen Design-Dienstleistungen, die darauf
              abzielen, Ihre Marke und Ihre Projekte auf das nächste Level zu
              bringen. Egal ob Sie beeindruckende Flyer für Ihre nächste
              Veranstaltung benötigen, in den sozialen Medien mit auffälligen
              Designs glänzen möchten oder Ihre Videos mit atemberaubenden
              visuellen Effekten aufwerten wollen – bei mir sind Sie an der
              richtigen Adresse.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction 2*/}
      <motion.section
        className={styles.textSecondMain}
        animate={controlsIntroductionSecond}
        initial="hidden"
      >
        <div className={styles.introductionContainerSecond}>
          <motion.div className={styles.textDiv} variants={variantDefault}>
            <motion.h1 variants={variant1}>
              IHRE <label>IDEEN</label>, MEINE <label>KREATIVITÄT</label>
            </motion.h1>
            <motion.p variants={variant2}>
              Was auch immer Ihr Projekt ist – ich bin hier, um Ihre Visionen in
              die Realität umzusetzen. Tauchen Sie ein in meine kreativen
              Möglichkeiten und lassen Sie uns gemeinsam Ihre Ideen
              verwirklichen!
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Shop Products*/}
      <motion.section
        className={styles.mainProducts}
        animate={controlsMainShop}
        initial="hidden"
        variants={opacity}
      >
        <motion.h1 variants={opacity} initial="hidden" animate="visible">
          Entfalten Sie Ihre Ideen mit unseren <label>6</label>{" "}
          Design-Dienstleistungen
        </motion.h1>

        <div className={styles.mainShop}>
          {data.map((product) => {
            // Überprüft, ob das Medienfeld existiert und ein Array ist
            const media = Array.isArray(product.media) ? product.media : [];
            // Bildpfad überprüfen
            const imagePath =
              media.length > 0 && media[0].path ? media[0].path : "";

            return (
              <div
                key={product.id}
                className={styles.gridProducts}
                onClick={() => handleClickProduct(product.id)}
                style={{ cursor: "pointer" }}
              >
                <motion.img
                  src={imagePath}
                  alt={product.name}
                  variants={variants[product.id % variants.length]} // Sicherstellen, dass der Index im Bereich der Variants liegt
                ></motion.img>

                <motion.p variants={variants[product.id % variants.length]}>
                  {product.price}
                </motion.p>
              </div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Store;
