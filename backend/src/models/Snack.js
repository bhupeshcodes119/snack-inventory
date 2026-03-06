import mongoose from "mongoose";

const snackSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  productType: { type: String, required: true },
  tasteType: { type: String, required: true },
  requiresRefrigeration: { type: Boolean, required: true }
});

export default mongoose.model("Snack", snackSchema);