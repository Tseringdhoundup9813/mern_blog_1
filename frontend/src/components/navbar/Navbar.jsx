import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts/create">Create Post</NavLink>
      <NavLink to="/posts/list">List Posts</NavLink>
    </header>
  );
}

export default Navbar;
