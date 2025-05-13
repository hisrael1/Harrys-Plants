/// <reference types="vite/client" />
import * as userService from "./user";
const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;
import { Method, Path, Body } from "../types";

const apiFetch = (method: Method, path: Path, body?: Body) => {
  const options: RequestInit = {
    method,
    credentials: "include",
    headers: {
      Authorization: "Bearer " + VITE_API_KEY,
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const sessionToken = userService.getSessionTokenStorage();
  if (sessionToken && options.headers) {
    (options.headers as any)["Capstone-Session"] = sessionToken;
  }

  return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;
