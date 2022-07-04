import http from "./httpServices";
import { apiEndpoint } from "../config.json";

const moviesEndpoint = "/movies";

function movieUrl(movieId) {
  return `${moviesEndpoint}/${movieId}`;
}

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(moviesEndpoint, movie);
}
