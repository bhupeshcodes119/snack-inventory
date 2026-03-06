import express from "express";
import Snack from "../models/Snack.js";

const router = express.Router();

/* CREATE */
router.post("/", async (req, res) => {
  try {
    const snack = await Snack.create(req.body);
    res.status(201).json(snack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* READ ALL */
router.get("/", async (req, res) => {
  try {
    const snacks = await Snack.find();
    res.json(snacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* READ ONE */
router.get("/:id", async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.id);
    if (!snack) return res.status(404).json({ message: "Not found" });
    res.json(snack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* UPDATE */
router.put("/:id", async (req, res) => {
  try {
    const snack = await Snack.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(snack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* DELETE */
router.delete("/:id", async (req, res) => {
  try {
    await Snack.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;