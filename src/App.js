import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import More from "./pages/More";
import Navigator from './components/Navigator';

function App() {
  return (
    <Router>
      <div>
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/more" component={More} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
