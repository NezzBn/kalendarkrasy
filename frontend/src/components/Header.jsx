import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'ПУБЛІКАЦІЇ', path: '/' },
    { name: 'МІСЯЧНИЙ КАЛЕНДАР', path: '/lunar' },
    { name: 'ГОРОСКОП', path: '/horoscope' },
    { name: 'СВЯТА', path: '/holidays' },
    { name: 'СОННИК', path: '/dreams' }
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Moon className="w-10 h-10 text-cyan-400 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-cyan-400 opacity-20 blur-xl rounded-full"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Світ космосу</h1>
              <p className="text-xs text-cyan-300">Космос навколо нас</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-4 py-2 text-sm font-medium text-cyan-100 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-slate-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-sm font-medium text-cyan-100 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;