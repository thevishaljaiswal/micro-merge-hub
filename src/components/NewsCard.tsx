
import { NewsItem } from "@/lib/demoNews";
import { CalendarIcon, ArrowRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const date = new Date(news.date);
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });
  
  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-md">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
        <img 
          src={news.imageUrl} 
          alt={news.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-gray-800">
            {news.category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col justify-between flex-grow p-5">
        <div>
          <h3 className="font-medium text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
            {news.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {news.excerpt}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-xs text-gray-500">
            <CalendarIcon className="h-3.5 w-3.5 mr-1" />
            <span>{timeAgo}</span>
          </div>
          <a 
            href={news.url}
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
