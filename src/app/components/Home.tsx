import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import Prices from "./Prices/Prices";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CustomerSupport />
      <Prices />
    </div>
  );
};

export default Home;
