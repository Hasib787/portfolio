import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
