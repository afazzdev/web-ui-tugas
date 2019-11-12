import React from "react";
import { icon1, icon2, icon3, icon4, icon5, icon6, icon7 } from "./icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <span className="side-logo">
          <img src={icon1} alt="" />
        </span>
        <ul className="side-container">
          <li className="side-list">
            <NavLink to="/content1" className="link" activeClassName="active">
              <img src={icon2} alt="" />
            </NavLink>
          </li>
          <li className="side-list">
            <NavLink to="/content2" className="link" activeClassName="active">
              <img src={icon3} alt="" />
            </NavLink>
          </li>
          <li className="side-list">
            <NavLink to="/meetings" className="link" activeClassName="active">
              <img src={icon4} alt="" />
            </NavLink>
          </li>
          <li className="side-list">
            <NavLink to="/content4" className="link" activeClassName="active">
              <img src={icon5} alt="" />
            </NavLink>
          </li>
          <li className="side-list">
            <NavLink to="/content5" className="link" activeClassName="active">
              <img src={icon6} alt="" />
            </NavLink>
          </li>
          <li className="side-list">
            <NavLink to="/content6" className="link" activeClassName="active">
              <img src={icon7} alt="" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
