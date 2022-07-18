import axios from "axios";
const api = "https://reactnd-books-api.udacity.com";
let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);
const headers = {
  Authorization: token,
};

const instance = axios.create({
  baseURL: api,
  timeout: 1000,
  headers,
});

export default instance;
