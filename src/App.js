import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

// components
import Home from "./components/screens/Home"
import WatchVideo from "./components/screens/WatchVideo"
import SearchResult from "./components/screens/SearchResult"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/query=:value" component={SearchResult} exact />
        <Route render={({ location }) => {
            let params = new URLSearchParams(location.search);
            return <WatchVideo id={params.get("v")} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
