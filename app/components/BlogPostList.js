import FadeInOnLoad from '../components/FadeInOnLoad';
import Link from "next/link";

export default function BlogPostList({ posts, from }) {
    return <>
        {posts.map(post => (
            <Link href={`/blog/${post.slug}${from ? `?from=${encodeURIComponent(from)}` : ""}`} className="blog-post">
                <FadeInOnLoad src={post.img} cls="blog-preview-img" />
                <div className="blog-right">
                    <h1>{post.title}</h1>
                    <time>{new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                    {post.tags && post.tags.length > 0 && (
                        <div className="post-tags">
                            {post.tags.map((tag) => (
                                <Link key={tag} href={`/blog/tagged/${tag}`} className="tag tag-link">{tag}</Link>
                            ))}
                        </div>
                    )}
                    {/* <div dangerouslySetInnerHTML={{ __html: post.previewHtml }} className="blog-preview" /> */}
                </div>
            </Link>
        ))}
    </>
}