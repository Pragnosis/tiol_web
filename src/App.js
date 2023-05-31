import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/header/MobileHeader";
import { Home } from "./pages/home/index";
import MenuBarComp from "./pages/menubar/index";
import { BudjetSection } from "./pages/shared/budjetSection";
import { HomeCard } from "./pages/shared/homeCard";
import { VideoSection } from "./pages/shared/videoSection";
import { Caselaw } from "./pages/shared/caselaw";
import { LandingLayout } from "./pages/landinglayout";
import { DetailedLayout } from "./pages/detaillayout";

const App = () => {
  return (

    <Routes>

      {/* <Route path="/incometax/caselaw/sccases" element={<LandingLayout />} /> */}
      <Route path="/:parent/:submenu1/:submenu2/:submenu3" element={<LandingLayout />} />
      <Route path="/:parent/:submenu1/:submenu2" element={<LandingLayout />} />
      <Route path="/:parent/:submenu1" element={<LandingLayout />} />
      <Route path="/:parent" element={<LandingLayout />} />
      <Route path="/" element={<Home />} />
      {/* <Route path=":id/details" element={<LandingLayout />} /> */}
    </Routes>

  );
}

export default App;
