import Link from "next/link";
import BackLink from "../../../components/BackLink";
import Navbar from "../../../components/Navbar";
import BlogPostList from "../../../components/BlogPostList";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

async function getPostsByTag(tag) {
    const res = await fetch(`${API_URL}/api/posts/by-tag/${encodeURIComponent(tag)}`);
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
}

export async function generateStaticParams() {
    const res = await fetch(`${API_URL}/api/posts`);
    if (!res.ok) return [];
    const { posts } = await res.json();
    const tags = [...new Set(posts.flatMap((p) => p.tags ?? []))];
    return tags.map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }) {
    const { tag } = await params;
    return { title: `Posts tagged "${tag}"` };
}

export default async function TagPage({ params }) {
    const { tag } = await params;
    const { posts } = await getPostsByTag(tag);

    return (
        <main className="page blog">
            <Navbar activeLink={"BLOG"} />
            <BackLink />
            <h1 className="title">Posts tagged &ldquo;{decodeURIComponent(tag)}&rdquo;</h1>
            <BlogPostList posts={posts} from={decodeURIComponent(tag)} />
        </main>
    );
}
