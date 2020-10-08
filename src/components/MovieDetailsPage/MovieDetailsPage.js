import React, { Component } from "react";
import { fetchMovieById } from "../../api/tmdbAPI";
import { NavLink, Route } from "react-router-dom";
import styles from "./MovieDetailsPage.module.css";
import Cast from "../Cast/Cast";
import routes from "../../routes";

class MoviesDetailsPage extends Component {
  state = {
    film: {},
  };

  componentDidMount() {
    fetchMovieById(this.props.match.params.movieId).then((film) =>
      this.setState({ film })
    );
  }

  render() {
    const { film } = this.state;
    const {
      poster_path = "",
      title = "title",
      original_title = "title",
      budget = 0,
      overview = "overview",
      release_date = 0,
      runtime = 0,
      vote_average = 0,
    } = film;
    return (
      <div className={styles.movieDetailsContainer}>
        <div className={styles.filmCard}>
          <h3 className={styles.title}>{title && original_title}</h3>

          <div className={styles.imageWrp}>
            <img width="240px" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
          </div>

          <div className={styles.textContent}>
            <p>
              <span className={styles.smallHeaders}>runtime:</span> {runtime} minutes
            </p>
            <h4 className={styles.smallHeaders}>Overview</h4>
            <p>{overview}</p>
            <p>
              <span className={styles.smallHeaders}>release-date:</span> {release_date}
            </p>
            <p>
              <span className={styles.smallHeaders}>average-vote:</span> {vote_average}
            </p>
            <p>
              <span className={styles.smallHeaders}>budget:</span> {budget} $
            </p>
          </div>
        </div>

        <div>
          <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
        </div>

        <Route path={`${this.props.match.path}/cast`} component={Cast}></Route>
      </div>
    );
  }
}
export default MoviesDetailsPage;
