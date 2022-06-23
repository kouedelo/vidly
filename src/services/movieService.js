import http from "./httpServices";
import { apiEndpoint } from "../config.json";

const moviesEndpoint = apiEndpoint + "/movies";

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(moviesEndpoint + "/" + movieId);
}
