import Landing from "./components/Landing";
import NavBar from "./components/header/NavBar";
import AddGame from "./components/AddGame";
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home";
import GameInfo from "./components/GameInfo";
import LogIn from "./components/LogIn";

function App() {
  return (

    <div className="App">

      <Switch>
        {/*This switch works only to show the landing page*/}
        <Route
          exact path="/"
          component={Landing}
        />
      </Switch>

      {/* This Switch contains a nested route so the NavBar renders in every page but "/" */}
      <Switch>
        <Route path="/:subPage">
          <NavBar/>
          <Route
            path="/home"
            render={() => <Home />}
          />
          <Route
            path="/addGame"
            render={() => <AddGame />}
          />
          <Route
            path="/game/:gameTitle"
            render={()=> <GameInfo/>}
          />
          <Route
            path="/log-in"
            render={()=> <LogIn/> }
          />
          <Route
            path="/sign-in"
            render={()=> <GameInfo/>}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
