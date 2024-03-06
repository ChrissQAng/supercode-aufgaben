import { useState } from "react";

import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Allbeers from "./pages/Allbeers/Allbeers";
import Detail from "./pages/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allbeers" element={<Allbeers />} />
          <Route path="/allbeers/:_id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
