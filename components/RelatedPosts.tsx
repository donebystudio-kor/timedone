import { POSTS, CATEGORIES } from "@/constants/posts";
import Link from "next/link";

export default function RelatedPosts({ slugs }: { slugs: string[] }) {
  const relatedPosts = slugs
    .map((slug) => POSTS.find((p) => p.slug === slug))
    .filter(Boolean);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="border-t border-[#e8e8e8] pt-6">
      <h3 className="text-sm font-bold text-[#2c2c2c] mb-4">관련 글</h3>
      <ul className="space-y-3">
        {relatedPosts.map((post) => {
          if (!post) return null;
          const category = CATEGORIES.find((c) => c.id === post.category);

          return (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="group block"
              >
                {category && (
                  <span className="text-xs text-[#999]">
                    {category.name} &middot;{" "}
                  </span>
                )}
                <span className="text-[15px] text-[#555] group-hover:text-[#d64045]">
                  {post.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
