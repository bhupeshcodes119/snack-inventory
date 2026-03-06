import axios from "axios";

const API = axios.create({
  baseURL: "https://snack-inventory-backend.onrender.com/snacks"
});

export const getSnacks = () => API.get("/");
export const addSnack = (data) => API.post("/", data);
export const updateSnack = (id, data) => API.put(`/${id}`, data);
export const deleteSnack = (id) => API.delete(`/${id}`);