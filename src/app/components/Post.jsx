import React from "react";

const Post = ({ post }) => {
  return (
    <div className="border p-4">
      <h2 className="text-red-400 pb-3">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
