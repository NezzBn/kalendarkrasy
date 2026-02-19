import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, Calendar } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { articlesAPI } from '../../services/api';
import { useToast } from '../../hooks/use-toast';

const AdminArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const data = await articlesAPI.getAll();
      setArticles(data);
    } catch (error) {
      toast({
        title: 'Помилка',
        description: 'Не вдалося завантажити статті',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Ви впевнені, що хочете видалити цю статтю?')) {
      return;
    }

    try {
      await articlesAPI.delete(id);
      toast({
        title: 'Успіх',
        description: 'Статтю успішно видалено',
      });
      fetchArticles();
    } catch (error) {
      toast({
        title: 'Помилка',
        description: 'Не вдалося видалити статтю',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Управління статтями</h1>
          <p className="text-slate-500 mt-1">Створюйте та редагуйте публікації</p>
        </div>
        <Link to="/admin/articles/new">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Нова стаття
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10">Завантаження...</div>
      ) : (
        <div className="grid gap-4">
          {articles.map((article) => (
            <Card key={article.id || article._id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-4 flex-1">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </span>
                        <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <Link to={`/admin/articles/edit/${article._id}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(article._id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminArticles;