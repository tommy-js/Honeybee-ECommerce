import React from "react";
import BlogCard from "./BlogCard";
import blogs from "../bodyObs/blogs";
import "./blog.css";

function Blog() {
  return (
    <div class="blog_body">
      {blogs.map(elements => (
        <BlogCard title={elements.title} />
      ))}
    </div>
  );
}

export default Blog;
