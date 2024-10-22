// ProductPage.jsx
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../components/CartContext";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Watermark from "../components/Watermark/Watermark";
import data from "../data/products.json";
import styles from "../styles/ProductPage.module.css";

const ProductPage = () => {
  // UseState für das auswöhlen der Optionen
  const [selectedOption, setSelectedOption] = useState("");

  //UseState für die Warenkorb Bestätigung
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [showShoppingCartBtn, setShowShoppingCartBtn] = useState(false);

  // Objekt Destruktion -> addToCart Funktion aus useCart useCart() zu extrahieren
  const { addToCart } = useCart();

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

  // Funktion um das Produkt in den Einkaufswagen hinzuzufügen
  const handleAddToCart = () => {
    // Wenn das Produkt und die ausgewählte Option vorhanden ist
    if (product && selectedOption) {
      const productWithOption = {
        ...product,
        selectedOption: {
          // Name der ausgewählten Option
          name: selectedOption,
          // Kopiert die Eigentschaften des Objekts options
          ...product.options[selectedOption],
        },
      };

      // Das Objekt wird anschließend addToCart() aus der useCart Hook übergeben
      addToCart(productWithOption);

      showConfirmationInfo(); // Bestätigungsfenster anzeigen
      setShowShoppingCartBtn(true);
    }
  };

  // Bestätigung für das Hinzufügen zum Einkaufswagen
  const showConfirmationInfo = () => {
    setShowConfirmation(true); // Anzeigen der Bestätigung

    const id = setTimeout(() => {
      // nach 5 Sekunden wird die Anzeige ausgeblendet
      setShowConfirmation(false);
    }, 5000);

    setTimeoutId(id);
  };

  // Bestätitung skippen
  const cancelConfirmation = () => {
    clearTimeout(timeoutId); // Timer gelöscht
    setShowConfirmation(false); // Bestätigung ausgeblendet
  };

  return (
    <div className={styles.body}>
      <Navbar fixed={true} />
      <ScrollToTop />
      {/* Bestätigungsfenster */}
      {showConfirmation && (
        <div className={styles.confirmationInfo} onClick={cancelConfirmation}>
          <p>In Warenkorb hinzugefügt!</p>
          <button onClick={cancelConfirmation}>X</button>
        </div>
      )}
      <div className={styles.mainContainer}>
        {product ? (
          <>
            <div className={styles.ImageCarousel}>
              <ImageCarousel productId={product.id} />
            </div>

            <div className={styles.textDiv}>
              <h1>{product.name.toUpperCase()}</h1>
              <div className={styles.infoText}>
                <p>{product.description}</p>
              </div>
              <div className={styles.optionSelect}>
                {/* Object.keys() -> Gibt ein Array der Schlüssel eines Objekts wieder: basic, plus, premium*/}

                {Object.keys(product.options).map((optionKey) => (
                  // Für jeden Key wird ein Button erstellt
                  <button
                    key={optionKey}
                    className={
                      selectedOption === optionKey ? styles.selected : ""
                    }
                    onClick={() => handleOptionClick(optionKey)}
                  >
                    {optionKey.toUpperCase()}
                  </button>
                ))}

                <div className={styles.accordionContainer}>
                  {selectedOption && (
                    <div className={styles.acordion}>
                      <div className={styles.accordionInfo}>
                        {/* in der Product Liste -> unter den Options -> Index bei dem ausgewählten Option, die Beschriebung davon wählen*/}
                        <p>{product.options[selectedOption].description}</p>
                      </div>
                      <div className={styles.priceTag}>
                        <p>Preis: {product.options[selectedOption].price}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.buyOption}>
                <button onClick={() => handleAddToCart()}>KAUFEN</button>
              </div>
              {showShoppingCartBtn && (
                <div className={styles.shoppingCart}>
                  <Link to="/shoppingcart" className="shopping-cart">
                    <button>ZUM WARENKORB</button>
                  </Link>
                </div>
              )}
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
      <div className={styles.watermark}>
        <Watermark />
      </div>
    </div>
  );
};

export default ProductPage;
