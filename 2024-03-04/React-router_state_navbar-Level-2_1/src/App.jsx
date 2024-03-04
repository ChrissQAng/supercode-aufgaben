import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Header from "./components/Header";
import Contact from "./page/Contact/Contact";
import Openingtime from "./page/Openingtime/Openingtime";
import Gallery from "./page/Gallery/Gallery";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/openingtime" element={<Openingtime />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
