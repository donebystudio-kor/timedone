import { CATEGORIES, POSTS } from "@/constants/posts";
import Link from "next/link";

export default function Sidebar() {
  const recentPosts = [...POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const categoryPostCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count: POSTS.filter((p) => p.category === cat.id).length,
  }));

  return (
    <div className="space-y-8">
      {/* 소개 */}
      <div className="border border-[#e8e8e8] p-5">
        <h3 className="text-sm font-bold text-[#2c2c2c] mb-2">타임던 소개</h3>
        <p className="text-[13px] text-[#666] leading-relaxed">
          같은 시대라고 믿었던 것들이 사실은 수천 년 떨어져 있고, 전혀 다른 시대라고 생각했던 것들이 같은 해에 일어났습니다.
        </p>
      </div>

      {/* 최근 글 */}
      <div className="border border-[#e8e8e8] p-5">
        <h3 className="text-sm font-bold text-[#2c2c2c] mb-3">최근 글</h3>
        <ul className="space-y-2">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="text-[13px] text-[#555] hover:text-[#d64045] leading-snug block"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 카테고리 */}
      <div className="border border-[#e8e8e8] p-5">
        <h3 className="text-sm font-bold text-[#2c2c2c] mb-3">카테고리</h3>
        <ul className="space-y-1.5">
          {categoryPostCounts.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/category/${cat.id}`}
                className="flex items-center justify-between text-[13px] text-[#555] hover:text-[#d64045] py-0.5"
              >
                <span>{cat.name}</span>
                <span className="text-[#bbb]">({cat.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
