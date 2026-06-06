export default function About() {
  const stats = [
    {
      num: "93%",
      label: "Academic result on production-grade multi-platform app",
    },
    {
      num: "3",
      label: "End-to-end systems independently designed & shipped",
    },
    {
      num: "4+",
      label: "Production languages: Python, Java, C#, JavaScript",
    },
    {
      num: "2",
      label: "Industry certifications — Google & FNB App Academy",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-20 max-w-[1140px] mx-auto relative z-10">
      <div className="section-label font-mono text-[0.68rem] text-teal tracking-[0.16em] uppercase mb-3 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-teal-dim">
        About
      </div>
      <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] color-white leading-[1.15] mb-4 text-white">
        Building systems that <em className="font-serif not-italic text-teal">matter</em>
      </h2>
      
      <div className="about-grid reveal grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start mt-12">
        <div className="about-text flex flex-col gap-5 text-[1rem] text-textDefault/90 leading-[1.8]">
          <p>
            I&apos;m a final-year <strong className="text-white font-medium">BSc Information Technology</strong> student at North-West University,
            majoring in Computer Science and Information Systems. I graduate in November 2026
            with a strong academic record and a portfolio of independently shipped, production-grade systems.
          </p>
          <p>
            My work sits at the intersection of <strong className="text-white font-medium">distributed systems, AI/ML pipelines, and data engineering</strong>.
            I don&apos;t prototype in sandboxes — I architect, build, and deploy systems designed to run under real conditions:
            concurrent load, model failures, distributed state, and demanding latency requirements.
          </p>
          <p>
            Based in Pretoria, Gauteng. South African citizen. Available for graduate programmes from late 2026.
          </p>
        </div>

        <div className="about-stats grid grid-cols-2 gap-[2px] bg-border/40 border border-border/40">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-surface border border-border p-6 md:p-7 transition-all duration-200 hover:border-teal-dim hover:shadow-glow"
            >
              <div className="stat-num font-mono text-[2.2rem] text-teal font-bold leading-none mb-2">
                {stat.num}
              </div>
              <div className="stat-label text-[0.82rem] text-text-dim leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
