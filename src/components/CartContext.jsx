import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const CartContext = createContext(); // Context Objekt um Daten zwischen Komponenten zu teilen

// Funktion um den Zustand des Einkaufswagen zu verwalten und stellt ih  über createContext zur Verfügung + beinhaltet die Funktion zum Hinzufügen von Produkten.
export const CartProvider = ({ children }) => {
  // UseState für den Inhalt des Einkaufswagen
  const [cartItems, setCartItems] = useState([]);

  // Funktion um die Produkte zum Einkaufswagen hinzuzufügen
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Findet das gesuchte Produkt mit der übereinstimmenden ID
      const existingProductIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedOption.name === product.selectedOption.name
      );

      // Wenn dieses Produkt bereits im Warenkorb vorhanden ist:
      if (existingProductIndex !== -1) {
        const updatedItems = [...prevItems]; // Erstellt eine Kopie des vorherigen Arrays
        const existingProduct = updatedItems[existingProductIndex]; // Das Index i = existingProductIndex -> in den neu kopierten Array, soll genau das Produkt ausgewählt werden, um dem es sich gerade handelt

        // greift auf das Produkt, dessen Menge erhöht werden muss
        updatedItems[existingProductIndex] = {
          // Ein Objekt mit dem gesamten Produkt
          ...existingProduct,
          selectedOption: {
            // Kopiert alle Eigenschaften des selectedOption Objekt
            ...existingProduct.selectedOption,
            // Aktuelle Menge wird um 1 erhöht
            quantity: existingProduct.selectedOption.quantity + 1,
          },
        };
        return updatedItems;
      } else {
        // Alle alten Produkte + das neue Produkt
        return [
          ...prevItems,
          {
            ...product,
            selectedOption: { ...product.selectedOption, quantity: 1 },
          },
        ];
      }
    });
  };

  // Funktion um die Menge des Produktes zu erhöhen
  const increaseQuantity = (product) => {
    setCartItems((prevItem) => {
      // Überprüft, ob das aktuelle item das kleiche Produkt ist, dessen Menge geändert werden sollte
      return prevItem.map((item) =>
        item.id === product.id &&
        item.selectedOption.name === product.selectedOption.name
          ? {
              // Objekt mit der um 1 erhöhten Menge
              ...item,
              selectedOption: {
                ...item.selectedOption,
                quantity: item.selectedOption.quantity + 1,
              },
            }
          : item
      );
    });
  };

  // Funktion um die Menge des Produktes zu verringern
  const decreaseQuantity = (product) => {
    setCartItems((prevItem) => {
      // Überprüft, ob das aktuelle item das kleiche Produkt ist, dessen Menge geändert werden sollte
      return prevItem
        .map((item) =>
          item.id === product.id &&
          item.selectedOption.name === product.selectedOption.name
            ? {
                // Objekt mit der um 1 verringerten Menge
                ...item,
                selectedOption: {
                  ...item.selectedOption,
                  quantity: item.selectedOption.quantity - 1,
                },
              }
            : item
        )
        .filter((item) => item.selectedOption.quantity > 0);
    });
  };

  // Funktion um das ausgewählte Produkt vom Warenkorb zu enternen
  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      // filter() -> erstellt ein neues Array ohne das übergebene "product"
      return prevItems.filter(
        (item) =>
          !(
            item.id === product.id &&
            item.selectedOption.name === product.selectedOption.name
          )
      );
    });
  };

  return (
    /* gibt an alle untergeordneten Komponenten weiter */
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {/* Die untergeordneten Komponenten, die den Context verwenden können */}
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// useCart Hook -> erleichtert es den Komponenten, auf den createContext() zuzugreifen, ohne die Kontext API direkt verwenden zu müssen
export const useCart = () => {
  // Wert des CarContext
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
