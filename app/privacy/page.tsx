import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 — 타임던",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl rounded-lg bg-card p-6 shadow-sm md:p-8">
      <h1 className="mb-6 text-2xl font-bold text-primary">
        개인정보처리방침
      </h1>

      <div className="space-y-6 text-sm leading-relaxed text-text">
        <section>
          <h2 className="mb-2 text-lg font-bold text-primary">
            1. 개인정보의 수집 및 이용 목적
          </h2>
          <p>
            타임던(이하 &quot;사이트&quot;)은 서비스 제공 및 개선을 위해 최소한의
            정보를 수집합니다.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-primary">
            2. 수집하는 개인정보 항목
          </h2>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <strong>쿠키 (Cookies)</strong>: Google Analytics를 통한 방문자
              통계 분석 목적으로 쿠키를 사용합니다.
            </li>
            <li>
              <strong>광고 쿠키</strong>: Google AdSense를 통한 맞춤형 광고
              제공을 위해 쿠키를 사용할 수 있습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-primary">
            3. 개인정보의 보유 및 이용 기간
          </h2>
          <p>
            수집된 쿠키 정보는 브라우저 설정에 따라 관리되며, 사이트에서 별도로
            개인정보를 저장하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-primary">
            4. 개인정보의 제3자 제공
          </h2>
          <p>
            사이트는 Google Analytics 및 Google AdSense를 사용하며, 이에 따라
            Google의 개인정보처리방침이 적용됩니다.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-primary">
            5. 쿠키 관리 방법
          </h2>
          <p>
            사용자는 브라우저 설정을 통해 쿠키 사용을 거부하거나 삭제할 수
            있습니다. 다만, 쿠키를 차단할 경우 일부 서비스 이용에 제한이 있을 수
            있습니다.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-primary">
            6. 개인정보 보호 책임자
          </h2>
          <p>
            개인정보 관련 문의사항은 아래 이메일로 연락해 주시기 바랍니다.
          </p>
          <p className="mt-2 font-medium">
            이메일:{" "}
            <a
              href="mailto:donebystudio@gmail.com"
              className="text-accent hover:underline"
            >
              donebystudio@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-primary">7. 시행일</h2>
          <p>본 개인정보처리방침은 2026년 3월 14일부터 시행됩니다.</p>
        </section>
      </div>
    </article>
  );
}
