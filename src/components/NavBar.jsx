import React from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";

export default function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="flex fixed z-50 md:gap-4 gap-6 justify-between text-white font-bold items-center bg-red-500 right-0 left-0 p-4 ">
      <Link
        className="tracking-wide cursor-pointer flex text-2xl md:text-4xl hover:text-yellow-400 text-bold duration-300"
        to="/"
      >
        FlickFinder
      </Link>

      <div className="flex justify-between md:gap-6 gap-3">
        <NavLink
          to="/"
          className="hover:text-yellow-400 text-bold duration-300"
        >
          Home
        </NavLink>
        <input
          type="text"
          placeholder="Search..."
          className="w-24 border-2 border-white md:w-48 px-4 rounded-lg outline-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
}
