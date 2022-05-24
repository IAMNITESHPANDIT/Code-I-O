import React from "react";
import {Link} from 'react-router-dom';


function NavBarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Code <span className="text-success">I/O</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
              <Link className="nav-link" to="/about">
                About Us
              </Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarComponent;
