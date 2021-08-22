import {useState} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Advice from "./Pages/Advice";
import Affirmations from "./Pages/Affirmations"
import Activities from "./Pages/Activities";
import Sentiment from "./Pages/Sentiment";


import Header from "./Components/Header";



function App() {

  const [user, setUser] = useState(null)

  const storeName = (userName) =>{
    setUser(userName)
  }
 
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home storeName={storeName} />
            </Route>
            <Route exact path="/sentiment">
              <Sentiment user={user}/>
            </Route>
            <Route exact path="/affirmations">
              <Affirmations />
            </Route>
            <Route exact path="/advices">
              <Advice />
            </Route>
            <Route exact path="/activities">
              <Activities />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
