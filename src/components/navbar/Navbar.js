import React from "react";
import "./Navbar.css"; // Создай файл Navbar.css для стилей навбара

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#">HERE IS LOGO</a>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a href="#">COURSES</a>
        </li>
        <li className="nav-item">
          <a href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="#">CONTACT</a>
        </li>
        <li className="nav-item">
          <a href="#">TEAM</a>
        </li>
        <li className="nav-item">
          <a href="#">BLOG</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;