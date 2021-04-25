import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Links } from "../components/Links";
import LinksForm from "../components/LinksForm";
import { Layout } from "./Layout";
import { ScrollableLayout } from "../components/ScrollableLayout";

export const MyRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/list">
            <Links />
          </Route>
          <Route path="/create">
            <LinksForm />
          </Route>
          <Route path="/">
            <ScrollableLayout />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
