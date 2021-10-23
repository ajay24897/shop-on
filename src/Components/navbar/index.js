import React from "react";

import "../../index.css";

import DesktopNavigation from "./desktopNavigation";
import MobileNavigation from "./mobileNavigation";
import ScrollProgress from "./scrollProgress";

function Navbar() {
  return (
    <div className="navbarWrapper">
      <DesktopNavigation />
      <MobileNavigation />
      {/* <ScrollProgress /> */}
    </div>
  );
}

export default Navbar;
