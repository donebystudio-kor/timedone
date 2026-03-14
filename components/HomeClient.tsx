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

const POSTS_PER_PAGE = 10;

export default function HomeClient({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState(1);

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPosts = FEATURED_SLUGS.map((slug) =>
    posts.find((p) => p.slug === slug)
  ).filter(Boolean) as Post[];

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const pagedPosts = sortedPosts.slice(0, page * POSTS_PER_PAGE);
  const hasMore = page < totalPages;

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

      {/* 구분선 */}
      <div className="mb-6 border-b border-[#e8e8e8]" />

      {/* 포스트 목록 */}
      <div>
        {pagedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* 더 보기 */}
      {hasMore && (
        <div className="text-center mt-8 pb-4">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="text-sm text-[#666] border border-[#e8e8e8] px-6 py-2.5 hover:border-[#d64045] hover:text-[#d64045] transition-colors"
          >
            더 보기 ({pagedPosts.length}/{sortedPosts.length})
          </button>
        </div>
      )}
    </div>
  );
}
