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
    } else {
      document.body.classList.remove("background-black"); // Ansonsten wird die Klasse entfernt
    }

    return () => {
      document.body.classList.remove("background-black");
    };
  }, [location.pathname]); // Wird nur ausgeführt, wenn sich der Pfad-Name ändert

  return null;
};

export default BackgroundManager;
