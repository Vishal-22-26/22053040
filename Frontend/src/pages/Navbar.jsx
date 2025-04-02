import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-around shadow-md text-lg">
      <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline text-yellow-300" : "hover:opacity-80"}>Top Users</NavLink>
      <NavLink to="/trending" className={({ isActive }) => isActive ? "font-bold underline text-yellow-300" : "hover:opacity-80"}>Trending Posts</NavLink>
      <NavLink to="/feed" className={({ isActive }) => isActive ? "font-bold underline text-yellow-300" : "hover:opacity-80"}>Feed</NavLink>
    </nav>
  );
};

export default Navbar;
