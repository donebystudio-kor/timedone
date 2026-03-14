import { POSTS, CATEGORIES } from "@/constants/posts";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ id: cat.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const category = CATEGORIES.find((c) => c.id === id);
  if (!category) return {};

  return {
    title: `${category.emoji} ${category.name} — 타임던`,
    description: `타임던의 ${category.name} 카테고리 글 모음. 역사 속 시간의 틈새를 들여다보세요.`,
    openGraph: {
      title: `${category.emoji} ${category.name} — 타임던`,
      description: `타임던의 ${category.name} 카테고리 글 모음.`,
      type: "website",
      siteName: "타임던",
      locale: "ko_KR",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const category = CATEGORIES.find((c) => c.id === id);

  if (!category) notFound();

  const categoryPosts = POSTS.filter((p) => p.category === id).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* 카테고리 헤더 */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-primary md:text-3xl">
          {category.emoji} {category.name}
        </h1>
        <p className="mt-2 text-muted">
          {categoryPosts.length}개의 글이 있습니다.
        </p>
      </section>

      {/* 2컬럼 레이아웃 */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {categoryPosts.length > 0 ? (
            categoryPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-muted">아직 작성된 글이 없습니다.</p>
          )}
        </div>

        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
