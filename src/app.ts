import express, { Request, Response } from "express";
import cors from "cors";
import {
  addNewPost,
  deletePostById,
  getAllPosts,
  getPostById,
  partialUpdatePost,
  updatePost,
} from "./controllers/posts";
import { getPostComments } from "./controllers/comments";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/comments", getPostComments);

app.get("/posts", getAllPosts);

app.get("/posts/:id", getPostById);

app.post("/posts", addNewPost);

app.put("/posts/:id", updatePost);

app.patch("/posts/:id", partialUpdatePost);

app.delete("/posts/:id", deletePostById);

app.listen(3000, () => {
  console.log("start");
});
