import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import { articles } from '../mockData';
import { Telescope, Sparkles } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Articles */}
          <div className="lg:col-span-2">
            {/* Section Header */}
            <div className="flex items-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Telescope className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Публікації</h2>
                  <p className="text-sm text-slate-500">Останні новини космосу</p>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-12">
              <button className="px-8 py-3 bg-white border-2 border-cyan-500 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center space-x-2">
                <span>Завантажити більше</span>
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;