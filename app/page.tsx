import { POSTS } from "@/constants/posts";
import HomeClient from "@/components/HomeClient";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      <HomeClient posts={POSTS} />

      {/* 사이드바 */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>
    </div>
  );
}
