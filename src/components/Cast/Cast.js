import React, { Component } from "react";
import { fetchCast } from "../../api/tmdbAPI";
import defaultImg from "../../utils/default-img.png";
import styles from "./cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    fetchCast(this.props.match.params.movieId).then((data) =>
      this.setState({ cast: data.cast })
    );
  }

  render() {
    const castListItems = this.state.cast.map(({ id, profile_path, name }) => {
      return (
        <li key={id}>
          <img
            width="140px"
            src={
              profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg
            }
            alt={name}
          />
          <p>{name}</p>
        </li>
      );
    });
    return <ul className={styles.castList}>{castListItems}</ul>;
  }
}

export default Cast;
