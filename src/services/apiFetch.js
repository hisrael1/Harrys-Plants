import * as userService from './user';
const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

const apiFetch = (method, path, body = null) => {
  console.log('API URL:', VITE_API_BASE_URL + path);
  console.log('Environment:', import.meta.env);
  
  const options = {
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
  if (sessionToken) {
    options.headers['Capstone-Session'] = sessionToken;
  }

  return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;
