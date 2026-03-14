"use client";

import { useState } from "react";
import { Post, CATEGORIES } from "@/constants/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

const FEATURED_SLUGS = [
  "cleopatra-pyramid",
  "trex-stegosaurus",
  "guillotine-starwars",
];

export default function HomeClient({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPosts = FEATURED_SLUGS.map((slug) =>
    posts.find((p) => p.slug === slug)
  ).filter(Boolean) as Post[];

  const filteredPosts =
    activeCategory === "all"
      ? sortedPosts
      : sortedPosts.filter((p) => p.category === activeCategory);

  // 랜덤 포스트
  const randomSlug = posts[Math.floor(Math.random() * posts.length)]?.slug;

  return (
    <div>
      {/* 추천 포스트 */}
      <section className="mb-10">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredPosts.map((post) => {
            const cat = CATEGORIES.find((c) => c.id === post.category);
            return (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group border border-[#e8e8e8] p-5 hover:border-[#d64045] transition-colors"
              >
                {cat && (
                  <span className="text-xs text-[#d64045]">{cat.name}</span>
                )}
                <h3 className="text-[15px] font-bold text-[#2c2c2c] group-hover:text-[#d64045] leading-snug mt-1">
                  {post.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 카테고리 탭 + 랜덤 버튼 */}
      <div className="flex items-center justify-between mb-6 border-b border-[#e8e8e8] pb-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
              activeCategory === "all"
                ? "bg-[#2c2c2c] text-white"
                : "bg-[#f5f5f5] text-[#666] hover:bg-[#eee]"
            }`}
          >
            전체 ({posts.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = posts.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[#2c2c2c] text-white"
                    : "bg-[#f5f5f5] text-[#666] hover:bg-[#eee]"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
        <Link
          href={`/posts/${randomSlug}`}
          className="text-xs text-[#999] hover:text-[#d64045] whitespace-nowrap ml-3"
        >
          랜덤 한 편
        </Link>
      </div>

      {/* 포스트 목록 */}
      <div>
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
