import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./Pages/Home";


import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
