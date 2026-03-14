import { POSTS } from "@/constants/posts";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const sortedPosts = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      {/* 포스트 목록 */}
      <div>
        {sortedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* 사이드바 */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>
    </div>
  );
}
