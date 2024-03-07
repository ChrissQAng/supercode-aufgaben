import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { LoadingContext, ThemeContext } from "./context/Context";
import Loadingscreen from "./pages/Loadingscreen/Loadingscreen";

function App() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? "dark" : ""}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {loading ? (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          ) : (
            <Loadingscreen />
          )}
        </LoadingContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
