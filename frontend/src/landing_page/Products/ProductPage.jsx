import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import PartnerPlatforms from "./PartnerPlatform"

const ProductPage = () => {
  return (
    <>
      <Hero />

      <LeftSection
        img="/products-kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        one="Try demo"
        two="Learn more"
        google="/googleplay.svg"
        app="/appstore.svg"
      />

      <RightSection
        img="/products-console.png"
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        one="Learn more"
      />

      <LeftSection
        img="/products-coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        one="Coin"
        google="/googleplay.svg"
        app="/appstore.svg"
      />

      <RightSection
        img="/landing.svg"
        title="Kite Connect API"
        description="Build powerful trading PartnerPlatforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base."
        one="Kite Connect"
      />

      <LeftSection
        img="/varsity-products.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        one="Try demo"
        two="Learn more"
        google="/googleplay.svg"
        app="/appstore.svg"
      />
      <div className="flex flex-col items-center justify-center mt-40">
      <h2 className ="font-bold text-xl text-zinc-600 mb-4">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h2>

      <h1 className="font-bold text-3xl text-zinc-800 mb-4">The Zerodha Universe</h1>
      <p className="text-2xl text-zinc-600 mt-3">Extend your trading and investment experience even further with our partner PartnerPlatforms</p>
      </div>

    <PartnerPlatforms/>
    </>
  );
};

export default ProductPage;
