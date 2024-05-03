import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      required: false,
    },
    authMethod: {
      type: String,
      enum: ["google", "local", "facebook", "github"],
      required: true,
      default: "local",
    },
    passwordResetToken: {
      type: String,
      default: null,
    },
    accountVerificationToken: {
      type: String,
      default: null,
    },
    accountVerificationExpires: {
      type: Date,
      default: null,
    },
    passwordResetExpires: {
      type: Date,
      default: null,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
    totalEarning: { type: Number, default: 0 },
    nextEarningDate: {
      type: Date,
      default: () =>
        new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
    },
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "plan",
    },
    isEmailVerfied: {
      type: Boolean,
      default: false,
    },
    payments: [{ type: mongoose.Schema.Types.ObjectId, ref: "payment" }],
    hasSelectedPlan: { type: Boolean, default: false },
    lastLogin: { type: Date, default: Date.now },

    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    follwing: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
