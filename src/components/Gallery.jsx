import React from "react";
import parse from "html-react-parser";

export default function Gallery({ post }) {
  return (
    <section>
      <h2 className="post-title">{parse(post.title.rendered)}</h2>
      <div className="post-content">{parse(post.content.rendered)}</div>
    </section>
  );
}
