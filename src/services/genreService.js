import http from "./httpServices";
import { apiEndpoint } from "../config.json";

const genresEndpoint = apiEndpoint + "/genres";

export function getGenres() {
  return http.get(genresEndpoint);
}
