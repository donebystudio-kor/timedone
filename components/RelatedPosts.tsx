import { POSTS, CATEGORIES } from "@/constants/posts";
import Link from "next/link";

export default function RelatedPosts({ slugs }: { slugs: string[] }) {
  const relatedPosts = slugs
    .map((slug) => POSTS.find((p) => p.slug === slug))
    .filter(Boolean);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-bold text-[#1a1a2e] mb-5">관련 포스트</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedPosts.map((post) => {
          if (!post) return null;
          const category = CATEGORIES.find((c) => c.id === post.category);

          return (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block rounded-lg bg-white p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {category && (
                <span className="inline-block text-xs font-medium text-[#e94560] bg-[#e94560]/10 rounded-full px-2.5 py-0.5 mb-2">
                  {category.emoji} {category.name}
                </span>
              )}
              <h4 className="text-sm font-bold text-[#1a1a2e] line-clamp-2">
                {post.title}
              </h4>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
