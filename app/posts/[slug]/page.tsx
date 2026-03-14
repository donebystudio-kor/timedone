import { POSTS, CATEGORIES } from "@/constants/posts";
import Timeline from "@/components/Timeline";
import RelatedPosts from "@/components/RelatedPosts";
import Sidebar from "@/components/Sidebar";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} — 타임던`,
    description: post.summary,
    openGraph: {
      title: `${post.title} — 타임던`,
      description: post.summary,
      type: "article",
      siteName: "타임던",
      locale: "ko_KR",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const category = CATEGORIES.find((c) => c.id === post.category);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* 포스트 본문 */}
      <article className="lg:col-span-2">
        {/* 카테고리 배지 + 날짜 */}
        <div className="mb-4 flex items-center gap-3">
          {category && (
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {category.emoji} {category.name}
            </span>
          )}
          <time className="text-sm text-muted">{post.date}</time>
        </div>

        {/* 제목 */}
        <h1 className="mb-6 text-2xl font-bold text-primary md:text-3xl leading-tight">
          {post.title}
        </h1>

        {/* 본문 */}
        <div
          className="post-content rounded-lg bg-card p-6 shadow-sm md:p-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* 타임라인 */}
        {post.timeline && post.timeline.length > 0 && (
          <div className="mt-8">
            <Timeline events={post.timeline} />
          </div>
        )}

        {/* 관련 포스트 */}
        <div className="mt-10">
          <RelatedPosts slugs={post.relatedSlugs} />
        </div>
      </article>

      {/* 사이드바 */}
      <div>
        <Sidebar />
      </div>
    </div>
  );
}
