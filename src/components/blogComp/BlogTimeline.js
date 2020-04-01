import React from "react";
import circle from "../../images/circle.png";
import circlefilled from "../../images/circlefilled.png";
import line from "../../images/line.png";

function BlogTimeline(props) {
  const reference = props.reference;
  function checkReference(reference) {
    props.setReference(reference);
  }
  return (
    <div>
      <div
        className="timeline_container"
        onClick={() => checkReference(reference)}
      >
        <div className="timeline_circle">
          <img className="timeline_circle_img" src={circlefilled} />
          <div className="timeline_circle_img white_box"></div>
          <img className="timeline_circle_img" src={circle} />
        </div>
        <div className="blog_timeline_body">{props.published}</div>
      </div>
      <img className="timeline_circle" src={line} />
    </div>
  );
}

export default BlogTimeline;
