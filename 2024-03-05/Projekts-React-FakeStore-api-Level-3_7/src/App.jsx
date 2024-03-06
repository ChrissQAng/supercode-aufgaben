import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
