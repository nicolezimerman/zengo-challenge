import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Route path="/zengo-challenge" exact component={List} />
      <Route path="/zengo-challenge/detail/:coin" component={Detail} />
    </Router>
  );
};

export default App;
