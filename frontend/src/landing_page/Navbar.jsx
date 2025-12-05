import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex items-center justify-between w-[72%] my-5">
        <div className="flex gap-3 items-center justify-center">
          <img src="/media/rokan-logo.png" alt="" className="h-7" />
          <h2 className="text-orange-600 text-2xl font-semibold">ROKAN</h2>
        </div>
        <ul className="flex items-center justify-between gap-9 font-sky-500">
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;