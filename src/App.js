import "./styles.css";
import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Form from "./pages/Form";
import AvailableSkus from "./pages/AvailableSkus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* Data Management Form*/}
          <Route path="/form">
            <Header />
            <Form />
          </Route>

          {/* Table of available SKUs */}
          <Route path="/availableskus">
            <Header />
            <AvailableSkus />
          </Route>

          {/* Home */}
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
