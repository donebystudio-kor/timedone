import { Post, CATEGORIES } from "@/constants/posts";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
  const category = CATEGORIES.find((c) => c.id === post.category);

  return (
    <article className="py-6 border-b border-[#e8e8e8] last:border-b-0">
      {/* 메타 정보 */}
      <div className="text-xs text-[#999] mb-2">
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
      <h2 className="mb-2">
        <Link
          href={`/posts/${post.slug}`}
          className="text-xl font-bold text-[#2c2c2c] hover:text-[#d64045]"
        >
          {post.title}
        </Link>
      </h2>

      {/* 요약 */}
      <p className="text-[15px] text-[#666] leading-relaxed mb-3">
        {post.summary}
      </p>

      {/* 더 읽기 */}
      <Link
        href={`/posts/${post.slug}`}
        className="text-sm text-[#d64045] hover:underline"
      >
        계속 읽기...
      </Link>
    </article>
  );
}
