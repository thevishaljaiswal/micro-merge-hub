
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-medium text-gray-900">
              Micro<span className="font-bold">Merge</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              A unified platform for managing and displaying your micro frontend applications.
              Seamlessly integrate all your projects into one cohesive experience.
            </p>
            <div className="mt-6 text-gray-500 text-sm">
              © {currentYear} MicroMerge. All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Platform</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/">Projects</FooterLink>
              <FooterLink to="/">Documentation</FooterLink>
              <FooterLink to="/">API</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink to="/">About</FooterLink>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Privacy Policy</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ 
  to, 
  children 
}: { 
  to: string; 
  children: React.ReactNode 
}) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
