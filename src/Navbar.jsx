import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_color">
        <div className="row">
          <div className="col-10 mx-auto ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <img src="" alt="LOGO" className="rounded-pill" />
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ">
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/"
                    >
                      Home 
                    </NavLink>
                  </li>
               
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                
                  <li className="nav-item">
              <NavLink className="btn-get-started" to='/Service'>SignUp</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
