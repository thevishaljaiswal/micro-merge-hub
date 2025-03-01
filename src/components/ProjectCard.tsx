
import { useState } from "react";
import { Project } from "@/lib/demoProjects";
import { ChevronRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md animate-scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img 
          src={project.thumbnail} 
          alt={project.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-lg text-gray-900 mb-1">{project.name}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
          </div>
          <div className={`
            flex items-center justify-center rounded-full p-2 transition-all duration-300
            ${isHovered ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'}
          `}>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <a 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-sm backdrop-blur transition-colors hover:bg-gray-900 hover:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
};

export default ProjectCard;
