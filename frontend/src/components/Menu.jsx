import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();

  // function to check if route is active
  const isActive = (path) =>
    location.pathname === path ? "text-orange-600 font-semibold" : "text-gray-800";

  return (
    <div className="flex w-full">

      {/* LEFT NIFTY/SENSEX */}
      <div className="w-[30%] flex justify-between items-center py-3 px-16 border-b border-r text-[12px] font-semibold">
        <div className="flex gap-2">
          <p>NIFTY 50</p>
          <p className="text-green-600">{26215.55}</p>
        </div>

        <div className="flex gap-2">
          <p>SENSEX</p>
          <p className="text-green-600">{85818.15}</p>
        </div>
      </div>

      {/* RIGHT MENU */}
      <div className="w-[70%] flex justify-between items-center border-b text-[13px]">

        {/* LOGO + LINKS */}
        <div className="flex items-center px-8 w-[83%] gap-8">

          {/* Logo */}
          <img src="/media/rokan-logo.png" alt="" className="h-7 p-1" />

          {/* MENU ITEMS WITHOUT MAP */}
          <ul className="flex gap-8 items-center w-full justify-end">

            <li>
              <Link to="/dashboard">
                <p className={isActive("/dashboard")}>
                  Dashboard
                </p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/orders">
                <p className={isActive("/dashboard/orders")}>
                  Orders
                </p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/holdings">
                <p className={isActive("/dashboard/holdings")}>
                  Holdings
                </p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/positions">
                <p className={isActive("/dashboard/positions")}>
                  Positions
                </p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/funds">
                <p className={isActive("/dashboard/funds")}>
                  Funds
                </p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/apps">
                <p className={isActive("/dashboard/apps")}>
                  Apps
                </p>
              </Link>
            </li>

          </ul>
        </div>

        {/* USER */}
        <div className="flex justify-center items-center gap-4 w-[17%] py-3 border-l h-full cursor-pointer">
          <div>ZU</div>
          <p>USERID</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
