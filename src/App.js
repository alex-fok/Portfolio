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
          <Route path="/Portfolio/home" component={Home} />
          <Route path="/Portfolio/more" component={More} />
          <Route path="/Portfolio/*" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
