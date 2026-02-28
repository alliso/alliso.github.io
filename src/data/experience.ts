export interface Job {
  company: string;
  role: { en: string; es: string };
  period: string;
  location: string;
  bullets: { en: string[]; es: string[] };
}

export const experience: Job[] = [
  {
    company: "CTT Express",
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    period: "Feb 2023 – Present",
    location: "Remote",
    bullets: {
      en: [
        "Developed and maintained microservices with Java 17/21 and Spring Boot for parcel tracking and logistics workflows.",
        "Built event-driven pipelines using Apache Kafka to process millions of parcel status events daily.",
        "Designed and optimized PostgreSQL and MongoDB schemas for high-throughput data ingestion.",
        "Created React and Angular dashboards consumed by operations and customer-service teams.",
        "Improved observability with Grafana dashboards and alerting rules reducing MTTR by 40 %.",
      ],
      es: [
        "Desarrollé y mantuve microservicios con Java 17/21 y Spring Boot para seguimiento de paquetes y flujos logísticos.",
        "Construí pipelines event-driven con Apache Kafka para procesar millones de eventos de estado de paquetes al día.",
        "Diseñé y optimicé esquemas PostgreSQL y MongoDB para ingestión de datos de alto rendimiento.",
        "Creé dashboards en React y Angular consumidos por los equipos de operaciones y atención al cliente.",
        "Mejoré la observabilidad con dashboards y reglas de alertas en Grafana, reduciendo el MTTR en un 40 %.",
      ],
    },
  },
  {
    company: "IRTIC – Universitat de València",
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    period: "Jun 2022 – Feb 2023",
    location: "Valencia, Spain",
    bullets: {
      en: [
        "Built a research-data management platform with Spring Boot REST APIs and a Vue 3 frontend.",
        "Integrated OAuth2/OIDC authentication via Keycloak for multi-tenant access control.",
        "Containerised the entire stack with Docker Compose for reproducible local and staging environments.",
        "Wrote integration tests with TestContainers, reaching 80 % backend coverage.",
      ],
      es: [
        "Construí una plataforma de gestión de datos de investigación con APIs REST en Spring Boot y frontend en Vue 3.",
        "Integré autenticación OAuth2/OIDC mediante Keycloak para control de acceso multi-tenant.",
        "Contenerisé toda la pila con Docker Compose para entornos locales y de staging reproducibles.",
        "Escribí tests de integración con TestContainers, alcanzando el 80 % de cobertura en el backend.",
      ],
    },
  },
  {
    company: "Dialapplet",
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    period: "Jan 2020 – Jun 2022",
    location: "Valencia, Spain",
    bullets: {
      en: [
        "Developed contact-centre SaaS features with Java 11, Spring Boot, and a TypeScript/React frontend.",
        "Migrated a monolith to domain-driven microservices, cutting deployment lead time by 60 %.",
        "Implemented BDD test suites with Cucumber + Selenium, reducing regression cycles.",
        "Participated in on-call rotations and postmortem culture to improve system reliability.",
      ],
      es: [
        "Desarrollé funcionalidades SaaS para contact center con Java 11, Spring Boot y frontend TypeScript/React.",
        "Migré un monolito a microservicios orientados a dominio, reduciendo el lead time de despliegue en un 60 %.",
        "Implementé suites de tests BDD con Cucumber + Selenium, reduciendo los ciclos de regresión.",
        "Participé en guardias y cultura de postmortems para mejorar la fiabilidad del sistema.",
      ],
    },
  },
  {
    company: "F1-Connecting",
    role: { en: "IT Support Technician", es: "Técnico de Soporte IT" },
    period: "Oct 2019 – Jan 2020",
    location: "Valencia, Spain",
    bullets: {
      en: [
        "Provided first- and second-level hardware and software support for corporate users.",
        "Scripted routine maintenance tasks in Bash, reducing ticket resolution time.",
      ],
      es: [
        "Proporcioné soporte hardware y software de primer y segundo nivel a usuarios corporativos.",
        "Automaticé tareas de mantenimiento rutinarias en Bash, reduciendo el tiempo de resolución de tickets.",
      ],
    },
  },
  {
    company: "WA works",
    role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    period: "Sep 2018 – Dec 2018",
    location: "Bergen, Norway",
    bullets: {
      en: [
        "Built responsive UI components with JavaScript and CSS for a Norwegian media startup.",
        "Collaborated in an agile team across two time zones, communicating in English daily.",
      ],
      es: [
        "Construí componentes de UI responsivos con JavaScript y CSS para una startup de medios noruega.",
        "Colaboré en un equipo ágil a través de dos husos horarios, comunicándome en inglés a diario.",
      ],
    },
  },
];
