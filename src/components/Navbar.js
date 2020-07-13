import React from "react";
import "./../styles/navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="page-links">
        <NavLink exact to="/" activeClassName="is-active">
          Home
        </NavLink>
        <NavLink to="/contact" activeClassName="is-active">
          Contact Me
        </NavLink>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/rinchen-tuladhar/" target="_blank">
          <i
            class="fa fa-linkedin-square"
            aria-hidden="true"
            id="linked-in"
          ></i>
        </a>
        <a href="https://bitbucket.org/rinchent" target="_blank">
          <i class="fa fa-bitbucket" aria-hidden="true" id="bitbucket"></i>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
