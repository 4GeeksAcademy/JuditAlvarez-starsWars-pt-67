import React from "react";
import { Link } from "react-router-dom";


  
  const Navbar = () => {
    return (
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_black.png" alt="Star Wars Logo" />
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  