import { Post, CATEGORIES } from "@/constants/posts";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
  const category = CATEGORIES.find((c) => c.id === post.category);

  return (
    <article className="rounded-lg bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden">
      <div className="p-6">
        {/* 카테고리 배지 */}
        {category && (
          <span className="inline-block text-xs font-medium text-[#e94560] bg-[#e94560]/10 rounded-full px-3 py-1 mb-3">
            {category.emoji} {category.name}
          </span>
        )}

        {/* 제목 */}
        <h2 className="mb-2">
          <Link
            href={`/posts/${post.slug}`}
            className="text-lg font-bold text-[#1a1a2e] hover:text-[#e94560] transition-colors line-clamp-2"
          >
            {post.title}
          </Link>
        </h2>

        {/* 날짜 */}
        <time className="text-xs text-gray-400 block mb-3">{post.date}</time>

        {/* 요약 */}
        <p className="text-sm text-[#333333] leading-relaxed line-clamp-3 mb-4">
          {post.summary}
        </p>

        {/* 더 읽기 */}
        <Link
          href={`/posts/${post.slug}`}
          className="text-sm font-medium text-[#e94560] hover:underline"
        >
          더 읽기 →
        </Link>
      </div>
    </article>
  );
}
