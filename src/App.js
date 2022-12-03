import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Navbar from "./common/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./common/Footer";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <Navbar />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
