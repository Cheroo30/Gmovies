// client/src/api/tmdb.js
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // Securely store your API key in environment variables
const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Export IMAGE_BASE_URL

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
