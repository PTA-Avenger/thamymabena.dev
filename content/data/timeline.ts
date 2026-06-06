export interface TimelineItem {
  date: string;
  role: string;
  org: string;
  desc: string;
  tags: string[];
  type: "work" | "cert" | "edu";
}

export const timelineData: TimelineItem[] = [
  {
    date: "Mar 2026\nPresent",
    role: "Volunteer Student Assistant — Applications Development",
    org: "North-West University · CMPG 212 · Potchefstroom",
    desc: "Mentoring students in C# and full-stack development. Hands-on troubleshooting, code reviews, and technical coaching in collaborative Agile-style labs.",
    tags: ["C#", "Mentoring", "Full-Stack"],
    type: "work",
  },
  {
    date: "Feb 2026\nPresent",
    role: "Student Assistant — Information Security",
    org: "North-West University · CMPG 215 · Potchefstroom",
    desc: "Providing technical support for the Information Security module. Translating complex security concepts into accessible explanations for a diverse student cohort.",
    tags: ["Cybersecurity", "Teaching", "Communication"],
    type: "work",
  },
  {
    date: "Nov 2025",
    role: "Google Cybersecurity Professional Certificate",
    org: "Google · Coursera",
    desc: "Completed the full 8-course programme covering threat detection, network security, Linux, Python for security automation, and SIEM tools.",
    tags: ["Cert", "Security", "Python", "Linux"],
    type: "cert",
  },
  {
    date: "Jul 2025",
    role: "Full Stack Development Certificate",
    org: "FNB App Academy",
    desc: "Intensive full-stack programme with applied delivery focus. Built and deployed web applications across the full stack under commercial time pressure.",
    tags: ["Cert", "Full-Stack", "Commercial"],
    type: "cert",
  },
  {
    date: "2025",
    role: "BridgePay — Enterprise Payment Gateway",
    org: "Independent Project · Live on Vercel + Render",
    desc: "Built and deployed a full-stack payment gateway simulation with Clean Architecture, CQRS, MassTransit + RabbitMQ async pipeline, Bridge Pattern for multi-bank routing, and a full unit + integration test suite.",
    tags: ["C# .NET 10", "Angular 22", "RabbitMQ", "Clean Architecture", "Deployed"],
    type: "work",
  },
  {
    date: "2025",
    role: "Cross-Platform Task Manager — 93% Academic Result",
    org: "North-West University · Team Lead",
    desc: "Led a 4-person team building a MAUI cross-platform app targeting Android, iOS, and Windows. Architecture through delivery. Received 93% in evaluation.",
    tags: [".NET MAUI", "Team Lead", "Supabase"],
    type: "work",
  },
  {
    date: "2024\nNov 2026",
    role: "BSc Information Technology — NQF Level 7",
    org: "North-West University · Potchefstroom · Expected Cum Laude",
    desc: "Majoring in Computer Science and Information Systems. Core modules: Data Structures & Algorithms, Applications Development (C#), Databases, Information Security. Strong academic aggregate across all years.",
    tags: ["Degree", "CS", "Information Systems"],
    type: "edu",
  },
];
