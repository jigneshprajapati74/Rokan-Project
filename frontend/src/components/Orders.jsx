import React from "react";

function Orders() {
  return (
    <div className="w-full flex justify-center items-center min-h-[70vh]">
      <div className="flex flex-col justify-center items-center gap-4">
        <p>You haven't placed any orders today</p>
        <button className="bg-blue-600 rounded-md text-white text-sm px-4 py-3">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Orders;
