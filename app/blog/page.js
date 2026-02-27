import Navbar from '../components/Navbar';
import FadeInOnLoad from '../components/FadeInOnLoad';
import BlogPostList from '../components/BlogPostList';
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

async function getPosts() {
  const res = await fetch(`${API_URL}/api/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function Blog() {

  const { posts, pagination } = await getPosts();
  return (
    <div className="page">
      <Navbar activeLink={"BLOG"} />
      <h1 className="title">Blog</h1>
      <BlogPostList posts={posts}/>
    </div>
  );
}
