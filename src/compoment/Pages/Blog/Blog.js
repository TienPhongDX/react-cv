import React from "react";
import Post from "./Post";

function Blog() {
  return (
    <div className="box box-content">
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">Blog</h1>
      </div>
      <div className="news-grid">
        <Post />
      </div>
    </div>
  );
}

export default Blog;
