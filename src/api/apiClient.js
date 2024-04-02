import axios from "axios";

const apiClient = ({ method, url, data }) => {
  return new Promise((resolve, reject) => {
    function createApi() {
      const api = axios.create({
        baseURL: "http://localhost:3000",
        headers: {
          "Content-Type": "application/json",
        },
      });
      api.interceptors.request.use(
        async (config) => {
          const bearerToken = localStorage.getItem("accessToken");
          config.headers.authorization = `bearer ${bearerToken}`;
          return config;
        },
        (error) => {
          return reject(error);
        }
      );

      api.interceptors.response.use(
        (response) => {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return resolve(response);
        },
        (error) => {
          console.log({ error });
          if (error.response.status === 401) {
            localStorage.clear();
            // window.location.pathname = "/login";
          }
        }
      );

      return api;
    }
    createApi()[`${method}`](url, data);
  });
};
export default apiClient;
