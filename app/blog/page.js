'use client';

import Navbar from '../components/Navbar';
import FadeInOnLoad from '../components/FadeInOnLoad';

const posts = [
  {
    title: "my first blog post",
    date: "17 february 2026",
    category: "software",
    img: "/images/music/indulgent/indulgentlive.webp",
    url: "/this-is-my-very-first",
    previewHtml: "this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post",
    bodyHtml: "this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think"
  },
  {
    title: "my first blog post",
    date: "17 february 2026",
    category: "software",
    img: "/images/music/indulgent/indulgentlive.webp",
    url: "/this-is-my-very-first",
    previewHtml: "this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post",
    bodyHtml: "this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think"
  },
  {
    title: "my first blog post",
    date: "17 february 2026",
    category: "software",
    img: "/images/music/indulgent/indulgentlive.webp",
    url: "/this-is-my-very-first",
    previewHtml: "this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post",
    bodyHtml: "this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think"
  },
  {
    title: "my first blog post",
    date: "17 february 2026",
    category: "software",
    img: "/images/music/indulgent/indulgentlive.webp",
    url: "/this-is-my-very-first",
    previewHtml: "this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post",
    bodyHtml: "this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think"
  },
  {
    title: "my first blog post",
    date: "17 february 2026",
    category: "software",
    img: "/images/music/indulgent/indulgentlive.webp",
    url: "/this-is-my-very-first",
    previewHtml: "this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post",
    bodyHtml: "this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think this is my very <b>first</b> blog post how does it look wha do you think"
  }
]

export default function Blog() {
  return (
    <div className="page">
      <Navbar activeLink={"BLOG"} />
      <h1 className="title">Blog</h1>
      {posts.map(post => (
        <a className="blog-post" href={post.url}>
          <FadeInOnLoad src={post.img} cls="blog-preview-img"/>
          <div className="blog-right">
            <h1>{post.title}</h1>
            <div>{post.date}</div>
            <div>{post.category}</div>
            <div dangerouslySetInnerHTML={{ __html: post.previewHtml }} className="blog-preview" />
          </div>
        </a>
      ))}
    </div>
  );
}
