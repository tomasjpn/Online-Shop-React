import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BackgroundManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    console.log("Current path:", path);
    console.log("Current path in TestLocation:", location.pathname);

    if (path.includes("/vfx")) {
      document.body.classList.add("background-black");
    } else {
      document.body.classList.remove("background-black");
    }
  }, [location.pathname]);

  return <div>Check the console for the current path.</div>;
};

export default BackgroundManager;
