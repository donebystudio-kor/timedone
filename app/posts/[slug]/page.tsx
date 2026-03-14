import { POSTS, CATEGORIES } from "@/constants/posts";
import Timeline from "@/components/Timeline";
import RelatedPosts from "@/components/RelatedPosts";
import Sidebar from "@/components/Sidebar";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

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

  // 이전/다음 포스트
  const sortedPosts = [...POSTS].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const currentIndex = sortedPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      {/* 포스트 본문 */}
      <article>
        {/* 메타 정보 */}
        <div className="text-xs text-[#999] mb-3">
          {category && (
            <Link
              href={`/category/${category.id}`}
              className="text-[#d64045] hover:underline"
            >
              {category.name}
            </Link>
          )}
        </div>

        {/* 제목 */}
        <h1 className="text-2xl font-bold text-[#2c2c2c] mb-6 leading-tight md:text-3xl">
          {post.title}
        </h1>

        {/* 타임라인 (본문 위) */}
        {post.timeline && post.timeline.length > 0 && (
          <div className="mb-8">
            <Timeline events={post.timeline} />
          </div>
        )}

        {/* 본문 */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* 태그 */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 pt-4 border-t border-[#e8e8e8]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#999] before:content-['#']"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 이전/다음 글 */}
        <div className="mt-10 pt-6 border-t border-[#e8e8e8] grid grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/posts/${prevPost.slug}`}
              className="group"
            >
              <span className="text-xs text-[#999]">이전 글</span>
              <p className="text-sm text-[#555] group-hover:text-[#d64045] leading-snug mt-1">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/posts/${nextPost.slug}`}
              className="group text-right"
            >
              <span className="text-xs text-[#999]">다음 글</span>
              <p className="text-sm text-[#555] group-hover:text-[#d64045] leading-snug mt-1">
                {nextPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* 관련 포스트 */}
        <div className="mt-10">
          <RelatedPosts slugs={post.relatedSlugs} />
        </div>
      </article>

      {/* 사이드바 */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>
    </div>
  );
}
