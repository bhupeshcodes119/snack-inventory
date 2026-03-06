import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "node:dns";
import cors from "cors";
import snackRoutes from "./routes/snackRoutes.js";

dotenv.config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

// CORS setup for your deployed frontend
app.use(cors({
  origin: "https://snack-inventory-1.onrender.com",
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/snacks", snackRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
  });