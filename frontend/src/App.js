import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;