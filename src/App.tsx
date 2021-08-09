import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Route path="/" exact component={List} />
      <Route path="/detail/:coin" component={Detail} />
      <Redirect to="/" />
    </Router>
  );
};

export default App;
