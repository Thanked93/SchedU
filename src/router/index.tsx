import React from "react";
import { BrowserRouter as Routing, Route, Switch } from "react-router-dom";
import { Home, Login, Register, DashBoard } from "../pages";

const Router = () => {
  return (
    <Routing>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={DashBoard} />
      </Switch>
    </Routing>
  );
};

export default Router;
