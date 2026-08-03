import { ImageResponse } from "next/og";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export const dynamic = "force-static";
export const alt = "Пост — Максим";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const typeLabel = post.type === "product" ? "Продукт" : "Мнение";
  const dotColor = post.type === "product" ? "#B5502C" : "#8A8072";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F6F3EE",
          color: "#2B2622",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: dotColor,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#8A8072",
            }}
          >
            {typeLabel}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 28,
            color: "#8A8072",
          }}
        >
          Максим
        </div>
      </div>
    ),
    { ...size },
  );
}
