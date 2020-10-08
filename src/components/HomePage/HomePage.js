import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { fetchTrendingMovies } from "../../api/tmdbAPI";
import routes from "../../routes";
import Spinner from "../Spinner/Spinner";

class HomePage extends Component {
  state = {
    films: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetchTrendingMovies()
      .then((data) => {
        this.setState({ films: data.results });
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { films, loading } = this.state;

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
        {loading ? <Spinner /> : <ul>{filmListItems}</ul>}
      </div>
    );
  }
}

export default HomePage;
