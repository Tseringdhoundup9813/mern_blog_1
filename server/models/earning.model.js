import mongoose from "mongoose";

const earningSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
    amount: {
      type: Number,
      required: true,
    },
    calcaulatedOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const earningModel = mongoose.model("earning", earningSchema);

export default earningModel;
