import axios from "axios";

//To build an image URL, you will need 3 pieces of data. The base_url, size and file_path. Simply combine them all and you will have a fully qualified URL. Here’s an example URL:
//https://image.tmdb.org/t/p/w500/wiAMeTBGB6ENqopAood5U5PY4vK.jpg запрос для картинок

const API_KEY = "eade4640657bb63c2c171ffa3ce711eb";
const BASE_URL = "https://api.themoviedb.org/3/";

const instance = axios.create({
  baseURL: BASE_URL,
});

const requestHelper = (request) => {
  return request
    .then((resp) => resp)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const getTrendingMovies = () =>
  requestHelper(
    instance.get(`trending/all/day?api_key=${API_KEY}&language=en-US`)
  );

export const getMovieById = (id) =>
  requestHelper(instance.get(`movie/${id}?api_key=${API_KEY}&language=en-US`));

export const getByQuery = (query) =>
  requestHelper(
    instance.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`
    )
  );

export const getCast = (id) =>
  requestHelper(instance.get(`movie/${id}/credits?api_key=${API_KEY}`));

export const getReviews = (id) =>
  requestHelper(
    instance.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
  );
