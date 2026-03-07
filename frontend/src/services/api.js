import axios from "axios";

// Hardcode Render backend URL (your live backend)
const API = axios.create({
  baseURL: "https://snack-inventory.onrender.com/snacks", // <-- your backend URL here
});

export const getSnacks = () => API.get("/");
export const addSnack = (data) => API.post("/", data);
export const updateSnack = (id, data) => API.put(`/${id}`, data);
export const deleteSnack = (id) => API.delete(`/${id}`);