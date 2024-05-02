import mongoose from "mongoose";

// Schema
const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    description: { type: String },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("category", categorySchema);
export default categoryModel;
// models
