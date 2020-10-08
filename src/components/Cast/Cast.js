import React, { Component } from "react";
import { fetchCast } from "../../api/tmdbAPI";
import defaultImg from "../../utils/default-img.png";
import styles from "./cast.module.css";
import Spinner from "../Spinner/Spinner";

class Cast extends Component {
  state = {
    cast: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetchCast(this.props.match.params.movieId)
      .then((data) => this.setState({ cast: data.cast }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { cast, loading } = this.state;

    const castListItems = cast.map(({ id, profile_path, name }) => {
      return (
        <li key={id}>
          <img
            width="140px"
            height="210px"
            src={
              profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg
            }
            alt={name}
          />
          <p>{name}</p>
        </li>
      );
    });
    return loading ? <Spinner /> : <ul className={styles.castList}>{castListItems}</ul>;
  }
}

export default Cast;
