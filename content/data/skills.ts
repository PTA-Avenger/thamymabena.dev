export interface SkillItem {
  name: string;
  level: "primary" | "working";
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: "primary" },
      { name: "Java 17", level: "primary" },
      { name: "C#", level: "primary" },
      { name: "C++", level: "working" },
      { name: "SQL", level: "working" },
      { name: "PostgreSQL", level: "working" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Spring Boot 3", level: "primary" },
      { name: ".NET 10", level: "primary" },
      { name: ".NET MAUI", level: "working" },
      { name: "React 18", level: "working" },
      { name: "gRPC", level: "primary" },
      { name: "GraphQL", level: "working" },
      { name: "RESTful APIs", level: "primary" },
    ],
  },
  {
    category: "Platforms & Tools",
    items: [
      { name: "Docker", level: "working" },
      { name: "Supabase", level: "working" },
      { name: "Git / GitHub", level: "primary" },
      { name: "Linux", level: "working" },
      { name: "Maven", level: "working" },
    ],
  },
  {
    category: "Focus Areas",
    items: [
      { name: "Distributed Systems", level: "primary" },
      { name: "AI / NLP", level: "primary" },
      { name: "Data Engineering", level: "working" },
      { name: "OOP & Architecture", level: "working" },
      { name: "Cybersecurity", level: "working" },
    ],
  },
  {
    category: "Protocols & Specs",
    items: [
      { name: "Protocol Buffers", level: "primary" },
      { name: "HL7 FHIR R5", level: "working" },
      { name: "HotChocolate", level: "working" },
      { name: "Stanford CoreNLP", level: "primary" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Team Leadership", level: "working" },
      { name: "Technical Communication", level: "working" },
      { name: "Agile Delivery", level: "working" },
      { name: "Mentoring", level: "working" },
    ],
  },
];
