import React, { Component } from "react";
import { fetchReviews } from "../../api/tmdbAPI";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    fetchReviews(this.props.match.params.movieId).then((data) => console.log(data));
  }

  render() {
    return <ul></ul>;
  }
}

export default Reviews;
