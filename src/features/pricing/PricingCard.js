import React from "react";

export const PricingCard = (props) => {
  return (
    <div className={`card ${props.border ? props.border : ''} ${props.invert ? props.invert : ''}`}>
      <h4>{props.planName}</h4>
      <h2 className="header-price">
        $<span>{props.price}</span>
      </h2>
      <div className="card-content">
        <hr />
        <p>{props.storage} Storage</p>
        <hr />
        <p>{props.usersAllowed} Users Allowed</p>
        <hr />
        <p>Send up to {props.maxSend}</p>
        <hr />
        <input type="submit" value="LEARN MORE" className="learn-more-button" />
      </div>
    </div>
  );
};
