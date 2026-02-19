import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { articlesAPI } from '../../services/api';
import { useToast } from '../../hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminNewArticle = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    date: new Date().toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast({
        title: 'Помилка',
        description: 'Будь ласка, заповніть всі обов’язкові поля',
        variant: 'destructive',
      });
      return;
    }

    try {
      setLoading(true);
      await articlesAPI.create(formData);
      toast({
        title: 'Успіх!',
        description: 'Статтю успішно створено',
      });
      navigate('/admin/articles');
    } catch (error) {
      toast({
        title: 'Помилка',
        description: 'Не вдалося створити статтю',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link to="/admin/articles">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад до списку
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Створити нову статтю</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">Заголовок *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Введіть заголовок статті"
                required
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Короткий опис *</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Короткий опис статті"
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor="content">Повний текст *</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Повний текст статті"
                rows={10}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="image">URL зображення</Label>
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <Label htmlFor="category">Категорія</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Напр.: Астрономія"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="date">Дата</Label>
              <Input
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="17 лютого 2026"
              />
            </div>

            {formData.image && (
              <div>
                <Label>Попередній перегляд</Label>
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full max-w-md h-48 object-cover rounded-lg mt-2"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            )}

            <div className="flex space-x-4 pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? 'Збереження...' : 'Зберегти статтю'}
              </Button>
              <Link to="/admin/articles">
                <Button type="button" variant="outline">
                  Скасувати
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminNewArticle;