import React, { lazy } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
const LockPage = lazy(() => import("../components/lock"));
const DesktopPage = lazy(() => import("../components/desktop"));
const CallPage = lazy(() => import("../components/call"));
const PlayPage = lazy(() => import("../components/play"));

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={LockPage} />
      <Route exact path="/desktop" component={DesktopPage} />
      <Route exact path="/call" component={CallPage} />
      <Route exact path="/call" component={CallPage} />
      <Route exact path="/play" component={PlayPage} />
    </Switch>
  </HashRouter>
);

export default Router;
