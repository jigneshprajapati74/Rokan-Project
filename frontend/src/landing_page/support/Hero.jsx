import React from "react";
function Hero() {
  return (
    <div className="flex justify-center items-center py-8 bg-[#f8f9fb] mt-16">
      <div className="w-[72%] space-y-8">
        <div className="flex justify-between items-center">
        <h1 className="text-[36px] font-[600]">Support Portal</h1>
        <button className="border-solid bg-blue-500 px-5 py-2 rounded-md text-[16px] text-white font-[500]">
          My tickets
        </button>
        </div>
        <input type="text" className="border-solid border-gray-500 min-w-full p-4" placeholder="Eg: How do I open my account, How do i activate F&O... "/>
      </div>
    </div>
  );
}

export default Hero;
