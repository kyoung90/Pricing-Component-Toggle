import React, { useState } from "react";
import { PricingCard } from "./PricingCard";
import { pricings } from "../../commons/pricingText";

export const PricingContainer = () => {
  const [toggle, setToggle] = useState("monthly");

  const handleClick = () => {
    setToggle(toggle == "monthly" ? "anually" : "monthly");
  };

  return (
    <div className="pricing-container">
      <h1 className="page-title">Our Pricing</h1>
      <div className="toggle-group">
        <p>Annually</p>
        <div className={`toggle toggle-${toggle}`} onClick={handleClick}>
          <div className="toggle-circle"></div>
        </div>
        <p>Monthly</p>
      </div>
      <div className="card-group">
        <PricingCard
          planName={pricings[toggle]["basic"]["planName"]}
          price={pricings[toggle]["basic"]["price"]}
          storage={pricings[toggle]["basic"]["storage"]}
          usersAllowed={pricings[toggle]["basic"]["usersAllowed"]}
          maxSend={pricings[toggle]["basic"]["maxSend"]}
          border={pricings[toggle]["basic"]["border"]}
        />
        <PricingCard
          planName={pricings[toggle]["professional"]["planName"]}
          price={pricings[toggle]["professional"]["price"]}
          storage={pricings[toggle]["professional"]["storage"]}
          usersAllowed={pricings[toggle]["professional"]["usersAllowed"]}
          maxSend={pricings[toggle]["professional"]["maxSend"]}
          border={pricings[toggle]["professional"]["border"]}
          invert="invert"
        />
        <PricingCard
          planName={pricings[toggle]["master"]["planName"]}
          price={pricings[toggle]["master"]["price"]}
          storage={pricings[toggle]["master"]["storage"]}
          usersAllowed={pricings[toggle]["master"]["usersAllowed"]}
          maxSend={pricings[toggle]["master"]["maxSend"]}
          border={pricings[toggle]["master"]["border"]}
        />
      </div>
    </div>
  );
};
