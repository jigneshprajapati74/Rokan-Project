import React from "react";

function Ticket() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-items-center w-[72%] pt-16">
        <div className="flex justify-between">
          <div className="flex flex-col justify-items-center w-[33%]">
            <h3 className="flex items-center gap-2 text-xl">
              <i className="fa-solid fa-circle-plus"></i>Account Opening
            </h3>
            <div className="flex flex-col space-y-2 mt-4">
              <a href="" className="text-blue-500">Resident individual</a>
              <a href="" className="text-blue-500">Minor</a>
              <a href="" className="text-blue-500">Non Resident Indian (NRI)</a>
              <a href="" className="text-blue-500">Company, Partnership, HUF and LLP</a>
              <a href="" className="text-blue-500">Glossary</a>
            </div>
          </div>
          <div className="flex flex-col justify-items-center w-[33%]">
            <h3 className="flex items-center gap-2 text-xl">
              <i className="fa-solid fa-circle-plus"></i>Your Rokan Account
            </h3>
            <div className="flex flex-col space-y-2 mt-4">
              <a href="" className="text-blue-500">Your Profile</a>
              <a href="" className="text-blue-500">client Master Report (CMR) and Depository Participant (DP)</a>
              <a href="" className="text-blue-500">Nomination</a>
              <a href="" className="text-blue-500">Transfer and conversion of securities</a>
              <a href="" className="text-blue-500">Transfer and conversion of securities</a>
            </div>
          </div>
          <div className="flex flex-col justify-items-center w-[33%]">
            <h3 className="flex items-center gap-2 text-xl">
              <i className="fa-solid fa-circle-plus"></i>Rokan
            </h3>
            <div className="flex flex-col space-y-2 mt-4">
              <a href="" className="text-blue-500">IPO</a>
              <a href="" className="text-blue-500">Trading FAQs</a>
              <a href="" className="text-blue-500">Margin Trading Facility (MTF) and Margins</a>
              <a href="" className="text-blue-500">Charts and orders</a>
              <a href="" className="text-blue-500">Alerts and Nudges</a>
              <a href="" className="text-blue-500">General</a>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-12">
          <div className="flex flex-col justify-items-center w-[33%]">
            <h3 className="flex items-center gap-2 text-xl">
              <i className="fa-solid fa-circle-plus"></i>Funds
            </h3>
            <div className="flex flex-col space-y-2 mt-4">
              <a href="" className="text-blue-500">Add money</a>
              <a href="" className="text-blue-500">Withdraw money</a>
              <a href="" className="text-blue-500">Add bank accounts</a>
              <a href="" className="text-blue-500">eMandates</a>
            </div>
          </div>
          <div className="flex flex-col justify-items-center w-[33%]">
            <h3 className="flex items-center gap-2 text-xl">
              <i className="fa-solid fa-circle-plus"></i>Console
            </h3>
            <div className="flex flex-col space-y-2 mt-4">
              <a href="" className="text-blue-500">Portfolio</a>
              <a href="" className="text-blue-500">Corporate actions</a>
              <a href="" className="text-blue-500">Funds statement</a>
              <a href="" className="text-blue-500">Reports</a>
              <a href="" className="text-blue-500">Profile</a>
              <a href="" className="text-blue-500">Segments</a>
            </div>
          </div>
          <div className="flex flex-col justify-items-center w-[33%]">
            <h3 className="flex items-center gap-2 text-xl">
              <i className="fa-solid fa-circle-plus"></i>Coin
            </h3>
            <div className="flex flex-col space-y-2 mt-4">
              <a href="" className="text-blue-500">Mutual funds</a>
              <a href="" className="text-blue-500">National Pension Scheme (NPS)</a>
              <a href="" className="text-blue-500">Fixed Deposit (FD)</a>
              <a href="" className="text-blue-500">Features on Coin</a>
              <a href="" className="text-blue-500">Payments and Orders</a>
              <a href="" className="text-blue-500">General</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;