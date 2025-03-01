
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-medium text-gray-900 tracking-tight hover:opacity-80 transition-opacity"
            >
              Micro<span className="font-bold">Merge</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <NavLink to="/" label="Home" />
            <NavLink to="/" label="Projects" />
            <NavLink to="/" label="About" />
            <NavLink to="/" label="Contact" />
          </nav>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed inset-0 z-50 bg-white pt-20 pb-6 px-6 transition-transform duration-300 ease-in-out transform
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <nav className="flex flex-col space-y-6">
          <MobileNavLink to="/" label="Home" onClick={toggleMenu} />
          <MobileNavLink to="/" label="Projects" onClick={toggleMenu} />
          <MobileNavLink to="/" label="About" onClick={toggleMenu} />
          <MobileNavLink to="/" label="Contact" onClick={toggleMenu} />
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link 
      to={to} 
      className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-200"
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ 
  to, 
  label, 
  onClick 
}: { 
  to: string; 
  label: string; 
  onClick: () => void 
}) => {
  return (
    <Link 
      to={to} 
      className="text-gray-800 font-medium text-xl"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;
