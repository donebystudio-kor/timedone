import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-400 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center text-center gap-3">
          {/* 사이트명 */}
          <Link
            href="/"
            className="text-lg font-bold text-white hover:text-[#e94560] transition-colors"
          >
            타임던
          </Link>

          {/* 설명 */}
          <p className="text-sm text-gray-400">
            역사 속 시간의 틈새를 들여다보는 블로그
          </p>

          {/* 링크 */}
          <div className="flex items-center gap-4 text-xs mt-2">
            <Link
              href="/privacy"
              className="hover:text-[#e94560] transition-colors"
            >
              개인정보처리방침
            </Link>
            <span className="text-gray-600">|</span>
            <a
              href="mailto:donebystudio@gmail.com"
              className="hover:text-[#e94560] transition-colors"
            >
              donebystudio@gmail.com
            </a>
          </div>

          {/* 저작권 */}
          <p className="text-xs text-gray-500 mt-4">
            &copy; 2026 타임던. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
