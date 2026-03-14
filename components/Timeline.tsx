import { TimelineEvent } from "@/constants/posts";

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="border border-[#e8e8e8] p-5">
      <h3 className="text-sm font-bold text-[#2c2c2c] mb-4">타임라인</h3>
      <div className="relative pl-6">
        {/* 세로 라인 */}
        <div className="absolute left-2 top-0 bottom-0 w-px bg-[#ddd]" />

        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="relative">
              {/* 점 */}
              <div
                className={`absolute -left-4 top-1.5 w-2 h-2 rounded-full ${
                  event.highlight
                    ? "bg-[#d64045]"
                    : "bg-[#ccc]"
                }`}
              />

              <div>
                <span
                  className={`text-xs font-bold ${
                    event.highlight ? "text-[#d64045]" : "text-[#999]"
                  }`}
                >
                  {event.year}
                </span>
                <span className="text-sm text-[#555] ml-2">{event.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
