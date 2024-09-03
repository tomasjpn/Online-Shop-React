import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const verticalAnim2 = (yvalue, duration, blur = "2px") => ({
    hidden: { opacity: 0, y: yvalue, filter: `blur(${blur})` },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, ease: "easeOut" },
    },
  });

  const horizontalAnim = (xvalue, duration, blur = "2px") => ({
    hidden: { opacity: 0, x: xvalue, filter: `blur(${blur})` },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration, ease: "easeOut" },
    },
  });

  const variant1 = verticalAnim2(300, 0.9);
  const variant2 = verticalAnim2(300, 0.7);
  const variant3 = verticalAnim2(300, 0.8);
  const variant4 = horizontalAnim(300, 0.9);

  // Verschiedene Animationseinstellungen
  const controlShoppingList = useAnimation();
  const controlSummaryOrder = useAnimation();

  // useEffect -> um afu das Scrollen der Seite zu reagieren
  useEffect(() => {
    let ticking = false; // Stellt sicher, dass die Scroll Position nur dann verarbeitet wird, wenn keine anderen Aktualisierungen anstehen

    const handleScroll = () => {
      // Stellt sicher, dass die Scroll Position nur dann verarbeitet wird, wenn keine anderen Aktualisierungen anstehen
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Jedes Motion-Section wird mit dem jeweiligen Aniamtionseinstellungen definiert

          const sections = [
            { className: styles.cartContainer, control: controlShoppingList },
            {
              className: styles.paymentContainer,
              control: controlSummaryOrder,
            },
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
  }, [controlShoppingList, controlSummaryOrder]);

  return (
    <div className={styles.mainContainer}>
      <BackgroundManager />
      <div className={styles.navbarDiv}>
        <Navbar fixed={false} />
      </div>

      <div className={styles.cartContainerMain}>
        <motion.div
          className={styles.titleText}
          animate={controlShoppingList}
          initial="hidden"
          variants={variant2}
        >
          <h1>SHOPPING CART</h1>
        </motion.div>

        <motion.div
          className={styles.barText}
          animate={controlShoppingList}
          initial="hidden"
          variants={variant3}
        >
          <h4>Product</h4>
          <label>
            {" "}
            <h4>Quantity</h4>
          </label>
          <h4>Price</h4>
        </motion.div>

        <div className={styles.cartContainer}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <div className={styles.containerList}>
                {cartItems.map((product, index) => (
                  <motion.div
                    key={index}
                    className={styles.containerListMain}
                    animate={controlShoppingList}
                    initial="hidden"
                    variants={variant1}
                  >
                    <motion.div className={styles.containerListItems}>
                      <img
                        src={product.media[0]?.path}
                        alt={product.name}
                        className={styles.productImage}
                      />

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
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
          <motion.div
            className={styles.paymentContainer}
            animate={controlSummaryOrder}
            initial="hidden"
            variants={variant4}
          >
            <motion.div variants={variant4}>
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
              <div className={styles.confirmOrder}>
                <button>BESTELLUNG ABSCHLIESSEN</button>
              </div>
              <div className={styles.returnStore}>
                <Link to="/store">
                  <button>WEITER EINKAUFEN</button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
