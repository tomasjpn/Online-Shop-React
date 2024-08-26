import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Ist für die Farbanpassung je nach Seitenpfad zuständig
const BackgroundManager = () => {
  const location = useLocation(); // Informationen über den aktuellen "Standortort / Pfad"

  useEffect(() => {
    const path = location.pathname; // Namen des aktuellen Pfad

    if (path.startsWith("/vfx")) {
      // Wenn der Name = VFX

      document.body.classList.add("background-black"); // Wird dem body die Klasse Background-black hinzugefügt
      document.body.classList.remove("background-white");
    } else {
      document.body.classList.add("background-white"); // Ansonsten wird die Klasse entfernt
      document.body.classList.remove("background-black");
    }

    return () => {
      document.body.classList.remove("background-black");
    };
  }, [location.pathname]); // Wird nur ausgeführt, wenn sich der Pfad-Name ändert

  return null;
};

export default BackgroundManager;
