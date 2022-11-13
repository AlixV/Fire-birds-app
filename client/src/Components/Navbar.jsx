import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/list"> - Fire Birds List - </NavLink>
      <NavLink to="/create"> Create your Fire Bird </NavLink>
      <NavLink to="/trucs"> - Essais divers - </NavLink>
    </nav>
  );
};

export default Navbar;
