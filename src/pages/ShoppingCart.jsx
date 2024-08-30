import BackgroundManager from "../components/BackgroundManager.js";
import { useCart } from "../components/CartContext.jsx";
import Navbar from "../components/Navbar";
import styles from "../styles/ShoppingCart.module.css";

// Einkaufswagen Page
const ShoppingCart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  console.log(cartItems);
  return (
    <div className={styles.mainContainer}>
      <BackgroundManager />
      <Navbar fixed={false} />
      <h1>Shopping Cart</h1>
      <div className={styles.cartContainer}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className={styles.containerList}>
            <ul>
              {cartItems.map((product, index) => (
                <div key={index} className={styles.containerListItems}>
                  <img src={product.image_path}></img>
                  <div className={styles.descContainer}>
                    <h1>{product.name}</h1>
                    <h3>{product.selectedOption.name}</h3>
                  </div>
                  <div className={styles.amountContainer}>
                    <button onClick={() => decreaseQuantity(product)}>-</button>
                    <p>{product.selectedOption.quantity}</p>
                    <button onClick={() => increaseQuantity(product)}>+</button>
                  </div>
                  <div className={styles.priceContainer}>
                    <h3>{product.selectedOption.price}</h3>
                  </div>

                  <div className={styles.removeContainer}>
                    <button onClick={() => removeFromCart(product)}>X</button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
