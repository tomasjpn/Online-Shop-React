import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const CartContext = createContext(); // Context Objekt um Daten zwischen Komponenten zu teilen

// Funktion um den Zustand des Einkaufswagen zu verwalten und stellt ih  über createContext zur Verfügung + beinhaltet die Funktion zum Hinzufügen von Produkten.
export const CartProvider = ({ children }) => {
  // UseState für den Inhalt des Einkaufswagen
  const [cartItems, setCartItems] = useState([]);

  // Funktion um die Produkte zum Einkaufswagen hinzuzufügen
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    /* gibt an alle untergeordneten Komponenten weiter */
    <CartContext.Provider value={{ cartItems, addToCart }}>
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
