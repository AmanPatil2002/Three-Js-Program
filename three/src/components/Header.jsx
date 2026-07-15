import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Snowflake } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About Us' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
        ${scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/20' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Snowflake 
                className={`
                  relative w-8 h-8 transition-all duration-500
                  ${scrolled ? 'text-blue-600' : 'text-white'}
                  group-hover:rotate-180 transition-transform duration-700
                `}
                strokeWidth={2.5}
              />
            </div>
            <span className={`
              text-xl font-bold tracking-tight transition-colors duration-300
              ${scrolled ? 'text-gray-800' : 'text-white'}
            `}>
              Chill<span className="text-blue-400">Drinks</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`
                  relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300
                  ${location.pathname === item.id 
                    ? 'text-white bg-linear-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30' 
                    : scrolled 
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {item.label}
                {location.pathname === item.id && (
                  <span className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-500 -z-10 animate-pulse-slow"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className={`
              px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300
              ${scrolled 
                ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105' 
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:scale-105'
              }
            `}>
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              md:hidden p-2 rounded-lg transition-all duration-300
              ${scrolled 
                ? 'text-gray-700 hover:bg-gray-100/80' 
                : 'text-white hover:bg-white/10'
              }
            `}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          md:hidden absolute top-20 left-0 right-0 transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-400px opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl mx-4 p-2 border border-white/20">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              onClick={() => setIsOpen(false)}
              className={`
                w-full block text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                ${location.pathname === item.id 
                  ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
    </header>
  );
};

export default Header;