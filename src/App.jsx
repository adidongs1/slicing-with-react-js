import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home"
import Prices from "./pages/Prices";
import About from "./pages/About";
import Contacts from "./pages/Contacts";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Prices" element={<Prices />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contacts />} />
      </Routes>
    </Router>
  )
}