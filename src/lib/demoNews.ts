
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  url: string;
  imageUrl: string;
}

export const demoNews: NewsItem[] = [
  {
    id: "news1",
    title: "Introducing MicroMerge 2.0",
    excerpt: "We're excited to announce the release of MicroMerge 2.0 with improved performance and new features.",
    date: "2023-10-15",
    category: "Product Update",
    url: "https://example.com/blog/micromerge-2",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "news2",
    title: "Best Practices for Micro Frontend Architecture",
    excerpt: "Learn how to structure your micro frontend applications for optimal performance and maintainability.",
    date: "2023-09-28",
    category: "Tutorial",
    url: "https://example.com/blog/micro-frontend-best-practices",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "news3",
    title: "Case Study: How Company X Improved Developer Productivity with MicroMerge",
    excerpt: "Company X shares how they reduced development time by 40% after implementing MicroMerge.",
    date: "2023-09-10",
    category: "Case Study",
    url: "https://example.com/blog/case-study-company-x",
    imageUrl: "/placeholder.svg"
  }
];
