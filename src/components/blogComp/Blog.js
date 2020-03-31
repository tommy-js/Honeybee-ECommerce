import React from "react";
import BlogCard from "./BlogCard";
import BlogTimeline from "./BlogTimeline";
import blogs from "../bodyObs/blogs";
import timeline from "../bodyObs/timeline";
import "./blog.css";

function Blog() {
  return (
    <div class="blog_body">
      <div className="blog_timeline">
        {timeline.map(elements => (
          <BlogTimeline published={elements.published} />
        ))}
      </div>

      {blogs.map(elements => (
        <BlogCard title={elements.title} />
      ))}
    </div>
  );
}

export default Blog;
