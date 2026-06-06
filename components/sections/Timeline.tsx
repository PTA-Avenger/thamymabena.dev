import { timelineData } from "@/content/data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 md:px-20 max-w-[1140px] mx-auto border-t border-border relative z-10">
      <div className="section-label reveal font-mono text-[0.68rem] text-teal tracking-[0.16em] uppercase mb-3 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-teal-dim">
        Timeline
      </div>
      <h2 className="section-heading reveal font-serif text-[clamp(2rem,4vw,3rem)] text-white leading-[1.15] mb-4">
        Experience &amp; <em className="font-serif not-italic text-teal">journey</em>
      </h2>
      <p className="section-sub reveal text-[1rem] text-text-mid max-w-[520px] mb-14">
        The full picture behind the 2 years of building.
      </p>

      <div className="timeline-track reveal relative flex flex-col gap-0 after:content-[''] after:absolute after:left-[130px] after:top-0 after:bottom-0 after:w-[1px] after:bg-border max-md:after:left-[90px]">
        {timelineData.map((item, index) => {
          let dotColorClass = "border-teal";
          let dateColorClass = "text-teal";

          if (item.type === "cert") {
            dotColorClass = "border-amber";
            dateColorClass = "text-amber";
          } else if (item.type === "edu") {
            dotColorClass = "border-text-mid";
            dateColorClass = "text-text-mid";
          }

          return (
            <div
              key={index}
              className="tl-item grid grid-cols-[130px_1fr] max-md:grid-cols-[90px_1fr] gap-0 relative border-b border-border last:border-b-0"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[126px] top-6 w-[9px] h-[9px] rounded-full border-2 bg-bg z-10 max-md:left-[86px] ${dotColorClass}`}
              />

              {/* Date Column */}
              <div className="tl-date py-6 pr-5 max-md:pr-4 text-right">
                <div className={`tl-date-main font-mono text-[0.68rem] leading-normal whitespace-pre-line ${dateColorClass}`}>
                  {item.date}
                </div>
              </div>

              {/* Body Column */}
              <div className="tl-body py-6 pl-7 max-md:pl-6">
                <h3 className="tl-role font-serif text-[1.05rem] text-white mb-1">
                  {item.role}
                </h3>
                <div className="tl-org font-mono text-[0.7rem] text-text-dim mb-2.5">
                  {item.org}
                </div>
                <p className="tl-desc text-[0.85rem] text-text-mid leading-relaxed max-w-[700px]">
                  {item.desc}
                </p>
                <div className="tl-tags flex flex-wrap gap-1.5 mt-2.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tl-tag font-mono text-[0.62rem] text-text-dim border border-border px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
