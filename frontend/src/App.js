import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminArticles from './pages/admin/AdminArticles';
import AdminNewArticle from './pages/admin/AdminNewArticle';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lunar" element={<HomePage />} />
          <Route path="/horoscope" element={<HomePage />} />
          <Route path="/holidays" element={<HomePage />} />
          <Route path="/dreams" element={<HomePage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/articles" element={<AdminArticles />} />
          <Route path="/admin/articles/new" element={<AdminNewArticle />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;