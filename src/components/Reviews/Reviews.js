import React, { Component } from "react";
import { fetchReviews } from "../../api/tmdbAPI";
import Spinner from "../Spinner/Spinner";

class Reviews extends Component {
  state = {
    reviews: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetchReviews(this.props.match.params.movieId)
      .then((data) => {
        if (data.results) {
          this.setState({ reviews: data.results });
        }
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews, loading } = this.state;

    const reviewsListItems = reviews.map(({ id, author, content, url }) => {
      return (
        <li key={id}>
          <h5>{author}</h5>
          <p>{content}</p>
          <a href={url}>Link for review</a>
        </li>
      );
    });

    return loading ? (
      <Spinner />
    ) : reviews.length ? (
      <ul>{reviewsListItems}</ul>
    ) : (
      <p>this movie has not review</p>
    );
  }
}

export default Reviews;
