import { POSTS } from "@/constants/posts";
import HomeClient from "@/components/HomeClient";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "타임던",
    "url": "https://timedone.vercel.app",
    "description": "역사 속 시간의 틈새",
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <HomeClient posts={POSTS} />

      {/* 사이드바 */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>
    </div>
  );
}
