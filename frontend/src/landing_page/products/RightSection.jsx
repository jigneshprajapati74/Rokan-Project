import React from "react";
function RightSection({
  imageURL,
  parameter,
  productDesription,
  link,
  linkName
}) {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="flex items-center justify-between w-[68%]">
        <div className="flex flex-col w-[30%] text-[17px] gap-6">
          <h1 className="text-[25px]">{parameter}</h1>
          <p>{productDesription}</p>
          <div className="flex gap-8">
            <a href={link} className="text-blue-500">{linkName} <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div>
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
