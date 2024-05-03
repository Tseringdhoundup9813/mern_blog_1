import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
      required: true,
    },
    features: [string],
    limitation: [string],
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const planModel = mongoose.model("plan", planSchema);

export default planModel;
