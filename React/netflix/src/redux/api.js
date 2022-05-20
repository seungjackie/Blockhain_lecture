import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
api.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    // console.log("request start", request);
    return request;
  },
  function (error) {
    // Do something with request error
    // console.log("request error", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("get response", response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log("get response error", error);
    return Promise.reject(error);
  }
);

export default api;
