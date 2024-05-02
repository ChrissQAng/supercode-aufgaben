import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import Detailpage from "./pages/Detailpage/Detailpage";
import Addpage from "./pages/Addpage/Addpage";
import Favpage from "./pages/Favpage/Favpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/addpage" element={<Addpage />} />
          <Route path="/fav" element={<Favpage />} />
          <Route path="/movies/:mID" element={<Detailpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
