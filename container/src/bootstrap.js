console.log("Domain:", process.env.PRODUCTION_DOMAIN);

import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App />, document.querySelector("#container_root"));
