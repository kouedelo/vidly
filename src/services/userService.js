import http from "./httpServices";
import { apiEndpoint } from "../config.json";

const usersEndpoint = apiEndpoint + "/users";

export function register(user) {
  return http.post(usersEndpoint, {
    name: user.name,
    email: user.username,
    password: user.password,
  });
}
