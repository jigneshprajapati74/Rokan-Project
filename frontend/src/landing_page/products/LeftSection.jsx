import React from "react";
function LeftSection({imageURL, parameter, productDesription, tryDemo, learnMore, trydemoName, learnmoreName, googlePlay, appStore}) {
  return (
    <div className="flex justify-center items-center mt-16">
    <div className="flex items-center justify-between w-[68%]">
      <div>
        <img src={imageURL} alt="" />
      </div>
      <div className="flex flex-col w-[30%] text-[17px] gap-6">
        <h1 className="text-[25px]">{parameter}</h1>
        <p>{productDesription}</p>
        <div className="flex gap-8">
          <a href={tryDemo} className="text-blue-500">{trydemoName} <i className="fa-solid fa-arrow-right"></i></a>
          <a href={learnMore} className="text-blue-500">{learnmoreName} <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="flex justify-between">
          <a href={googlePlay}>
            <img src="./public/media/googlePlayBadge.svg" alt="" />
          </a>
          <a href={appStore}>
            <img src="./public/media/appstoreBadge.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LeftSection;
