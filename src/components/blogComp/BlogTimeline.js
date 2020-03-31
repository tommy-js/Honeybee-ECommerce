import React from "react";
import circle from "../../images/circle.png";
import line from "../../images/line.png";

function BlogTimeline(props) {
  return (
    <div>
      <div className="timeline_container">
        <img className="timeline_circle" src={circle} />
        <div className="blog_timeline_body">{props.published}</div>
      </div>
      <img className="timeline_circle" src={line} />
    </div>
  );
}

export default BlogTimeline;
