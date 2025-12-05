import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import { watchlist } from "../data/data";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import DoughnutGraph from "./DoughnutGraph";

const labels = watchlist.map((items) => items.name);

function WatchList() {
  const data = {
    labels, 
    datasets: [
      {
        data: watchlist.map((items) => items.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
         borderWidth: 1,
    },
  ],
}; 

  const [activeRow, setActiveRow] = useState(null);

  return (
    <div className="w-full flex flex-col justify-center items-center p-2">
      <div className="flex items-center w-[98%] border shadow-sm px-3 py-2 gap-2 mb-2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="flex-1 outline-none text-sm"
        />
        <span className="text-sm">{watchlist.length} / 50</span>
      </div>

      {/* FIX: apply onMouseLeave on UL */}
      <ul
        className="w-full mb-6"
        onMouseLeave={() => setActiveRow(null)}
      >
        {watchlist.map((stock, index) => (
          <WatchlistItem
            stock={stock}
            key={index}
            index={index}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
          />
        ))}
      </ul>
      <DoughnutGraph data={data}/>
    </div>
  );
}

export default WatchList;

const WatchlistItem = ({ stock, index, activeRow, setActiveRow }) => {
  const { isBuyWindowOpen } = useContext(GeneralContext);

  const showActions = activeRow === index;
  const hidePriceInfo = showActions && isBuyWindowOpen;

  return (
    <li
      onMouseEnter={() => setActiveRow(index)}
      className="border-b w-full hover:bg-gray-100 cursor-pointer"
    >
      <div className="flex items-center justify-between p-2 w-full">

        {/* Stock Name */}
        <p
          className={`w-[120px] font-medium ${
            stock.isDown ? "text-red-500" : "text-green-500"
          }`}
        >
          {stock.name}
        </p>

        {/* Percent + Arrow + Price */}
        <div className="flex items-center justify-between">

          {/* Percent + Arrow */}
          <div className="flex items-center justify-between w-[80px] gap-1">
            {!hidePriceInfo && (
              <>
                <span
                  className={stock.isDown ? "text-red-500" : "text-green-500"}
                >
                  {stock.percent}
                </span>

                {stock.isDown ? (
                  <KeyboardArrowDownIcon className="text-red-500 text-sm" />
                ) : (
                  <KeyboardArrowUpIcon className="text-green-500 text-sm" />
                )}
              </>
            )}
          </div>

          {/* Price */}
          {!hidePriceInfo && (
            <span className="w-[70px] text-right">{stock.price}</span>
          )}
        </div>

        {/* Show actions ALWAYS on hover */}
        {showActions && <WatchListActions uid={stock.name} />}
      </div>
    </li>
  );
};


const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <div className="flex items-center gap-2 ml-3">

      <Tooltip title="Buy (B)" placement="top" slots={{ transition: Grow }}>
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded text-xs"
          onClick={() => openBuyWindow(uid)}
        >
          B
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" slots={{ transition: Grow }}>
        <button className="px-3 py-1 bg-red-600 text-white rounded text-xs">
          S
        </button>
      </Tooltip>

      <Tooltip title="Delete (D)" placement="top" slots={{ transition: Grow }}>
        <button className="px-1 py-[1px] bg-white border rounded">
          <DeleteIcon fontSize="small" />
        </button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top" slots={{ transition: Grow }}>
        <button className="px-1 py-[1px] bg-white border rounded">
          <BarChartOutlinedIcon fontSize="small" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" slots={{ transition: Grow }}>
        <button className="px-1 py-[1px] bg-white border rounded">
          <MoreHorizIcon fontSize="small" />
        </button>
      </Tooltip>
    </div>
  );
};
