export interface Skill {
  name: string;
  category: "backend" | "frontend" | "devops" | "testing";
}

export const skills: Skill[] = [
  // Backend
  { name: "Java 11/17/21", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Apache Kafka", category: "backend" },
  { name: "REST APIs", category: "backend" },
  // Frontend
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Vue", category: "frontend" },
  { name: "Angular", category: "frontend" },
  // DevOps
  { name: "Docker", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
  { name: "Grafana", category: "devops" },
  // Testing
  { name: "Cucumber", category: "testing" },
  { name: "TestContainers", category: "testing" },
  { name: "JUnit", category: "testing" },
];

export const categoryColors: Record<Skill["category"], string> = {
  backend: "badge-backend",
  frontend: "badge-frontend",
  devops: "badge-devops",
  testing: "badge-testing",
};
