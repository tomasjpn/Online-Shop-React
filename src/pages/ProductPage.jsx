// ProductPage.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import Navbar from "../components/Navbar";
import data from "../data/products.json";
import styles from "../styles/ProductPage.module.css";

const ProductPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const { productId } = useParams(); // useParams ermöglicht den Zugriff auf die Parameter eines dynamischen Objekts
  // Findet das jeweilige Produkt aus der Datanbank mit der entsprechenden ID
  const findProductBId = (id) => {
    return data.find((item) => item.id === parseInt(id, 10));
  };

  const product = findProductBId(productId);
  // Ermöglicht das auswählen der Optionen -> Wenn eine bereitsausgewählte Option betätigt wird, wird die Option "entselected", ansonsten als ausgewählt markiert
  const handleOptionClick = (option) => {
    // Callback Funktion um den vorherigen Zustand zu bekommen
    setSelectedOption((prev) => (prev === option ? "" : option));
  };

  return (
    <div className={styles.body}>
      <Navbar fixed={true} />
      <div className={styles.mainContainer}>
        {product ? (
          <>
            <div className={styles.ImageCarousel}>
              <ImageCarousel />
            </div>

            <div className={styles.textDiv}>
              <h1>{product.name.toUpperCase()}</h1>
              <p>{product.description}</p>
              <div className={styles.optionSelect}>
                <button
                  className={selectedOption === "basic" ? styles.selected : ""}
                  onClick={() => handleOptionClick("basic")}
                >
                  BASIC
                </button>
                <button
                  className={selectedOption === "plus" ? styles.selected : ""}
                  onClick={() => handleOptionClick("plus")}
                >
                  PLUS
                </button>
                <button
                  className={
                    selectedOption === "premium" ? styles.selected : ""
                  }
                  onClick={() => handleOptionClick("premium")}
                >
                  PREMIUM
                </button>
                <div className={styles.accordionContainer}>
                  {selectedOption === "basic" && (
                    <div className={styles.acordion}>
                      <div className={styles.accordionInfo}>
                        <p>
                          In der Basic Option erstelle ich für Sie einen
                          professionellen Flyer mit Vorder- und Rückseite,
                          individuell nach Ihren Vorgaben gestaltet. Sie
                          bestimmen das Design und die Inhalte. Nach dem ersten
                          Entwurf biete ich Ihnen eine Korrekturrunde an, um
                          sicherzustellen, dass das Ergebnis Ihren Erwartungen
                          entspricht. Diese Option eignet sich ideal für
                          Projekte mit klaren Anforderungen und begrenztem
                          Budget.
                        </p>
                      </div>
                      <div className={styles.priceTag}>
                        <p>Preis: 19,99€</p>
                      </div>
                    </div>
                  )}
                  {selectedOption === "plus" && (
                    <div className={styles.acordion}>
                      <div className={styles.accordionInfo}>
                        <p>
                          Mit der Plus Option erhalten Sie eine erweiterte
                          Gestaltung Ihres Flyers, einschließlich zwei
                          Korrekturrunden zur Feinabstimmung. Zusätzlich biete
                          ich Ihnen eine größere Auswahl an Designelementen, wie
                          besondere Schriftarten und Icons, um Ihrem Flyer eine
                          persönliche Note zu verleihen. Diese Option ist ideal,
                          wenn Sie mehr Anpassungsmöglichkeiten benötigen und
                          einen ansprechenderen Look wünschen.
                        </p>
                      </div>
                      <div className={styles.priceTag}>
                        <p>Preis: 24,99€</p>
                      </div>
                    </div>
                  )}
                  {selectedOption === "premium" && (
                    <div className={styles.acordion}>
                      <div className={styles.accordionInfo}>
                        <p>
                          In der Premium Option biete ich Ihnen das Maximum an
                          Individualität und Perfektion. Neben drei
                          Korrekturrunden und einer umfassenden Designberatung
                          übernehme ich auch die Optimierung Ihrer Inhalte. Auf
                          Wunsch erstelle ich maßgeschneiderte Grafiken und
                          optimiere Ihren Flyer für verschiedene Druck- und
                          digitale Formate. Diese Option ist die beste Wahl für
                          anspruchsvolle Projekte, die professionelle Ergebnisse
                          erfordern.
                        </p>
                      </div>
                      <div className={styles.priceTag}>
                        <p>Preis: 29,99€</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.buyOption}>
                <button>KAUFEN</button>
              </div>
            </div>
          </>
        ) : (
          <p>Produkt nicht gefunden</p>
        )}
        <div className={styles.contactInfo}>
          <h1>NICHTS GEFUNDEN?</h1>
          <p>
            Wenn keine der sechs Design-Dienstleistungen Ihren Anforderungen
            entspricht, kontaktieren Sie mich gerne unter
            <label style={{ color: "#535bf2" }}> contact@tomaspham.de</label> .
            Gemeinsam finden wir eine maßgeschneiderte Lösung, die perfekt auf
            Ihre individuellen Bedürfnisse zugeschnitten ist. Ich freue mich
            darauf, mit Ihnen zusammenzuarbeiten!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
