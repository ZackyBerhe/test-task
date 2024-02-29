import { Route } from "react-router-dom";
import Home from "../pages/Home";

// import Police from "../pages/Police";

const routes = [
  <Route path="/" element={<Home />} />,
  <Route path="/home" element={<Home />} />,
];

export default routes;
