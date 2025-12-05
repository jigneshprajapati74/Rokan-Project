import React from "react";
import Signup from "../Signup";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <div className="container flex flex-col items-center mt-20">
      <img src="/media/homeHero.png" alt="Hero Image" className="w-[52%]" />

      <h1 className="text-3xl text-center mt-12 mb-4 font-inter">
        Invest in everything
      </h1>

      <p className="text-center text-xl font-inter">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>

      {/* <button className="btn block mx-auto px-6 py-2 mt-8 border-solid border-black rounded-sm bg-[rgb(56,126,209)] text-white text-xl font-inter">
                Sign up for free
            </button> */}
      <Link
        to="/Signup"
        className="btn block mx-auto px-6 py-2 mt-8 border-solid border-black rounded-sm bg-[rgb(56,126,209)] text-white text-xl font-inter"
      >
        Sign up for free
      </Link>
    </div>
  );
}

export default Hero;
