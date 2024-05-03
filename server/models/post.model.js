import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: Object,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    nextEarningDate: {
      type: Date,
      default: () =>
        new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
    },
    thisMonthEarnings: {
      type: Number,
      default: 0,
    },
    totalEarning: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    viewCount: { type: Number, default: 0 },
    likes: [{ type: mongoose.Schema.Types.ObjectId }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId }],
    viewers: [{ type: mongoose.Schema.Types.ObjectId }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    isBlocked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const postModel = mongoose.model("post", postSchema);

export default postModel;
