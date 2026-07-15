import { Link } from 'react-router-dom';
import { Snowflake, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About Us' },
  ];

  const contactInfo = [
    { icon: Phone, text: 'XXXXX-XXXXX' },
    { icon: Mail, text: 'hello@chilldrinks.com' },
    { icon: MapPin, text: 'XXXXXXXXXXXXXXXXXXXXXXXX' },
  ];

  return (
    <footer className="relative bg-linear-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden">
      {/* Decorative blur elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-6 cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Snowflake className="relative w-8 h-8 text-white group-hover:rotate-180 transition-transform duration-700" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Chill<span className="text-blue-400">Drinks</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Crafting the coolest beverages for every moment. From frosty classics to bold new flavors – every sip is an experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <item.icon className="w-5 h-5 mt-0.5 text-blue-400 shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>   
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} ChillDrinks. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;