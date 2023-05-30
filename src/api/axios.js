import axios from "axios";

import { BACKEND_URL } from "../config/env";
import { getAccessToken } from "../utils/localstorage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
