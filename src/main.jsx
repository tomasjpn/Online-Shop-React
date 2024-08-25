import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import "./styles/index.css";
import BackgroundManager from "./components/BackgroundManager.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <BackgroundManager />
    </RouterProvider>
  </StrictMode>
);
