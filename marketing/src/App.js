import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";

import { StylesProvider } from "@material-ui/core";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export default function App() {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
}
