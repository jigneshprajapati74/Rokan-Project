import React from "react";
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center pt-16 h-[49%] gap-2">
        <h1 className="text-[28px] font-medium mt-2">Charges</h1>
        <p className="text-[20px] text-gray-400 font-normal">List of all charges and taxes</p>
      </div>
      <div className="flex justify-between w-[72%] text-[28px]">
        <div className="flex flex-col items-center w-[30%] text-center gap-5">
            <img src="/media/pricing0.svg" alt="" className="w-[80%]"/>
            <h1>Free equity delivery</h1>
            <p className="text-[16px] text-gray-600">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="flex flex-col items-center w-[30%] text-center gap-5">
            <img src="/media/intradayTrades.svg" alt="" className="w-[80%]" />
            <h1>Intraday and F&O trades</h1>
            <p className="text-[16px] text-gray-600">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="flex flex-col items-center w-[30%] text-center gap-5">
            <img src="/media/pricing0.svg" alt="" className="w-[80%]" />
            <h1>Free direct MF</h1>
            <p className="text-[16px] text-gray-600">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
