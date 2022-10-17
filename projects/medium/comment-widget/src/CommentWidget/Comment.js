import { useState } from "react";

const Comment = ({ comment, addComment, deleteComment }) => {
  const { commentText, childComments, id } = comment;
  const [childComment, setChildComment] = useState("");
  const [showInput, setShowInput] = useState(false);

  const onAdd = () => {
    addComment(id, childComment);
    setChildComment("");
    setShowInput(false);
  };

  const onDelete = () => {
    deleteComment(id);
    setShowInput(false);
  };

  const handleKeyDown = function (e) {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div className="comment">
      <div className="content">{commentText}</div>
      {showInput ? (
        <div style={{ display: "block" }}>
          <textarea
            type="text"
            value={childComment}
            onChange={(e) => setChildComment(e.target.value)}
            placeholder="Enter your reply"
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        <div div style={{ display: "inline-block" }}>
          <button
            className="button primary md"
            onClick={() => setShowInput(true)}
          >
            REPLY
          </button>
          <button className="button secondary md" onClick={onDelete}>
            DELETE
          </button>
        </div>
      )}
      {childComments.map((childCommentEl, key) => {
        return (
          <Comment
            key={key}
            comment={childCommentEl}
            addComment={addComment}
            deleteComment={deleteComment}
          />
        );
      })}
    </div>
  );
};

export default Comment;
