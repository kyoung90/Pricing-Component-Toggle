import React from "react";
import { PricingCard } from "./PricingCard";

export const PricingContainer = () => {
  return (
    <div>
      <h3>Our Pricing</h3>
      <div>
        <p>Annually</p>
        <div></div>
        <p>Monthly</p>
      </div>
      <PricingCard planName="Basic" price="19.99" storage="500 GB" usersAllowed="2" maxSend="3 GB" />
      <PricingCard planName="Professional" price="24.99" storage="1 TB" usersAllowed="5" maxSend="10 GB"/>
      <PricingCard planName="Master"price="39.99" storage="2 TB" usersAllowed="10" maxSend="20 GB"/>
    </div>
  );
};
