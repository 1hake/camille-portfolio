import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "./Layout";
import { ScrollableLayout } from "../components/containers/ScrollableLayout";

export const MyRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <ScrollableLayout />
          </Route>
          <Route
            path="/:id"
            render={(props) => (
              <ScrollableLayout id={props.match.params.id}></ScrollableLayout>
            )}
          />
        </Switch>
      </Layout>
    </Router>
  );
};
