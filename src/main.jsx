import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Present from './Present'; // kita buat halaman ini nanti
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/present" element={<Present />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
