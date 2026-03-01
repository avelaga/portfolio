import Navbar from '../components/Navbar';
import BlogPostList from '../components/BlogPostList';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

async function getPosts() {
  const res = await fetch(`${API_URL}/api/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export const metadata = {
  title: 'Abhi Velaga - Blog',
  openGraph: {
    title: 'Abhi Velaga - Blog',
  },
};

export default async function Blog() {

  const { posts } = await getPosts();
  return (
    <div className="page blog">
      <Navbar activeLink={"BLOG"} />
      <h1 className="title">Blog</h1>
      <BlogPostList posts={posts}/>
    </div>
  );
}
