import React, { useState, useRef } from "react";
import "./blog.css";
import heart from "../../images/heart.png";
import heartfull from "../../images/heartfilled.png";
import twitter from "../../images/twitter.png";
import twitterfull from "../../images/twitterfilled.png";
import fbook from "../../images/fbook.png";
import fbookfull from "../../images/fbookfilled.png";
import bookmark from "../../images/bookmark.png";
import bookmarkfull from "../../images/bookmarkfilled.png";

function BlogCard(props) {
  const newimg = props.imageurl;
  const reference = props.reference;
  const checkRef = props.checkRef;
  const refthis = useRef(null);
  if (reference === checkRef) {
    window.scrollTo(0, refthis.current.offsetTop);
  }
  return (
    <div ref={refthis} className="blog_card">
      <div className="blog_image">
        <img className="blog_image_encloser" src={newimg} />
      </div>
      <div className="blog_info">
        <p className="blog_title">{props.title}</p>
        <div className="image_block">
          <img className="blog_icon" src={heartfull} />
          <div className="image_backdrop"></div>
          <img className="blog_icon" src={heart} />
        </div>
        <div className="image_block">
          <img className="blog_icon" src={bookmarkfull} />
          <div className="image_backdrop"></div>
          <img className="blog_icon" src={bookmark} />
        </div>
        <br />
        <div className="image_block">
          <img className="blog_icon" src={twitterfull} />
          <div className="image_backdrop"></div>
          <img className="blog_icon" src={twitter} />
        </div>
        <div className="image_block">
          <img className="blog_icon" src={fbookfull} />
          <div className="image_backdrop"></div>
          <img className="blog_icon" src={fbook} />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
