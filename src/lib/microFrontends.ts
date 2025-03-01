
import { toast } from "sonner";

interface MicroFrontendOptions {
  url: string;
  containerId: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const loadMicroFrontend = async ({
  url,
  containerId,
  onLoad,
  onError
}: MicroFrontendOptions): Promise<void> => {
  try {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with id '${containerId}' not found`);
    }

    // In a real implementation, this would load the actual micro frontend
    // For demo purposes, we're simulating it with an iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    iframe.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
    
    container.innerHTML = ''; // Clear previous content
    container.appendChild(iframe);
    
    // Add loading animation
    container.classList.add('loading');
    container.classList.remove('loaded');
    
    iframe.onload = () => {
      // Remove loading state when loaded
      container.classList.remove('loading');
      container.classList.add('loaded');
      
      if (onLoad) {
        onLoad();
      }
    };

    iframe.onerror = (e) => {
      const error = new Error('Failed to load micro frontend');
      console.error(error);
      if (onError) {
        onError(error);
      }
      toast.error("Failed to load application", {
        description: "There was an issue loading the requested application."
      });
    };
  } catch (error) {
    console.error('Error loading micro frontend:', error);
    if (onError && error instanceof Error) {
      onError(error);
    }
    toast.error("Failed to load application", {
      description: "There was an issue loading the requested application."
    });
  }
};

export const unloadMicroFrontend = (containerId: string): void => {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = '';
  }
};
