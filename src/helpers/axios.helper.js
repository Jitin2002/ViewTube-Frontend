import axios from "axios";
// import { loadProgressBar } from "axios-progress-bar";
// import "axios-progress-bar/dist/nprogress.css";
// import { BASE_URL } from "../constants";
const baseURL = "https://viewtube-backend-wec6.onrender.com/api/v1";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // Ensure credentials like cookies are sent
});

