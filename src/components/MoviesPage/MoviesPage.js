import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { fetchByQuery } from "../../api/tmdbAPI";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery && nextQuery.length > 2) {
      this.fetchWithQuery(nextQuery);
    }
  }

  fetchWithQuery = (query) => {
    fetchByQuery(query).then((data) => {
      this.setState({ movies: data.results });
    });
  };

  changeHandler = (e) => {
    const value = e.target.value;
    this.setState({ searchQuery: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: "" });
  };

  render() {
    const { movies } = this.state;

    const moviesListItems =
      movies.length > 0 &&
      movies.map((movie) => {
        return (
          <li key={movie.id}>
            <NavLink to={`${this.props.match.path}/${movie.id}`}>
              {movie.title ? movie.title : movie.original_title}
            </NavLink>
          </li>
        );
      });
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={this.changeHandler}
          ></input>
          <button type="submit">Search</button>
        </form>
        <ul>{moviesListItems}</ul>
      </div>
    );
  }
}

export default MoviesPage;
