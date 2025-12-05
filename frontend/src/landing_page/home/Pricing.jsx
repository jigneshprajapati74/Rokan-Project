import React from "react";
function Pricing() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center w-[72%] mt-28">
        <div className="w-3/6">
          <h1 className="text-2xl">Unbeatable pricing</h1>
          <p className="mt-6">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="flex items-center mt-3 text-blue-500">
            <span>see pricing</span>
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div className="flex text-[10px]">
          <div className="flex">
            <img src="media/pricing0.svg" alt="" className="w-32" />
            <p className="mt-14">Free Accont Opening</p>
          </div>
          <div className="flex w-[42%]">
            <img src="media/pricingEquity.svg" alt="" className="w-32" />
            <p className="mt-14">
              {" "}
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div className="flex">
            <img src="media/intradayTrades.svg" alt="" className="w-32 ml-4" />
            <p className="mt-14">Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
