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
    title: `${category.name} — 타임던`,
    description: `타임던의 ${category.name} 카테고리 글 모음. 역사 속 시간의 틈새를 들여다보세요.`,
    openGraph: {
      title: `${category.name} — 타임던`,
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
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      <div>
        {/* 카테고리 헤더 */}
        <div className="pb-4 mb-2 border-b border-[#e8e8e8]">
          <h1 className="text-xl font-bold text-[#2c2c2c]">
            {category.name}
          </h1>
          <p className="text-sm text-[#999] mt-1">
            {category.description} &middot; {categoryPosts.length}개의 글
          </p>
        </div>

        {categoryPosts.length > 0 ? (
          categoryPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))
        ) : (
          <p className="text-[#999] py-8">아직 작성된 글이 없습니다.</p>
        )}
      </div>

      <aside className="hidden lg:block">
        <Sidebar />
      </aside>
    </div>
  );
}
