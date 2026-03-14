"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/constants/posts";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a2e] text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* 사이트명 */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-[#e94560] transition-colors"
        >
          타임던
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex items-center gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="text-sm text-gray-300 hover:text-[#e94560] transition-colors"
            >
              {cat.emoji} {cat.name}
            </Link>
          ))}
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="메뉴 열기"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-[#1a1a2e] px-4 pb-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-gray-300 hover:text-[#e94560] transition-colors border-b border-white/5 last:border-0"
            >
              {cat.emoji} {cat.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
