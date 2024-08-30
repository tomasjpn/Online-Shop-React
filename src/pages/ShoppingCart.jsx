import BackgroundManager from "../components/BackgroundManager.js";
import { useCart } from "../components/CartContext.jsx";
import Navbar from "../components/Navbar";

// Einkaufswagen Page
const ShoppingCart = () => {
  const { cartItems } = useCart();

  console.log(cartItems);
  return (
    <div>
      <BackgroundManager />
      <Navbar />
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((product, index) => (
            <li key={index}>
              <h1>{product.name}</h1>
              <h2>{product.selectedOption.quantity}</h2>
              <h3>{product.selectedOption.option}</h3>
              {product.selectedOption?.description ||
                "Keine Option ausgewählts"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
