import { Request, Response } from "express";
import { comments } from "../models/comments";

export const getPostComments = (req: Request, res: Response) => {
  const postId = req.query.postId;

  let searchedComments;
  if (postId) {
    searchedComments = comments.filter((comment) => comment.postId === +postId);
  }
  res.status(200).send(searchedComments);
};
