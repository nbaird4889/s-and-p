import './App.css';

import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main"
import Dashboard from "./pages/Dashboard"
import Stocks from "./pages/Stocks"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route 
      path="/stocks/:symbol"
      render={(routerProps) => <Stocks {...routerProps} />}
      />
      </Switch>
    </div>
  );
}

export default App;
