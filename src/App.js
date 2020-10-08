import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import MoviesDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MoviesDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
