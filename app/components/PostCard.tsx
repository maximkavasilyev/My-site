import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import PostTypeTag from "./PostTypeTag";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-2xl border border-border bg-surface p-8 transition hover:-translate-y-0.5 hover:border-foreground"
    >
      <PostTypeTag type={post.type} />
      <p className="mt-4 text-h3 font-semibold leading-snug">{post.title}</p>
      <p className="mt-3 text-body text-muted">{post.summary}</p>
    </Link>
  );
}
