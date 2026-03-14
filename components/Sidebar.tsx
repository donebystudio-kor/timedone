import { CATEGORIES, POSTS } from "@/constants/posts";
import Link from "next/link";

export default function Sidebar() {
  // 최신 3개 글 (날짜 내림차순)
  const recentPosts = [...POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // 카테고리별 글 수
  const categoryPostCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count: POSTS.filter((p) => p.category === cat.id).length,
  }));

  return (
    <aside className="space-y-8">
      {/* 최근 글 */}
      <div className="rounded-lg bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-base font-bold text-[#1a1a2e] border-b border-gray-100 pb-2">
          최근 글
        </h3>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="block group"
              >
                <span className="text-sm font-medium text-[#333333] group-hover:text-[#e94560] transition-colors line-clamp-2">
                  {post.title}
                </span>
                <span className="text-xs text-gray-400 mt-0.5 block">
                  {post.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 카테고리 */}
      <div className="rounded-lg bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-base font-bold text-[#1a1a2e] border-b border-gray-100 pb-2">
          카테고리
        </h3>
        <ul className="space-y-2">
          {categoryPostCounts.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/category/${cat.id}`}
                className="flex items-center justify-between text-sm text-[#333333] hover:text-[#e94560] transition-colors py-1"
              >
                <span>
                  {cat.emoji} {cat.name}
                </span>
                <span className="text-xs text-gray-400 bg-gray-50 rounded-full px-2 py-0.5">
                  {cat.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
