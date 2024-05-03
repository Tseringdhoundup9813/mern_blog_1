import express from "express";
import postModel from "./models/post.model.js";
import connectDb from "./utils/connectDb.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// connect to database;
connectDb();

// Middleware
app.use(express.json()); ///Pass json data

// cors origin
http: app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

// ROUTER
app.post("/api/v1/posts/create", async (req, res, next) => {
  try {
    const postData = req.body;
    const createPost = await postModel.create(req.body);
    res.status(200).json({
      status: "success",
      message: "post created successfully",
      data: createPost,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
});

//
app.get("/api/v1/posts", async (req, res, next) => {
  try {
    const posts = await postModel.find();
    res.json({
      status: "success",
      message: "post fetched successfully",
      data: posts,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
