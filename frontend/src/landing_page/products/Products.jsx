import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function Products() {
  return (
    <h1>
      <Hero />
      <LeftSection
        imageURL="./public/media/kite.png"
        parameter="Rokan"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Roakn experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        trydemoName="Try Demo"
        learnmoreName="Learn More"
      />
      <RightSection
        imageURL="./public/media/console.png"
        parameter="Console"
        productDesription="The central dashboard for your Rokan account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link=""
        linkName="Learn more"
      />
      <LeftSection
        imageURL="./public/media/coin.png"
        parameter="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        trydemoName="Coin"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="./public/media/kiteconnect.png"
        parameter="Rokan Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link=""
        linkName="Rokan Connect"
      />
      <LeftSection
        imageURL="./public/media/varsity.png"
        parameter="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay=""
        appStore=""
      />
      <Universe />
    </h1>
  );
}

export default Products;
