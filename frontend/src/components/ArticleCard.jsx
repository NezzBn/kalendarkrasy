import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const ArticleCard = ({ article }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200">
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-cyan-500 text-white hover:bg-cyan-600">
            {article.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-cyan-600 transition-colors">
          {article.title}
        </h3>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-sm text-slate-600 line-clamp-3">
          {article.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center text-sm text-slate-500">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{article.date}</span>
        </div>
        <button className="flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors group/btn">
          Читати
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;