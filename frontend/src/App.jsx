import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./App.css";
import CreatePost from "./components/posts/CreatePost";
import PostList from "./components/posts/PostList";
import Home from "./components/home/Home";
import RootLayout from "./components/layout/RootLayout";
import UpdatePosts from "./components/posts/UpdatePosts";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/posts/create" element={<CreatePost />} />
      <Route path="/posts/list" element={<PostList />} />
      <Route path="posts/update/:id" element={<UpdatePosts />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
