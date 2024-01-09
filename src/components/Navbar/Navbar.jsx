import React from "react";
import { Header } from "./style";
import navbar1 from "../../assets/svg/navbar-1.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Header>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-row">
              <NavLink to={"/"}>
                <img className="navbar-logo" src={navbar1} alt="" />
              </NavLink>
              <ul className="navbar-menu">
                <li>
                  <NavLink to={"/mercedes"}>MERCEDES-BENZ</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>ABOUT US</NavLink>
                </li>
                <li>
                  <NavLink to={"/add"}>ADD</NavLink>
                </li>
                <li>
                  <NavLink to={"/editdelete"}>EDIT/DELETE</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Header>
    </>
  );
}

export default Navbar;
