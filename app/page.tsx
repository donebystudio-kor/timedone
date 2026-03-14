import { POSTS } from "@/constants/posts";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const sortedPosts = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* 히어로 섹션 */}
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          시간의 틈새를 들여다보다
        </h1>
        <p className="mt-3 text-muted text-base md:text-lg">
          역사적 사실을 비교하며 시간 감각이 뒤틀리는 경험을 해보세요.
        </p>
      </section>

      {/* 2컬럼 레이아웃 */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* 포스트 목록 */}
        <div className="space-y-6 lg:col-span-2">
          {sortedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* 사이드바 */}
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
