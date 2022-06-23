import http from "./httpServices";
import config from "../config.json";

const genreEndpoint = "/genres";

export function getGenres() {
  return http.get(config.apiEndpoint + genreEndpoint);
}
