/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageView, CartItem, Product } from './types';
import { mockProducts } from './data';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Category } from './components/Category';
import { PDP } from './components/PDP';
import { Cart } from './components/Cart';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Navigation handlers
  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (productId: string) => {
    const product = mockProducts.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      handleNavigate('pdp');
    }
  };

  // Cart handlers
  const handleAddToCart = (product: Product, size: string, color: string, quantity: number) => {
    setCart(prev => {
      const existing = prev.findIndex(item => item.product.id === product.id && item.size === size && item.color === color);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing].quantity += quantity;
        return updated;
      }
      return [...prev, { product, size, color, quantity }];
    });
    handleNavigate('cart');
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty < 1) return;
    setCart(prev => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar cartItemCount={cartItemCount} navigate={handleNavigate} />
      
      <main className="flex-grow flex flex-col items-center">
        {currentPage === 'home' && (
          <Home navigate={handleNavigate} onProductClick={handleProductClick} />
        )}
        
        {currentPage === 'category' && (
          <Category onProductClick={handleProductClick} />
        )}
        
        {currentPage === 'pdp' && selectedProduct && (
          <PDP product={selectedProduct} onAddToCart={handleAddToCart} />
        )}

        {currentPage === 'cart' && (
          <Cart cart={cart} navigate={handleNavigate} updateQuantity={handleUpdateQuantity} removeItem={handleRemoveItem} />
        )}
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-200 px-4 sm:px-8 py-3 flex flex-col sm:flex-row justify-between items-center shrink-0 mt-auto w-full gap-4 sm:gap-0">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">SSL SECURE CHECKOUT</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">FREE 30-DAY RETURNS</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5h18M9 3v2m6-2v2M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">BUY NOW, PAY LATER</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[10px] text-slate-400 font-bold tracking-widest">MODERNBOY.COM</span>
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-slate-100 rounded-full"></div>
            <div className="w-5 h-5 bg-slate-100 rounded-full"></div>
            <div className="w-5 h-5 bg-slate-100 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
