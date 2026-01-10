import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart3 } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Methodology', path: '/#methodology' },
    { name: 'Case Studies', path: '/#results' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-bg/80 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <BarChart3 className="text-primary" />
          insightmatrix
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.path.startsWith('/#') ? (
                  <a 
                    href={link.path} 
                    className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-white' : 'text-gray-300 hover:text-primary'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link 
            to="/login" 
            className="px-4 py-2 text-sm font-semibold text-primary-contrast bg-primary rounded-lg hover:bg-green-400 transition-colors"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-gray-800 p-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.path} 
                  className="block text-base font-medium text-gray-300 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Link 
                to="/login" 
                className="block w-full text-center px-4 py-2 mt-2 text-sm font-semibold text-primary-contrast bg-primary rounded-lg hover:bg-green-400"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
