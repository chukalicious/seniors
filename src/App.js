import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Navbar from "./common/Navbar";
import Home from "./components/Home";
import Over60 from "./components/Over60";
import Services from "./components/Services";
import Footer from "./common/Footer";
import Vaccines from "./components/Vaccines";

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
        <Route path="/services" element={<Services />} />
        <Route path="/vaccines" element={<Vaccines />} />
        <Route path="/over60" element={<Over60 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
