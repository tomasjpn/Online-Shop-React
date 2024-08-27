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
            <ImageCarousel />
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
              </div>
              <div className={styles.buyOption}>
                <button>KAUFEN</button>
              </div>
            </div>
          </>
        ) : (
          <p>Produkt nicht gefunden</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
