import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobileItems } from "./navItemsList";

function MobileNavigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isRotate, setRotate] = useState(false);
  const [isRotateCross, setRotateCross] = useState(false);

  useEffect(() => {
    setRotate(false);
  }, [isRotateCross]);

  useEffect(() => {
    setRotateCross(false);
  }, [isRotate]);

  const handelRotateHam = () => {
    setMenuOpen(!isMenuOpen);
    setRotate(true);
  };

  const handelRotateBar = () => {
    setMenuOpen(!isMenuOpen);
    setRotateCross(true);
  };

  return (
    <>
      <div className="mobileNav mobileNavItem ">
        <NavLink
          to={"/"}
          exact
          activeClassName="active"
          className="navlink mobileNavItem"
          onClick={() => setMenuOpen(false)}
        >
          SHOP ON
        </NavLink>

        <div style={{ display: "flex" }}>
          <NavLink
            to={"/cart"}
            activeClassName="active"
            className="navlink mobileNavItem marginRight"
            onClick={() => setMenuOpen(false)}
          >
            <FaShoppingCart size={22} />
          </NavLink>
          {isMenuOpen ? (
            <div
              className={`navlink zIndex closeStyle ${
                isRotateCross ? "rotate" : ""
              }`}
            >
              <GrClose size={22} onClick={() => handelRotateHam()} />
            </div>
          ) : (
            <div className={`navlink zIndex ${isRotate ? "rotate" : ""}`}>
              <GiHamburgerMenu size={22} onClick={() => handelRotateBar()} />
            </div>
          )}
        </div>
      </div>
      <SideMenu isOpen={isMenuOpen}>
        {mobileItems.map((item, index) => {
          return (
            <NavLink
              to={item.to}
              activeClassName="active"
              className="navlink mobileNavItem"
              key={index}
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {item.title}
            </NavLink>
          );
        })}
      </SideMenu>
    </>
  );
}

export default MobileNavigation;

export const SideMenu = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    height: 100%;
    width: 100%;
    background: #f2f2f2;
    z-index: 30;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    /* left: ${(props) => (props.isOpen === true ? 0 : "100%")};
    right: ${(props) => (props.isOpen === true ? 0 : "-100%")}; */
    clip-path: ${(props) =>
      props.isOpen === true
        ? "circle(2000px at 90% -25%)"
        : "circle(0px at 90% -25%)"};
    position: fixed;
    transition: ${(props) =>
      props.isOpen === true ? "all 1.5s ease-in-out" : "all 0.7s ease-in-out"};
  }
`;
