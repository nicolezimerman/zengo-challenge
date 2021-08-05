import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Route path="/" exact component={List} />
      <Route path="/detail/:coin" component={Detail} />
    </Router>
  );
};

export default App;
