import axios from "axios";
import { baseUrl } from "./apiConstants";

//DEFINITION OF THE CLIENT CLASS
const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  },

});

//ADDED INTERCEPTOR FOR CLIETN CLASS
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
