import React from "react";
import MarketingApp from "./components/MarketingApp";

export default function App() {
  console.log("Domain:", process.env.PRODUCTION_DOMAIN);
  return (
    <div className="">
      <h1>hellold</h1>
      <MarketingApp />
    </div>
  );
}
