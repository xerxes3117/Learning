import { v4 as getUUID } from "uuid";

export const generateNewComment = (text, parentCommentId) => {
  return {
    id: getUUID(),
    commentText: text,
    childComments: [],
    parentCommentId
  };
};
