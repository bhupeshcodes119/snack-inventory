import Snack from "../models/Snack.js";

// CREATE
export const createSnack = async (req, res) => {
  try {
    const snack = await Snack.create(req.body);
    res.status(201).json(snack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
export const getAllSnacks = async (req, res) => {
  try {
    const snacks = await Snack.find();
    res.status(200).json(snacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
export const getSnackById = async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.id);
    if (!snack) return res.status(404).json({ message: "Snack not found" });
    res.status(200).json(snack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateSnack = async (req, res) => {
  try {
    const snack = await Snack.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!snack) return res.status(404).json({ message: "Snack not found" });
    res.status(200).json(snack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deleteSnack = async (req, res) => {
  try {
    const snack = await Snack.findByIdAndDelete(req.params.id);
    if (!snack) return res.status(404).json({ message: "Snack not found" });
    res.status(200).json({ message: "Snack deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};