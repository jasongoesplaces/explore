import React from "react";

const Nav = () => (
  <div>
    <nav>
      <div className="nav-wrapper navBar">
        <a href="/about" className="brand-logo">explore</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/about">About Us</a></li>
          <li><a href="/guides">Guides</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/forum">Forum</a></li>
          <li><a href="/logout">Log Out</a></li>
        </ul>
        <ul id="nav-mobile" className="left hide-on-large-only">
          <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">menu</i></a></li>
        </ul>
      </div>
    </nav>
    <ul id="dropdown1" className="dropdown-content">
      <li><a href="/about">About Us</a></li>
      <li><a href="/guides">Guides</a></li>
      <li><a href="/events">Events</a></li>
      <li><a href="/forum">Forum</a></li>
      <li><a href="/logout">Log Out</a></li>
    </ul>
  </div>
);

export default Nav;
