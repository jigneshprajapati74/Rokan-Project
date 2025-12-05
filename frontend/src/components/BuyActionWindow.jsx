import React, { useState } from "react";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";


const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    closeBuyWindow();
  }

  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-6">

      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">
        Buy – <span className="text-blue-600">{uid}</span>
      </h2>

      {/* Input section */}
      <div className="space-y-4">

        {/* Qty input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter qty"
            onChange={(e) => setStockQuantity(e.target.value)}
            value={stockQuantity}
          />
        </div>

        {/* Price input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            step="0.05"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
            onChange={(e) => setStockPrice(e.target.value)}
            value={stockPrice}
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-6">

        {/* Margin */}
        <p className="text-gray-600 text-sm mb-3">
          Margin required: <span className="font-semibold">₹140.65</span>
        </p>

        <div className="flex justify-between items-center">

          {/* Buy button */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleBuyClick}
          >
            Buy
          </button>

          {/* Cancel */}
          <button
            onClick={closeBuyWindow}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
