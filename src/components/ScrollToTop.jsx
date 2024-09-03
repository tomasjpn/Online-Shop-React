import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Sorgt dafür, dass bei Navigieren zwischen den Seiten, die Seite jedesmal ganz oben anfängt
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrollt nach oben, wenn sich die Route ändert
  }, [pathname]);

  return null;
};

export default ScrollToTop;
