import React from "react";
function Eduction() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-between w-[72%] mt-28">
          <img src="media/education.svg" alt="" />
        <div className="w-[45%] ">
          <h1 className="text-2xl">Free and open market education</h1>

          <p className="mt-6">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="" className="flex items-center text-blue-500 mt-3">
            Varsity<i className="fa-solid fa-arrow-right ml-1"></i>
          </a>

          <p className="mt-6">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="" className="flex items-center text-blue-500 mt-3">
            TradingQ&A<i className="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Eduction;
