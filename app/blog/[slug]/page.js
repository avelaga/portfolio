import Link from "next/link";
import Navbar from "../../components/Navbar";
import BackLink from "../../components/BackLink";
import FadeInOnLoad from "../../components/FadeInOnLoad";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

async function getPost(slug) {
    const res = await fetch(`${API_URL}/api/posts/by-slug/${slug}`);
    if (!res.ok) throw new Error("Post not found");
    return res.json();
}

export async function generateStaticParams() {
    const res = await fetch(`${API_URL}/api/posts`);
    if (!res.ok) return [];
    const { posts } = await res.json();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    try {
        const { slug } = await params;
        const post = await getPost(slug);
        return {
            title: `Abhi Velaga - ${post.title}`,
            description: post.meta_description || undefined,
            openGraph: {
                title: `Abhi Velaga - ${post.title}`,
                description: post.meta_description || undefined,
                images: post.og_image ? [post.og_image] : undefined,
            },
        };
    } catch {
        return { title: "Post not found" };
    }
}

export default async function PostPage({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);

    return (
        <main className="page blog">
            <Navbar activeLink={"BLOG"} />
            <BackLink />
            {/* <article className="blog-post"> */}
            <h1 className="title">{post.title}</h1>
            <div className="section-subtitle blog">
                <time>
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
                {post.tags && post.tags.length > 0 && (
                    <div className="post-tags">
                        {post.tags.map((tag) => (
                            <Link key={tag} href={`/blog/tagged/${tag}`} className="tag tag-link">{tag}</Link>
                        ))}
                    </div>
                )}
            </div>
            <FadeInOnLoad src={post.og_image} cls="blog-img" />
            <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {/* </article> */}
        </main>
    );
}