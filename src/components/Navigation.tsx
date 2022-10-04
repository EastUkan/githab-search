import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center h-12 px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold ">Github Search</h3>
      <span>
        <Link to="/" className="mr-2 ">
          home
        </Link>
        <Link to="/favorites">favorites</Link>
      </span>
    </nav>
  );
}
