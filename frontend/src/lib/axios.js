import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:3000" 
  : "https://chat-project-lend.onrender.com";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});