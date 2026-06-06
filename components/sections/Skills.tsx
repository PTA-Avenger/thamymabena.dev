import { skillsData } from "@/content/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 max-w-[1140px] mx-auto relative z-10">
      <div className="section-label reveal font-mono text-[0.68rem] text-teal tracking-[0.16em] uppercase mb-3 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-teal-dim">
        Skills
      </div>
      <h2 className="section-heading reveal font-serif text-[clamp(2rem,4vw,3rem)] color-white leading-[1.15] mb-4 text-white">
        Technical <em className="font-serif not-italic text-teal">stack</em>
      </h2>

      <div className="skill-legend reveal flex flex-wrap gap-5 mb-8 font-mono text-[0.65rem] text-text-dim items-center">
        <span className="flex items-center gap-2">
          <span className="w-[5px] h-[5px] rounded-full bg-teal" />
          Primary — daily use, production applied
        </span>
        <span className="flex items-center gap-2">
          <span className="w-[5px] h-[5px] rounded-full bg-text-dim" />
          Working — solid academic / project use
        </span>
      </div>

      <div className="skills-grid reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border/40 border border-border/40">
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="skill-group bg-surface border border-border p-7 transition-all duration-200 hover:border-teal-dim"
          >
            <div className="skill-group-label font-mono text-[0.68rem] text-teal tracking-[0.12em] uppercase mb-4 flex items-center gap-2 after:content-[''] after:flex-grow after:h-[1px] after:bg-border">
              {group.category}
            </div>
            <div className="skill-pills flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const isPrimary = skill.level === "primary";
                return (
                  <span
                    key={skill.name}
                    className={`skill-pill font-mono text-[0.72rem] px-3 py-1.5 border transition-all duration-200 flex items-center gap-1.5 ${
                      isPrimary
                        ? "text-teal border-teal-dim/40 bg-teal/4 hover:border-teal/80 hover:bg-teal/8"
                        : "text-text-mid border-border bg-surface2 hover:text-teal hover:border-teal-dim/60"
                    }`}
                  >
                    <span
                      className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${
                        isPrimary ? "bg-teal" : "bg-text-dim"
                      }`}
                    />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
