import { useLocation } from "react-router-dom";

const TestLocation = () => {
  const location = useLocation();
  return <div>Current path: {location.pathname}</div>;
};

export default TestLocation;
