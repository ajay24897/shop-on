import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { desktopItems } from "./navItemsList";
function DesktopNavigation() {
  return (
    <div className="navbarCnt ">
      <div className="logoCnt">
        <NavLink to={"/"} exact className="navlink">
          SHOP ON
        </NavLink>
      </div>

      <div className="navItemsCtn">
        {desktopItems.map((item, index) => {
          return (
            <NavLink
              exact={item.exact}
              to={item.to}
              activeClassName="active"
              className="navlink"
              key={index}
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default DesktopNavigation;
