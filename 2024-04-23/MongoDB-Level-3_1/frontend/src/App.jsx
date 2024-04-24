import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import Detailpage from "./pages/Detailpage/Detailpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/movies/:mID" element={<Detailpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
