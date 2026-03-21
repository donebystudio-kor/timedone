"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { POSTS, CATEGORIES } from "@/constants/posts";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";

function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.trim() || "";

  const results = q
    ? POSTS.filter(
        (p) =>
          p.title.toLowerCase().includes(q.toLowerCase()) ||
          p.summary.toLowerCase().includes(q.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(q.toLowerCase()))
      ).sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : [];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      <div>
        <div className="pb-4 mb-2 border-b border-[#e8e8e8]">
          <h1 className="text-xl font-bold text-[#2c2c2c]">
            {q ? `"${q}" 검색 결과` : "검색"}
          </h1>
          {q && (
            <p className="text-sm text-[#999] mt-1">
              {results.length}개의 글
            </p>
          )}
        </div>

        {!q ? (
          <p className="text-[#999] py-8">검색어를 입력해주세요.</p>
        ) : results.length > 0 ? (
          results.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-[#999] py-8">검색 결과가 없습니다.</p>
        )}
      </div>

      <aside className="hidden lg:block">
        <Sidebar />
      </aside>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-[#999] py-8">로딩 중...</div>}>
      <SearchResults />
    </Suspense>
  );
}
