import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Moon, Star, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { sidebarLinks, moonPhases, zodiacSigns } from '../mockData';

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      {/* Moon Phases */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-cyan-50">
          <CardTitle className="text-lg flex items-center">
            <Moon className="w-5 h-5 mr-2 text-cyan-600" />
            Фази Місяця
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {moonPhases.map((phase, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div>
                  <p className="font-medium text-slate-900">{phase.phase}</p>
                  <p className="text-sm text-slate-500">{phase.date}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Moon className="w-5 h-5 text-cyan-600" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Zodiac Signs */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-purple-50">
          <CardTitle className="text-lg flex items-center">
            <Star className="w-5 h-5 mr-2 text-purple-600" />
            Гороскоп
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-3 gap-3">
            {zodiacSigns.slice(0, 6).map((sign) => (
              <Link
                key={sign.name}
                to={sign.link}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-slate-50 transition-all duration-200 hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-xs font-medium text-slate-700 text-center">{sign.name}</span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sidebar Links */}
      {sidebarLinks.map((section, index) => (
        <Card key={index} className="border-slate-200 shadow-sm">
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-base text-slate-900">{section.title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    to={item.link}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50 transition-colors group text-sm"
                  >
                    <span className="text-slate-700 group-hover:text-cyan-600">{item.text}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 transition-all group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </aside>
  );
};

export default Sidebar;