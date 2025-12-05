import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="flex flex-col items-center justify-center w-[61%] gap-6 text-[17px]">
        <h1 className="text-[25px]">The Rokan Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="flex justify-between w-full text-[12px] mt-6">
          <div className="flex flex-col items-center w-[27%] gap-16">
            <a href="" className="flex flex-col items-center text-center gap-4">
              <img
                src="/media/zerodhaFundhouse.png"
                alt=""
                className="w-[80%]"
              />
              <p>
                Our asset management venture
                <br />
                that is creating simple and
                transparent index 
                <br />
                funds to help you save for your goals.
              </p>
            </a>

            <a href="" className="flex flex-col items-center text-center gap-4">
              <img
                src="/media/streakLogo.png"
                alt="SSteak Logo"
                className="w-[70%]"
              />
              <p>
                Systematic trading platform
                <br />
                that allows you to create and
                backtest
                <br /> 
                strategies without coding.
              </p>
            </a>
          </div>
          <div className="flex flex-col items-center w-[28%] gap-20">
            <a href="" className="flex flex-col items-center text-center gap-4">
              <img
                src="./public/media/sensibullLogo.svg"
                alt=""
                className="w-[80%]"
              />
              <p>
                Options trading platform that lets you 
                <br />
                create strategies,
                analyze positions, and examine 
                <br />
                data points like open interest,
                FII/DII, and more.
              </p>
            </a>

            <a href="" className="flex flex-col items-center text-center gap-4">
              <img
                src="./public/media/smallcaseLogo.png"
                alt=""
                className="w-full"
              />
              <p>
                Thematic investing platform 
                <br />
                that helps you invest in diversified
                <br />
                baskets of stocks on ETFs.
              </p>
            </a>
          </div>
          <div className="flex flex-col items-center w-[27%] gap-16">
            <a href="" className="flex flex-col items-center text-center gap-4">
              <img
                src="./public/media/tijoriLogo.svg"
                alt=""
                className="w-[60%]"
              />
              <p>
                Investment research platform 
                <br />
                that offers detailed insights on
                stocks, 
                <br />
                sectors, supply chains, and more.
              </p>
            </a>

            <a href="" className="flex flex-col items-center text-center gap-4">
              <img
                src="./public/media/dittoLogo.png"
                alt=""
                className="w-[60%]"
              />
              <p>
                Personalized advice on life 
                <br />
                and health insurance. No spam 
                <br />
                and no
                mis-selling.
              </p>
            </a>
          </div>
        </div>

        <Link
        to="/Signup"
        className="btn block mx-auto px-6 py-2 mt-8 border-solid border-black rounded-sm bg-[rgb(56,126,209)] text-white text-xl font-inter"
      >
        Sign up for free
      </Link>
      </div>
    </div>
  );
}

export default Universe;
