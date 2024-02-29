import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Property from "../pages/Property/[id]";

// import Police from "../pages/Police";

const routes = [
  <Route path="/" element={<Home />} />,
  <Route path="/property/:id" element={<Property />} />,
];

export default routes;
