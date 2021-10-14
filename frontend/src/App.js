import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Blocks from "./modules/blocks";
import Rooms from "./modules/rooms";

function App() {
  return (

    <Layout>
      <Switch>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/blocks">
          <Blocks />
        </Route>
        <Route path="/account">
          <Blocks />
        </Route>
        <Route path="/logout">
          <Blocks />
        </Route>
      </Switch>
    </Layout>

  );
}

export default App;
