import React from "react";
import { Link } from "react-router-dom";
import LogIn from "./LogIn"

const NavBar = () => (

<nav className="navbar navbar-expand-lg">
        <div className="navbar-brand">
          <Link className="logo" to="/">
            <img src={require("./images/pplogo.png")} width="160" alt="" />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".navbar_supported"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>

        <div className="collapse navbar-collapse navbar_supported">
          <ul className="navbar-nav">
            <li className="dropdown"></li>
            <li>
              <Link to="#">Explore</Link>
            </li>
            <li className="dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to=""
                role="button"
                data-toggle="dropdown"
              >
                Example Templates
              </Link>
            </li>
            <LogIn/>
          </ul>
        </div>
      </nav>
)

export default NavBar