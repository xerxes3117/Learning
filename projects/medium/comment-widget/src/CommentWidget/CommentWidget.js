import "./index.scss";
import { useState } from "react";
import Comment from "./Comment";
import { generateNewComment } from "./helper";

function CommentWidget() {
  const [comments, setComments] = useState({});
  const [rootComment, setRootComment] = useState("");

  const addComment = (parentId, newCommentText) => {
    let newComment = null;
    if (parentId) {
      newComment = generateNewComment(newCommentText, parentId);
      setComments((comments) => ({
        ...comments,
        [parentId]: {
          ...comments[parentId],
          childComments: [...comments[parentId].childComments, newComment.id]
        }
      }));
    } else {
      newComment = generateNewComment(newCommentText, null);
    }

    setComments((comments) => ({ ...comments, [newComment.id]: newComment }));
  };

  const deleteComment = (id) => {
    const updatedComments = { ...comments };
    const commentToDelete = updatedComments[id];
    //delete comment from parent
    const pId = commentToDelete.parentCommentId;
    if (pId) {
      updatedComments[pId].childComments = updatedComments[
        pId
      ].childComments.filter((d) => d !== id);
    }

    //delete comment and its children
    [id, ...commentToDelete.childComments].forEach(
      (cid) => delete updatedComments[cid]
    );

    setComments(updatedComments);
  };

  const formatComments = (comment) => {
    return {
      ...comment,
      childComments: (comment?.childComments || [])
        .map((id) => comments[id])
        .map((comment) => formatComments(comment))
    };
  };

  const polishedComments = Object.values(comments)
    .filter((comment) => {
      return !comment.parentCommentId;
    })
    .map(formatComments);

  const onAdd = () => {
    addComment(null, rootComment);
    setRootComment("");
  };

  return (
    <div className="App">
      <header
        style={{ marginBottom: "2rem", fontSize: "2rem", marginLeft: "0" }}
      >
        COMMENT WIDGET
      </header>
      <div className="container">
        <textarea
          type="text"
          value={rootComment}
          onChange={(e) => setRootComment(e.target.value)}
          placeholder="Enter a comment"
          style={{ width: "90%", marginRight: "1rem" }}
        />
        <button className="button primary lg" onClick={onAdd}>
          ADD COMMENT
        </button>
      </div>
      <div style={{ width: "100%" }}>
        {polishedComments.map((comment, key) => {
          return (
            <Comment
              key={key}
              comment={comment}
              addComment={addComment}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CommentWidget;
