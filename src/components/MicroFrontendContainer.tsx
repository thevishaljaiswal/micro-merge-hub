
import { useEffect, useState, useRef } from "react";
import { Project } from "@/lib/demoProjects";
import { loadMicroFrontend, unloadMicroFrontend } from "@/lib/microFrontends";
import { ArrowLeft, Loader2, Maximize2, Minimize2, X } from "lucide-react";
import { toast } from "sonner";

interface MicroFrontendContainerProps {
  project: Project | null;
  onClose: () => void;
}

const MicroFrontendContainer = ({ project, onClose }: MicroFrontendContainerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        loadMicroFrontend({
          url: project.url,
          containerId: "micro-frontend-content",
          onLoad: () => {
            setIsLoading(false);
            toast.success(`${project.name} loaded successfully`);
          },
          onError: (error) => {
            console.error("Failed to load micro frontend:", error);
            setIsLoading(false);
          }
        });
      }, 1000); // Simulate loading delay
      
      return () => {
        clearTimeout(timer);
        unloadMicroFrontend("micro-frontend-content");
      };
    }
  }, [project]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Listen for fullscreen change events
  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', fullscreenChangeHandler);
    
    return () => {
      document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
    };
  }, []);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div 
        ref={containerRef}
        className="w-full max-w-6xl h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-100 border-b border-gray-200 p-3 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </button>
          
          <div className="text-center flex-1">
            <h2 className="text-gray-900 font-medium">{project.name}</h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </button>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 bg-gray-50 relative overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <Loader2 className="h-8 w-8 text-gray-400 animate-spin mx-auto mb-3" />
                <p className="text-gray-500">Loading {project.name}...</p>
              </div>
            </div>
          )}
          
          <div 
            id="micro-frontend-content" 
            className="w-full h-full micro-frontend-container"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MicroFrontendContainer;
