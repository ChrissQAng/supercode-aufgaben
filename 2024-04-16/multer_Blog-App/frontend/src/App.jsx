import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detailpage from "./pages/Detailpage";
import Adminpage from "./pages/Adminpage";
import { useState } from "react";

function App() {
  const [blog, setBlog] = useState([]);
  // console.log(blog);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage blog={blog} setBlog={setBlog} />}
          />
          <Route path="/detailpage/:id" element={<Detailpage blog={blog} />} />
          <Route
            path="/admin"
            element={<Adminpage blog={blog} setBlog={setBlog} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
