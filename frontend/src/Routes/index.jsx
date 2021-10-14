import React from "react";
import { Switch, Route } from "react-router-dom";

import Blocks from "../modules/blocks";
import Rooms from "../../src/modules/Rooms";

const routes = (props) => (
  <Switch>
    {/* <Route exact path="/">
                <Home />
            </Route> */}
    <Route path="/rooms">
      <Rooms />
    </Route>
    <Route path="/blocks">
      <Blocks />
    </Route>
    {/* <Route path="*">
                <NotFound />
            </Route> */}
  </Switch>
);

export default routes;
