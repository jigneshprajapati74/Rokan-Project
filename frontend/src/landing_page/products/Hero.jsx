import React from "react";
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center border-b">
      <div className="flex flex-col items-center justify-center w-[60%] h-[47vh] gap-4">
        <h1 className="text-[28px]">Rokan Products</h1>
        <h2 className="text-[20px]">
          Sleek, modern, and intuitive trading platforms
        </h2>
        <h2 className="text-[16px]">
          Check out our <a href="" className="text-blue-500">investment offerings →</a>
        </h2>
      </div>
    </div>
  );
}

export default Hero;
