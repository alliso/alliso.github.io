export interface Job {
  company: string;
  role: { en: string; es: string };
  period: string;
  location: string;
  bullets: { en: string[]; es: string[] };
}

export const experience: Job[] = [
  {
    company: "Cognizant",
    role: { en: "Back End Developer", es: "Desarrollador Back End" },
    period: "Mar 2025 – Present",
    location: "Remote",
    bullets: {
      en: [
        "Design and development of scalable, high-quality software solutions using Java Spring Boot.",
        "Application of innovative methodologies such as DDD and Scrum to streamline development and ensure software quality.",
        "Design of microservices and use of technologies such as Kafka and Grafana.",
        "Working for clients in the banking sector, including ING.",
      ],
      es: [
        "Creación y diseño de soluciones de software escalables y de alta calidad mediante el uso de tecnologías como Java Spring Boot.",
        "Implementación de metodologías innovadoras como DDD y Scrum, que agilizan el proceso de desarrollo y aseguran la calidad del software.",
        "Diseño de microservicios y uso de tecnologías como Kafka y Grafana.",
        "Trabajando para clientes en el sector de la banca como ING.",
      ],
    },
  },
  {
    company: "CTT Express",
    role: { en: "Back End Developer", es: "Desarrollador Back End" },
    period: "Feb 2023 – Mar 2025",
    location: "Remote",
    bullets: {
      en: [
        "Design and development of scalable, high-quality software solutions using Java Spring Boot.",
        "Application of innovative methodologies such as TDD and Scrum to streamline development and ensure software quality.",
        "Design of microservices and use of technologies such as Kafka and Grafana.",
      ],
      es: [
        "Creación y diseño de soluciones de software escalables y de alta calidad mediante el uso de tecnologías como Java Spring Boot.",
        "Implementación de metodologías innovadoras como TDD y Scrum, que agilizan el proceso de desarrollo y aseguran la calidad del software.",
        "Diseño de microservicios y uso de tecnologías como Kafka y Grafana.",
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
        "Development of scalable, high-quality software solutions using Java Spring Boot and Angular.",
        "Creation and optimisation of Docker containers for both frontend and backend applications, simplifying and accelerating the deployment process in production and development environments.",
      ],
      es: [
        "Creación de soluciones de software escalables y de alta calidad mediante el uso de tecnologías como Java Spring Boot y Angular.",
        "Experiencia en la creación y optimización de contenedores Docker tanto para el Frontend como el Backend de aplicaciones, con el objetivo de simplificar y acelerar el proceso de despliegue en entornos de producción y desarrollo.",
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
        "Member of the R&D team, responsible for designing and implementing innovative, custom software solutions using cutting-edge technologies.",
        "Implementation of Docker containers to automate and optimise company processes, improving business efficiency and productivity.",
        "Maintenance and improvement of existing applications by adding new features and resolving technical issues.",
        "Application of agile methodologies such as SCRUM for software project management, using tools like Jira for planning and task tracking.",
      ],
      es: [
        "Integrante del equipo de I+D de la empresa, encargado de diseñar e implementar soluciones de software innovadoras y personalizadas mediante el uso de tecnologías de vanguardia.",
        "Implementación de contenedores Docker para automatizar y optimizar los procesos de la empresa, con el objetivo de mejorar la eficiencia y productividad del negocio.",
        "Mantenimiento y mejora de aplicaciones ya existentes mediante la adición de nuevas funcionalidades y la solución de problemas técnicos.",
        "Aplicación de metodologías ágiles como SCRUM para la gestión de proyectos de software, utilizando herramientas como Jira para la planificación y seguimiento de tareas.",
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
        "Maintenance of Linux operating systems, including process automation using programming languages such as Python.",
      ],
      es: [
        "Mantenimiento de sistemas operativos Linux, incluyendo la automatización de procesos mediante el uso de lenguajes de programación como Python.",
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
        "Development of frontend applications using frameworks such as React and TypeScript, delivering an agile and intuitive user experience.",
      ],
      es: [
        "Experiencia en el desarrollo de aplicaciones Front End mediante el uso de frameworks como React y TypeScript, con el fin de brindar una experiencia de usuario ágil e intuitiva.",
      ],
    },
  },
];
