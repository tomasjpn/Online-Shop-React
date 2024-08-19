import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Gallery from "../pages/Gallery";
import SearchPage from "../pages/SearchPage";
import ShoppingCart from "../pages/ShoppingCart";
import Store from "../pages/Store";

//Router für die Pfade zu den verschiedenen Seiten
export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/store", element: <Store /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/searchpage", element: <SearchPage /> },
  { path: "/shoppingcart", element: <ShoppingCart /> },
]);
