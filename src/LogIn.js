import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => (
  <div>
      
    <li className="dropdown">
      <Link
        to=""
        className="nav-link dropdown-toggle"
        role="button"
        data-toggle="dropdown"
      >
        Log In
      </Link>
      <ul className="dropdown-menu">
        <form>
          <label>
            <li>
              <Link to="">
                <input type="text" name="email" placeholder="email" />
              </Link>
            </li>
            <li>
              <Link to="">
                <input type="password" name="password" placeholder="password" />
              </Link>
            </li>
          </label>
          <li>
            <Link to="">
              <input className="login-submit" type="submit" value="Log In" />
            </Link>
          </li>
        </form>
      </ul>
    </li>
  </div>

);

export default LogIn;
