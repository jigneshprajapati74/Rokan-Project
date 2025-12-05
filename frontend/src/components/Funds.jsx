import React from "react";

function Funds() {
  return (
    <div className="w-full min-h-[70h]">
      <div className="flex justify-end items-center gap-4 p-6">
        <div className="flex justify-center items-center gap-1">
          <span className="text-xs">
            Instant, zero-cost fund transfers withimg
          </span>
          <img src="./media/UPI.svg" alt="" className="w-[36px]"/>
        </div>
        <button className="px-3 py-2 bg-green-500 text-white text-sm rounded-sm">
          Add funds
        </button>
        <button className="px-3 py-2 bg-blue-600 text-white text-sm rounded-sm">
          Withdraw
        </button>
      </div>
      <div className="border rounded-md p-6 ml-6 mt-6 w-[380px] shadow-sm bg-white">
        <h2 className="text-[18px] font-semibold mb-4">Equity</h2>

        <div className="text-sm text-gray-700 space-y-2">
          <div className="flex justify-between">
            <span>Available margin</span>
            <span>4,043.10</span>
          </div>

          <div className="flex justify-between">
            <span>Used margin</span>
            <span>3,757.30</span>
          </div>

          <div className="flex justify-between">
            <span>Available cash</span>
            <span>4,043.10</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between">
            <span>Opening Balance</span>
            <span>4,043.10</span>
          </div>

          <div className="flex justify-between">
            <span>Opening Balance</span>
            <span>37,364.40</span>
          </div>

          <div className="flex justify-between">
            <span>Payin</span>
            <span>40,640.00</span>
          </div>

          <div className="flex justify-between">
            <span>SPAN</span>
            <span>0.00</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery margin</span>
            <span>0.00</span>
          </div>

          <div className="flex justify-between">
            <span>Exposure</span>
            <span>0.00</span>
          </div>

          <div className="flex justify-between">
            <span>Options premium</span>
            <span>0.00</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between">
            <span>Collateral (Liquid funds)</span>
            <span>0.00</span>
          </div>

          <div className="flex justify-between">
            <span>Collateral (Equity)</span>
            <span>0.00</span>
          </div>

          <div className="flex justify-between font-semibold">
            <span>Total Collateral</span>
            <span>0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funds;
