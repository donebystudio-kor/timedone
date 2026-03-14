import { TimelineEvent } from "@/constants/posts";

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative pl-8 py-4">
      {/* 세로 라인 */}
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200" />

      <ul className="space-y-6">
        {events.map((event, index) => (
          <li key={index} className="relative">
            {/* 동그란 점 */}
            <div
              className={`absolute -left-5 top-1 w-3 h-3 rounded-full border-2 ${
                event.highlight
                  ? "bg-[#e94560] border-[#e94560]"
                  : "bg-white border-gray-300"
              }`}
            />

            {/* 내용 */}
            <div
              className={`${
                event.highlight
                  ? "text-[#e94560]"
                  : "text-[#333333]"
              }`}
            >
              <span className="text-sm font-bold">{event.year}</span>
              <span className="text-sm ml-2">{event.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
