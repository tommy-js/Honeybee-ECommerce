import React from "react";
import "./blog.css";

function BlogCard(props) {
  return (
    <div className="blog_card">
      <p>{props.title}</p>
    </div>
  );
}

export default BlogCard;
