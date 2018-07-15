import React from "react";

const Nav = () => (
  <div>
    <nav>
      <div className="nav-wrapper navBar">
        <a href="#" className="brand-logo">explore</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/about">About Us</a></li>
          <li><a href="/guides">Guides</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>
        <ul id="nav-mobile" className="left hide-on-large-only">
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="material-icons right">menu</i></a></li>
        </ul>
      </div>
    </nav>
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="/about">About Us</a></li>
      <li><a href="/guides">Guides</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Forum</a></li>
      <li><a href="#">Log Out</a></li>
    </ul>
  </div>
);

export default Nav;
