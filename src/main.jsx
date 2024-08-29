import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./components/CartContext.jsx";
import { router } from "./routes/Router";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      {/* damit wird sicher gestellt, das alle Komponenten in den Router zugriff auf den Einkaufswagen haben*/}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
