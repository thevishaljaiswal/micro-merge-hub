
import { demoNews } from "@/lib/demoNews";
import NewsCard from "./NewsCard";
import { ChevronRight } from "lucide-react";

const NewsSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 border-b border-gray-200">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">News & Blog</h2>
        <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:underline">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {demoNews.map((news, index) => (
          <div 
            key={news.id} 
            className="animate-slide-in" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
