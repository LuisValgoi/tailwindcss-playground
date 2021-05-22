import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "@features/Home";
import FirstExample from "@features/FirstExample";
import SecondExample from "@features/SecondExample";

import NavBack from "@components/NavBack";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <>
            <NavBack />
            <Route path="/first" component={FirstExample} exact />
            <Route path="/second" component={SecondExample} exact />
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
}
