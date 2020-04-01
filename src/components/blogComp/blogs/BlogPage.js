import React from "react";
import "../blog.css";
import computer from "../../../images/computer.jpg";

function BlogPage() {
  let mapper = [];
  return (
    <div className="blog_page">
      <h1 className="blog_page_title">Blog</h1>
      <div className="blog_page_image_box">
        <img className="blog_page_image" src={computer} />
      </div>
      <h2 className="blog_page_subheader">This is a small blog post</h2>
      <div className="blog_page_content">
        If it helps, karma is very difficult to make negative, and for most
        people it’s basically a measure of how active you are, and for how long.
        Someone in the millions is probably a karma farmer, in the hundreds of
        thousands probably a heavily active poster and/or commenter, and someone
        in the tens of thousands someone who comments a fair amount but hasn’t
        had many comments go off crazily. The only reason one should be
        concerned about karma is if it is negative after more than their first
        few posts and comments on the site. There is absolutely nothing wrong
        with your karma, and it is representative of a semi-active user of a few
        years. It pretty much always goes up Individual comment’s karma is
        different, but as a whole, a user’s karma is pretty useless as a figure
      </div>
      <div className="blog_page_content">
        Oh, no one was mean to you? Lucky. I started this because the responses
        on /r/dota2 became unbearable. 1,000 is impressive! It usually takes me
        around a year to gather that many. But I guess it might be faster if you
        submit posts a lot (which I don't). I wish there was a leaderboard for
        this kind of thing. :) It would be interesting to see how many unread
        replies everyone has at any given time.
      </div>
    </div>
  );
}

export default BlogPage;
