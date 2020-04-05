import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PricingContainer } from "./features/pricing/PricingContainer";

function App() {
  return (
    <div className="App">
           
      <PricingContainer/>
      
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
    //   <style>
    //   .attribution { font-size: 11px; text-align: center; }
    //   .attribution a { color: hsl(228, 45%, 44%); }
    // </style>
  );
}

export default App;
