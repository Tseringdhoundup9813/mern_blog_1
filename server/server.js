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
// GET single app
app.get("/api/v1/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleData = await postModel.findById(id);
    res.status(200).json({
      status: "success",
      message: "succesully fetch data",
      data: singleData,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
});

// update post
app.put("/api/v1/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const postFound = await postModel.findById(id);
    if (!postFound) {
      throw new Error("Post not found");
    }
    // update
    const updatedData = await postModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message: "successfully updated post",
      data: updatedData,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
});

app.delete("/api/v1/posts/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await postModel.findByIdAndDelete(id);
    console.log(deletePost);
    res.status(204).json({
      status: "success",
      message: "successfully deleted posts",
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
