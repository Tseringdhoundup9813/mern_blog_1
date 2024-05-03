import express from "express";
import postModel from "./models/post.model.js";
import connectDb from "./utils/connectDb.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// connect to database;
connectDb();

// Middleware
app.use(express.json()); ///Pass json data

// ROUTER
app.post("/api/v1/post/create", async (req, res, next) => {
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

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
