import http from "./httpServices";
import { apiEndpoint } from "../config.json";

const genresEndpoint = "/genres";

export function getGenres() {
  return http.get(genresEndpoint);
}
