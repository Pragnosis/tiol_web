import axios from "axios";
import { baseUrl } from "./apiConstants";

//DEFINITION OF THE CLIENT CLASS
const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//ADDED INTERCEPTOR FOR CLIETN CLASS
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status == 401) {
      console.log("YOU ARE NOT AUTHORIZED FOR THIS");
    }
    console.error("HAVE ERROR WHILE FETCHING", res.status);
    return Promise.reject(error);
  }
);

export default axiosClient;
