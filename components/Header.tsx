"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CATEGORIES } from "@/constants/posts";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setQuery("");
    setMenuOpen(false);
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="border-b border-[#e8e8e8] bg-white">
      <div className="mx-auto max-w-4xl px-5 py-5">
        {/* 사이트 타이틀 */}
        <div className="flex items-center justify-between">
          <Link href="/" className="block">
            <span className="text-2xl font-bold text-[#2c2c2c]">타임던</span>
            <span className="ml-2 text-sm text-[#999] hidden sm:inline">
              역사 속 시간의 틈새
            </span>
          </Link>

          {/* 모바일 햄버거 */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1 text-[#666]"
            aria-label="메뉴"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-5 mt-3 pt-3 border-t border-[#f0f0f0]">
          <Link
            href="/"
            className="text-sm text-[#666] hover:text-[#d64045]"
          >
            홈
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="text-sm text-[#666] hover:text-[#d64045]"
            >
              {cat.name}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="ml-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="검색"
              className="w-32 text-sm border border-[#e8e8e8] px-2.5 py-1 text-[#2c2c2c] placeholder-[#bbb] focus:outline-none focus:border-[#d64045] transition-colors"
            />
          </form>
        </nav>

        {/* 모바일 메뉴 */}
        {menuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-[#f0f0f0]">
            <form onSubmit={handleSearch} className="mb-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="검색"
                className="w-full text-sm border border-[#e8e8e8] px-2.5 py-2 text-[#2c2c2c] placeholder-[#bbb] focus:outline-none focus:border-[#d64045]"
              />
            </form>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-[#666] hover:text-[#d64045]"
            >
              홈
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm text-[#666] hover:text-[#d64045]"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
