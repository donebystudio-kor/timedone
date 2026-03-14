import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8e8] mt-16">
      <div className="mx-auto max-w-4xl px-5 py-8 text-center">
        <p className="text-xs text-[#999]">
          &copy; 2026 타임던 &middot;{" "}
          <Link href="/privacy" className="hover:text-[#d64045]">
            개인정보처리방침
          </Link>
        </p>
      </div>
    </footer>
  );
}
