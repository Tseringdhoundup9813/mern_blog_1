import { useState } from "react";

import "./App.css";
import { CreatePost } from "./components/posts/CreatePost";
import PostList from "./components/posts/PostList";

function App() {
  return (
    <>
      <CreatePost />
      <PostList />
    </>
  );
}

export default App;
