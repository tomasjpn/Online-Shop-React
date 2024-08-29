import BackgroundManager from "../components/BackgroundManager.js";
import { useCart } from "../components/CartContext.jsx";
import Navbar from "../components/Navbar";

// Einkaufswagen Page
const ShoppingCart = () => {
  const { cartItems } = useCart();
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
              <h1>{product.name}</h1> -{" "}
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
