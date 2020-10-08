import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { fetchByQuery } from "../../api/tmdbAPI";
import getQueryParams from "../../utils/getQueryParams";
import SearchForm from "../SearchForm/SearchForm";
import Spinner from "../Spinner/Spinner";

class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    const query = getQueryParams(this.props.location.search);
    if (query.query) {
      this.fetchWithQuery(query.query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery && nextQuery.length > 2) {
      this.fetchWithQuery(nextQuery);
    }
  }

  fetchWithQuery = (query) => {
    this.setState({ loading: true });
    fetchByQuery(query)
      .then((data) => {
        this.setState({ movies: data.results });
      })
      .finally(() => this.setState({ loading: false }));
  };

  submitQueryChangedHandler = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading } = this.state;

    const moviesListItems =
      movies.length > 0 &&
      movies.map((movie) => {
        return (
          <li key={movie.id}>
            <NavLink
              to={{
                pathname: `${this.props.match.path}/${movie.id}`,
                state: { from: this.props.location },
              }}
            >
              {movie.title ? movie.title : movie.original_title}
            </NavLink>
          </li>
        );
      });
    return (
      <div>
        <SearchForm onSubmit={this.submitQueryChangedHandler} />
        {loading ? <Spinner /> : <ul>{moviesListItems}</ul>}
      </div>
    );
  }
}

export default MoviesPage;
