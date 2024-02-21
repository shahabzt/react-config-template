import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

// Create an instance of Axios with a base URL
const axiosInstance = axios.create({
  baseURL: "",
});

// Add a request interceptor to add the Bearer token to the request headers
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token expiration and refresh the token
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401 && !error.config.__isRetryRequest) {
      error.config.__isRetryRequest = true;
      try {
        // Call your function to refresh the token
        window.location.href = "/";
        // Retry the original request with the new token
        return axiosInstance(error.config);
      } catch (refreshError) {
        // Handle the token refresh error
        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Define a function to make HTTP requests using the axiosInstance
export const http = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const { data } = await axiosInstance(config);
  return data;
};

export default axiosInstance;
