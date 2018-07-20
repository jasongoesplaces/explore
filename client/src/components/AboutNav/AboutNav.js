import React from "react";

const LanderNav = () => (
  <div>
    <nav>
      <div className="nav-wrapper navBar">
        <a href="/about" className="brand-logo">explore</a>
        <ul id="nav-mobile" className="right">
          <li><a className="landerNav" href="/login">Log In</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default LanderNav;