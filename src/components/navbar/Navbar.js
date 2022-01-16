import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light ">
        <div className="container-fluid nav-container-custom">
          <Link to="/" className="navbar-brand nav-inside">
            <img
              src="https://pngimg.com/uploads/yoga/yoga_PNG139.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top mx-3 img-nav"
            />
            <span className="nav-head">Muse-Yoga</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
