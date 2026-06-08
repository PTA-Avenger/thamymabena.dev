export interface Project {
  slug: string;
  num: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  patterns: string[];
  tags: string[];
  craftNote: string;
  github: string;
  demo: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    slug: "bridgepay",
    num: "01 / ENTERPRISE BACKEND",
    category: "Enterprise Backend",
    title: "BridgePay — Payment Gateway Simulation",
    problem:
      "E-commerce merchants need a resilient payment intermediary that remains available even during bank downtime — synchronous payment calls fail under load and create single points of failure between merchants and financial institutions.",
    solution:
      "A full-stack enterprise payment gateway built with .NET 10 Clean Architecture and Angular 22, using an async MassTransit + RabbitMQ pipeline to decouple merchant requests from bank processing — with a live glassmorphic merchant dashboard and Swagger API.",
    patterns: [
      "Clean Architecture",
      "CQRS + MediatR",
      "Bridge Pattern",
      "MassTransit + RabbitMQ",
      "FluentValidation",
      "xUnit + Moq",
    ],
    tags: ["C# .NET 10", "Angular 22", "gRPC", "RabbitMQ", "Clean Architecture"],
    craftNote:
      "Bridge Pattern decouples merchant transaction abstraction from concrete bank implementations (MockStandardBankApi, MockFnbApi, MockAbsaApi) — adding a new bank requires zero changes to core business logic. Async queue ensures merchants get an immediate Pending response; a 15% failure rate simulator stress-tests the resilience pipeline. Unit tests cover Domain state transitions and Application command handlers; integration tests use WebApplicationFactory against the full HTTP pipeline.",
    github: "https://github.com/PTA-Avenger/BridgePay",
    demo: "https://bridge-ax9bt1ffx-thatos-projects-54db4cf6.vercel.app/",
    featured: true,
  },
  {
    slug: "investment-sentiment-analyser",
    num: "02 / AI & NLP",
    category: "AI & NLP",
    title: "JSE Investment Sentiment Analyser",
    problem:
      "JSE investors lack a fast, structured way to gauge market sentiment across sector news. Manual reading of financial headlines is slow and inconsistently interpreted.",
    solution:
      "A full-stack Natural Language Processing (NLP) pipeline designed for Johannesburg Stock Exchange (JSE) investors. The system aggregates real-time South African financial news, classifies articles by market sector, evaluates headline sentiment using Stanford CoreNLP, and visualizes live sentiment trends on an interactive Angular dashboard.",
    patterns: [
      "Pipeline Pattern",
      "Graceful Degradation",
      "Zero-Rebuild UI",
      "Server-Sent Events (SSE)",
    ],
    tags: ["Java 17", "Spring Boot 3", "Stanford CoreNLP", "Angular 19", "H2 Database"],
    craftNote:
      "A 5-stage pipeline pattern coordinates real-time news scraping, sector mapping, NLP classification, and SSE broadcasting. A 1500ms timeout switches to a Regex fallback engine (< 1ms) for graceful degradation on low-RAM hosts. The Angular 19 frontend connects dynamically via localStorage api overrides, achieving zero-rebuild production deployments.",
    github: "https://github.com/PTA-Avenger",
    demo: "https://investment-sentiment-analyser-qbhuqpk6c.vercel.app/",
    featured: true,
  },
  {
    slug: "task-manager",
    num: "03 / CROSS-PLATFORM",
    category: "Cross-Platform",
    title: "Cross-Platform Task Manager",
    problem:
      "Most cross-platform task apps require separate codebases per OS, inflating maintenance cost. A student team needed a production-quality app targeting three platforms without tripling effort.",
    solution:
      "A multi-device task management application targeting Android, iOS, and Windows from a single C# codebase, with cloud-synchronised PostgreSQL persistence and a gamified UX layer.",
    patterns: [
      "MVVM Pattern",
      ".NET MAUI",
      "Supabase / PostgreSQL",
      "Team Lead",
    ],
    tags: ["C#", ".NET MAUI", "Supabase", "PostgreSQL"],
    craftNote:
      "Led a 4-student team through full delivery cycle — architecture, build, QA, documentation. Received 93% in formal academic evaluation. End-to-end project ownership across all platforms.",
    github: "https://github.com/PTA-Avenger",
    demo: "#",
    featured: true,
  },
];
