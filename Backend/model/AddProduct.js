import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,

    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// 🟢 Force index creation
ProductSchema.index({ email: 1 }, { unique: true });

export const Product = mongoose.model("Product", ProductSchema);
