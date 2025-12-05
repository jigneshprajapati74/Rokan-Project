import React from "react";
function Team() {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <h1 className="text-2xl">People</h1>
      <div className="flex justify-center w-[60%] gap-16 mt-20">
        <div className="flex flex-col justify center items-center w-[33%] gap-4">
          <img src="/public/media/jignesh.jpg" alt="" className="rounded-full w-"/>
          <span className="text-[18px] ">Jignesh Prajapati</span>
          <span className="text-[14px] text-gray-700">Founder, CEO</span>
        </div>
        <div className="flex flex-col w-[57%] text-[16px] gap-6">
          <p>
            Jignesh bootstrapped and founded Rokan in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Rokan has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <span>Playing basketball is his zen.</span>

          <span><a href="" className="text-blue-500">Connect on Homepage</a> / <a href="" className="text-blue-500">TradingQnA</a> / <a href="" className="text-blue-500">Twitter</a></span>
        </div>
      </div>
      <div className="">
         <div>
          <img src="" alt="" />
         </div>
      </div>
    </div>
  );
}

export default Team;
