import { useEffect, useState } from "react";
import BackgroundManager from "../components/BackgroundManager.js";
import { useCart } from "../components/CartContext.jsx";
import Navbar from "../components/Navbar";
import styles from "../styles/ShoppingCart.module.css";

// Einkaufswagen Page
const ShoppingCart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const [totalPrice, setTotalPrice] = useState(0); // Verwende useState, um den Gesamtbetrag zu speichern

  // Berechnet den Gesamtpreis
  useEffect(() => {
    const calculateTotalAmount = () => {
      // reduce() -> reduziert alle Werte in einem Array auf einen einzigen Wert: sum -> akkumulierte Wert der bei 0 beginnt, item -> aktuelle Element in "cartItem"
      const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.selectedOption.price); // String in eine Dezimalzahl
        const quantity = parseInt(item.selectedOption.quantity, 10); // in ganze Zahl konvertieren mit Basis 10 = Dezimalsystem
        if (!isNaN(price) && !isNaN(quantity)) {
          return sum + price * quantity; // Gesamtpreis + Preis * Menge
        }
        return sum;
      }, 0); // Initialstartwert -> 0
      setTotalPrice(total.toFixed(2)); // auf zwei Nachkommastellen
    };

    calculateTotalAmount();
  }, [cartItems]); // Wird ausgelöst wenn sich cartItems ändert

  return (
    <div className={styles.mainContainer}>
      <BackgroundManager />
      <div className={styles.navbarDiv}>
        <Navbar fixed={false} />
      </div>

      <div className={styles.cartContainerMain}>
        <div className={styles.titleText}>
          <h1>SHOPPING CART</h1>
        </div>

        <div className={styles.barText}>
          <h4>Product</h4>
          <label>
            {" "}
            <h4>Quantity</h4>
          </label>
          <h4>Price</h4>
        </div>

        <div className={styles.cartContainer}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <div className={styles.containerList}>
                {cartItems.map((product, index) => (
                  <div key={index} className={styles.containerListMain}>
                    <div className={styles.containerListItems}>
                      <img src={product.image_path} alt={product.name}></img>

                      <div className={styles.descContainer}>
                        <h1>{product.name}</h1>
                        <h3>{product.selectedOption.name}</h3>
                      </div>

                      <div className={styles.amountContainer}>
                        <button onClick={() => decreaseQuantity(product)}>
                          -
                        </button>
                        <p>{product.selectedOption.quantity}</p>
                        <button onClick={() => increaseQuantity(product)}>
                          +
                        </button>
                      </div>
                      <div className={styles.priceContainer}>
                        <h3>{product.selectedOption.price}</h3>
                      </div>
                      <div className={styles.removeContainer}>
                        <button onClick={() => removeFromCart(product)}>
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className={styles.paymentContainer}>
            <h1>SUMMARY ORDER</h1>
            <div className={styles.containerListSummary}>
              {cartItems.map((product, index) => (
                <div key={index} className={styles.productList}>
                  <label>
                    {" "}
                    <p>{product.selectedOption.quantity}x</p>
                  </label>
                  <p>{product.name}</p>
                  <p>{product.selectedOption.name}</p>
                  <p>{product.selectedOption.price}</p>
                </div>
              ))}
            </div>

            <hr style={{ border: "1px solid #8888884f", width: "90%" }} />

            <p>
              Total: <label>{totalPrice} €</label>
            </p>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
