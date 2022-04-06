import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div>
      <nav>
        <div className="navSection">
          <Link to={"/home"}>Home</Link>
          <Link to={"/reviews"}>Reviews</Link>
          <Link to={"/dashBoard"}>DashBoard</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/about"}>About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
