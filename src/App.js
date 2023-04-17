import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/header/MobileHeader";
import { Home } from "./pages/home/index";
import MenuBarComp from "./pages/menubar/index";
import { BudjetSection } from "./pages/shared/budjetSection";
import { HomeCard } from "./pages/shared/homeCard";
import { VideoSection } from "./pages/shared/videoSection";

const App = () => {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/MenuBarComp" element={<MenuBarComp />} />
      <Route path="/Sidebar" element={<Sidebar />} />
    </Routes>

  );
}

export default App;
