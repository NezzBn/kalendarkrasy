import React from 'react';
import { Moon, Mail, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'Навігація',
      links: [
        { name: 'Публікації', path: '/' },
        { name: 'Місячний календар', path: '/lunar' },
        { name: 'Гороскоп', path: '/horoscope' },
        { name: 'Сонник', path: '/dreams' }
      ]
    },
    {
      title: 'Корисне',
      links: [
        { name: 'Про нас', path: '/about' },
        { name: 'Контакти', path: '/contact' },
        { name: 'Правила користування', path: '/terms' },
        { name: 'Політика конфіденційності', path: '/privacy' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Moon className="w-10 h-10 text-cyan-400" />
              <div>
                <h3 className="text-2xl font-bold">Світ космосу</h3>
                <p className="text-sm text-cyan-300">Космос навколо нас</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Дізнавайтесь про найновіші відкриття в астрономії, космічних дослідженнях та астрологічних прогнозах.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © 2026 Світ космосу. Всі права захищені.
            </p>
            <p className="text-slate-500 text-sm">
              Зроблено з 💙 в Україні
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;