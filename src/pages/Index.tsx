
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import NewsSection from "@/components/NewsSection";
import MicroFrontendContainer from "@/components/MicroFrontendContainer";
import { demoProjects, Project } from "@/lib/demoProjects";
import { ChevronRight, Search } from "lucide-react";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProjects = demoProjects.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 mb-5">
                Unified Project Management
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                Manage all your applications in one place
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                MicroMerge brings all your micro frontend applications together into a seamless, unified experience.
              </p>
            </div>
            
            <div className="relative max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full py-3 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        {/* News & Blog Section */}
        <NewsSection />
        
        {/* Projects Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Your Projects</h2>
            <button className="inline-flex items-center text-gray-900 font-medium text-sm hover:underline">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="animate-slide-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard 
                    project={project} 
                    onSelect={handleSelectProject} 
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">
                Try adjusting your search or view all projects.
              </p>
            </div>
          )}
        </section>
        
        {/* Features */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why use MicroMerge?
              </h2>
              <p className="text-xl text-gray-600">
                A simple, elegant solution for your micro frontend architecture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Unified Experience" 
                description="Combine all your applications into a single, cohesive user interface."
              />
              <FeatureCard 
                title="Independent Deployment" 
                description="Deploy and update individual applications without affecting others."
              />
              <FeatureCard 
                title="Seamless Integration" 
                description="Easily integrate new applications with minimal configuration."
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {selectedProject && (
        <MicroFrontendContainer 
          project={selectedProject} 
          onClose={handleCloseProject} 
        />
      )}
    </div>
  );
};

const FeatureCard = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Index;
