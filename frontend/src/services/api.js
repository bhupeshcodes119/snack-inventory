import axios from "axios";

// Hardcode Render backend URL (your live backend)
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const getSnacks = () => API.get("/");
export const addSnack = (data) => API.post("/", data);
export const updateSnack = (id, data) => API.put(`/${id}`, data);
export const deleteSnack = (id) => API.delete(`/${id}`);