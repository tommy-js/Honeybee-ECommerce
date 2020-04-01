import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogTimeline from "./BlogTimeline";
import blogs from "../bodyObs/blogs";
import timeline from "../bodyObs/timeline";
import "./blog.css";

function Blog() {
  const [thiskey, setThisKey] = useState(0);
  function setReference(e) {
    console.log(e);
    setThisKey(e);
  }

  return (
    <div class="blog_body">
      <div className="blog_timeline">
        {timeline.map(elements => (
          <BlogTimeline
            published={elements.published}
            reference={elements.reference}
            setReference={setReference}
          />
        ))}
      </div>

      {blogs.map(elements => (
        <BlogCard
          reference={elements.reference}
          checkRef={thiskey}
          title={elements.title}
          imageurl={elements.url}
        />
      ))}
    </div>
  );
}

export default Blog;
