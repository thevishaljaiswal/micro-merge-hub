
export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  technologies: string[];
}

export const demoProjects: Project[] = [
  {
    id: "project1",
    name: "Product Dashboard",
    description: "Analytics dashboard for monitoring product performance and user engagement",
    url: "https://example.com/dashboard",
    thumbnail: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Recharts"]
  },
  {
    id: "project2",
    name: "E-commerce Store",
    description: "Modern online store with product catalog and shopping cart",
    url: "https://example.com/store",
    thumbnail: "/placeholder.svg",
    technologies: ["React", "TailwindCSS", "Redux"]
  },
  {
    id: "project3",
    name: "Task Manager",
    description: "Productivity application for organizing and tracking tasks",
    url: "https://example.com/tasks",
    thumbnail: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Zustand"]
  },
  {
    id: "project4",
    name: "Content Management System",
    description: "Admin interface for managing website content and media",
    url: "https://example.com/cms",
    thumbnail: "/placeholder.svg",
    technologies: ["React", "TailwindCSS", "React Query"]
  },
  {
    id: "project5",
    name: "User Profile",
    description: "User account management and profile settings",
    url: "https://example.com/profile",
    thumbnail: "/placeholder.svg",
    technologies: ["React", "TypeScript", "ShadcnUI"]
  },
  {
    id: "project6",
    name: "Authentication System",
    description: "Secure login, registration, and authentication flow",
    url: "https://example.com/auth",
    thumbnail: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Auth.js"]
  }
];
