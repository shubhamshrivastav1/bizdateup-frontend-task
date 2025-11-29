// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://692b37717615a15ff24f0b1c.mockapi.io",

  headers: { "Content-Type": "application/json" },
});

export default api;
