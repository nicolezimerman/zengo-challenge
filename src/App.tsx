import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Route path="/" exact component={List} />
      <Route path="/detail/:id" component={Detail} />
    </Router>
  );
}

export default App;
