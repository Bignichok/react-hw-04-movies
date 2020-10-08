import Axios from "axios";

//To build an image URL, you will need 3 pieces of data. The base_url, size and file_path. Simply combine them all and you will have a fully qualified URL. Here’s an example URL:
//https://image.tmdb.org/t/p/w500/wiAMeTBGB6ENqopAood5U5PY4vK.jpg запрос для картинок

const API_KEY = "eade4640657bb63c2c171ffa3ce711eb";
const BASIC_URL = "https://api.themoviedb.org/3/";

export const fetchTrendingMovies = async () => {
  try {
    const response = await Axios.get(`${BASIC_URL}trending/all/day?api_key=${API_KEY}`);
    return response.data;
  } catch (err) {
    throw new Error(console.log(err));
  }
};
// .then((resp) => resp)
// .then(({ data }) => data)
// .catch((err) => console.log(err));

export const fetchMovieById = (id) => {
  return Axios.get(`${BASIC_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then((resp) => resp)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const fetchByQuery = (query) => {
  return Axios.get(
    `${BASIC_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`
  )
    .then((resp) => resp)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const fetchCast = (id) => {
  return Axios.get(`${BASIC_URL}movie/${id}/credits?api_key=${API_KEY}`)
    .then((resp) => resp)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const fetchReviews = (id) => {
  return Axios.get(
    `${BASIC_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((resp) => resp)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};
