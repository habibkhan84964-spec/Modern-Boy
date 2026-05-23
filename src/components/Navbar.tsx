import React from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  cartItemCount: number;
  navigate: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemCount, navigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      {/* Promo Bar */}
      <div className="bg-indigo-900 text-white text-[11px] py-1.5 px-6 flex justify-between items-center tracking-wider uppercase font-medium">
        <span>Free standard shipping & returns on all orders over $50</span>
        <div className="hidden sm:flex gap-4">
          <span className="opacity-80">Track Order</span>
          <span className="opacity-80">Help & FAQ</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-500 hover:text-slate-900 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => navigate('home')}
          >
            <span className="text-2xl font-black tracking-tighter text-indigo-700 italic">
              MODERN BOY
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex space-x-6 text-sm font-semibold uppercase tracking-wide">
            <button onClick={() => navigate('category')} className="text-slate-900 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 px-1 py-1">New Arrivals</button>
            <button onClick={() => navigate('category')} className="text-slate-500 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 px-1 py-1">Toddler (2-5)</button>
            <button onClick={() => navigate('category')} className="text-slate-900 font-bold border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 px-1 py-1">Big Boy (6-12)</button>
            <button onClick={() => navigate('category')} className="text-slate-500 border-b-2 border-transparent hover:border-indigo-600 hover:text-indigo-600 px-1 py-1">Teens (13-18)</button>
            <button onClick={() => navigate('category')} className="text-red-500 hover:text-red-600 px-1 py-1">Sale</button>
          </nav>

          {/* Right section (Search + Cart) */}
          <div className="flex items-center space-x-4">
            <button className="text-slate-500 hover:text-slate-900 p-2 hidden sm:block">
              <Search size={20} />
            </button>
            <button 
              className="text-slate-500 hover:text-slate-900 p-2 relative"
              onClick={() => navigate('cart')}
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-[9px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-indigo-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <button onClick={() => { navigate('category'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm font-semibold uppercase tracking-wide text-slate-900 hover:bg-slate-50">New Arrivals</button>
            <button onClick={() => { navigate('category'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm font-semibold uppercase tracking-wide text-slate-500 hover:bg-slate-50">Toddler (2-5)</button>
            <button onClick={() => { navigate('category'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm font-semibold uppercase tracking-wide text-slate-900 hover:bg-slate-50">Big Boy (6-12)</button>
            <button onClick={() => { navigate('category'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm font-semibold uppercase tracking-wide text-slate-500 hover:bg-slate-50">Teens (13-18)</button>
            <button onClick={() => { navigate('category'); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm font-semibold uppercase tracking-wide text-red-500 hover:bg-slate-50">Sale</button>
          </div>
        </div>
      )}
    </header>
  );
};
