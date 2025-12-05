import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Menu";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import WatchList from "./WatchList";
import BuyActionWindow from "./BuyActionWindow";

import GeneralContext, { GeneralContextProvider } from "./GeneralContext";

function DashboardContent() {
  const { isBuyWindowOpen, selectedStockUID } = useContext(GeneralContext);

  return (
    <div className="flex flex-col w-full h-screen">

      {/* TOP NAV */}
      <div className="sticky top-0 z-20 bg-white border-b shadow-sm">
        <Menu />
      </div>

      <div className="flex w-full flex-1 overflow-hidden">

        {/* LEFT: WATCHLIST */}
        <div
          className={`border-r overflow-y-auto transition-all duration-300 ${
            isBuyWindowOpen ? "w-[25%]" : "w-[30%]"
          }`}
        >
          <WatchList />
        </div>

        {/* CENTER: BUY WINDOW */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isBuyWindowOpen ? "w-[22%]" : "w-0"
          }`}
        >
          {isBuyWindowOpen && (
            <div className="p-4 h-full flex">
              <BuyActionWindow uid={selectedStockUID} />
            </div>
          )}
        </div>

        {/* RIGHT: ROUTES */}
        <div
          className={`transition-all duration-300 overflow-y-auto p-4 ${
            isBuyWindowOpen ? "w-[53%]" : "w-[70%]"
          }`}
        >
          <Routes>

            {/* Default page */}
            <Route index element={<Summary />} />

            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="apps" element={<Apps />} />

            {/* Redirect invalid paths */}
            <Route path="*" element={<Navigate to="/dashboard" />} />

          </Routes>
        </div>

      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <GeneralContextProvider>
      <DashboardContent />
    </GeneralContextProvider>
  );
}
