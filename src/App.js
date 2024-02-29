import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>{routes}</Routes>
    </Router>
  );
}

export default App;
