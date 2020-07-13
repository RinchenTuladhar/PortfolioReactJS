import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink exact to="/" activeClassName="is-active">
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Contact Me
      </NavLink>
    </header>
  );
};

export default Header;
