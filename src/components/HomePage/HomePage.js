import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { fetchTrendingMovies } from "../../api/tmdbAPI";
import routes from "../../routes";

class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetchTrendingMovies().then((data) => {
      this.setState({ films: data.results });
    });
  }

  render() {
    const { films } = this.state;

    const filmListItems = films.map((film) => {
      return (
        <li key={film.id}>
          <NavLink to={`${routes.movies}/${film.id}`}>
            {film.title ? film.title : film.original_name}
          </NavLink>
        </li>
      );
    });
    return (
      <div>
        <h2>Trending this week</h2>
        <ul>{filmListItems}</ul>
      </div>
    );
  }
}

export default HomePage;
