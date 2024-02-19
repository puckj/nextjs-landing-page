import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import Prices from "./Prices/Prices";
import SupportTeam from "./SupportTeam/SupportTeam";
import Company from "./Company/Company";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CustomerSupport />
      <Prices />
      <SupportTeam />
      <Company />
    </div>
  );
};

export default Home;
