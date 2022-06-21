import './scss/app.scss';
import React from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/home';
import Cart from './pages/cart';
import Page404 from './pages/page404';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
