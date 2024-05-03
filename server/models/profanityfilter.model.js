import mongoose from "mongoose";

const profanityFilterSchema = new mongoose.Schema(
  {
    bannedWords: [String],
  },
  { timestamps: true }
);

const profanityModel = mongoose.model("profanityfilter", profanityFilterSchema);

export default profanityModel;
