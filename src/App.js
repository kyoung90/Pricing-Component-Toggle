import React from "react";
import "./App.css";
import { PricingContainer } from "./features/pricing/PricingContainer";

function App() {
  return (
    <div className="app">
      <PricingContainer />

      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.instagram.com/gabart_designs/" target="_blank">
          GABArt_Designs
        </a>{" "}
        and{" "}
        <a href="https://www.kenneth-young.com" target="_blank">
          Kenneth Young
        </a>
        .
      </div>
    </div>
  );
}

export default App;
