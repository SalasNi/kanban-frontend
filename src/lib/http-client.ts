import axios from "axios";

export const HttpClient = axios.create({
  baseURL: "http://localhost:5224",
  headers: {
    "Content-Type": "application/json",
  },
});
