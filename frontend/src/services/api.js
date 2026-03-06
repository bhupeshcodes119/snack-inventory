import axios from "axios";

// Use environment variable for backend URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // <-- Changed from hardcoded URL
});

// API calls
export const getSnacks = () => API.get("/");
export const addSnack = (data) => API.post("/", data);
export const updateSnack = (id, data) => API.put(`/${id}`, data);
export const deleteSnack = (id) => API.delete(`/${id}`);