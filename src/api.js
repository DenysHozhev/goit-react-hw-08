import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const escAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export default axios;
