import { Request, Response } from "express";
import { posts } from "../models/posts";

export const getAllPosts = (req: Request, res: Response) => {
  res.send(posts);
};

export const getPostById = (req: Request, res: Response) => {
  const id = +req.params.id;
  const post = posts.find((post) => {
    return post.id === id;
  });
  res.send(post ?? []);
};

export const deletePostById = (req: Request, res: Response) => {
  const id = +req.params.id;
  const postIndex = posts.findIndex((post) => {
    return post.id === id;
  });

  posts.splice(postIndex, 1);
  res.status(200).send();
};

export const addNewPost = (req: Request, res: Response) => {
  const newPost = req.body;
  newPost.id = (posts.at(-1)?.id || 0) + 1;
  posts.push(newPost);
  res.status(201).send(posts);
};

export const updatePost = (req: Request, res: Response) => {
  const id = +req.params.id;
  const updatedPost = req.body;

  const findIndex = posts.findIndex((post) => {
    return post.id === updatedPost?.id;
  });
  posts[findIndex] = updatedPost;
  res.status(200).send(updatedPost);
};

export const partialUpdatePost = (req: Request, res: Response) => {
  const id = +req.params.id;
  const updates = req.body;

  const findIndex = posts.findIndex((post) => post.id === id);

  posts[findIndex] = { ...posts[findIndex], ...updates };
  res.status(200).send(posts[findIndex]);
};
