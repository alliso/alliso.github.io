export interface Skill {
  name: string;
  category: "backend" | "devops" | "testing";
}

export const skills: Skill[] = [
  // Backend
  { name: "Java 11/17/21", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "OracleSQL", category: "backend" },
  { name: "Apache Kafka", category: "backend" },
  { name: "DDD", category: "backend" },
  // DevOps
  { name: "Docker", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "Azure DevOps", category: "devops" },
  // Testing
  { name: "Cucumber", category: "testing" },
];

export const categoryColors: Record<Skill["category"], string> = {
  backend: "badge-backend",
  devops: "badge-devops",
  testing: "badge-testing",
};
