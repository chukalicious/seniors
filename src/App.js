import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Navbar from "./common/Navbar";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <Navbar /> <Home />
    </div>
  );
}

export default App;
