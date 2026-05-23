import React from 'react';
import { PageView } from '../types';
import { mockProducts } from '../data';
import { Filter, ChevronDown, Star } from 'lucide-react';

interface CategoryProps {
  onProductClick: (productId: string) => void;
}

export const Category: React.FC<CategoryProps> = ({ onProductClick }) => {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden max-w-7xl mx-auto w-full">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex items-center justify-between border-y border-slate-200 py-3 px-4 bg-white">
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Filter size={16} /> Filters
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg cursor-pointer">
            Sort: <span className="text-slate-900">Popular</span> <ChevronDown size={14} />
          </div>
        </div>

        {/* Sidebar Filters */}
        <aside className="hidden md:flex w-64 bg-white border-r border-slate-200 p-6 flex-col gap-8 flex-shrink-0">
          <div className="sticky top-24">
            <div>
              <h3 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest mb-4">Shop By Category</h3>
              <div className="flex flex-col gap-2.5 text-sm">
                <label className="flex justify-between hover:text-indigo-600 cursor-pointer text-slate-700"><span className="flex items-center gap-2"><input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 border-slate-300" defaultChecked /> T-Shirts & Tops</span><span className="text-slate-400 text-xs">(12)</span></label>
                <label className="flex justify-between hover:text-indigo-600 cursor-pointer text-slate-700"><span className="flex items-center gap-2"><input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 border-slate-300" /> Jeans & Bottoms</span><span className="text-slate-400 text-xs">(8)</span></label>
                <label className="flex justify-between hover:text-indigo-600 cursor-pointer text-slate-700"><span className="flex items-center gap-2"><input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 border-slate-300" /> Outerwear</span><span className="text-slate-400 text-xs">(5)</span></label>
                <label className="flex justify-between hover:text-indigo-600 cursor-pointer text-slate-700"><span className="flex items-center gap-2"><input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 border-slate-300" /> Activewear</span><span className="text-slate-400 text-xs">(9)</span></label>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest mb-4">Sizes</h3>
              <div className="grid grid-cols-3 gap-2">
                <button className="border border-slate-200 py-2 text-xs rounded hover:border-indigo-600 text-slate-600 transition-colors">6Y</button>
                <button className="border border-indigo-600 bg-indigo-50 py-2 text-xs rounded font-bold text-indigo-700">8Y</button>
                <button className="border border-slate-200 py-2 text-xs rounded hover:border-indigo-600 text-slate-600 transition-colors">10Y</button>
                <button className="border border-slate-200 py-2 text-xs rounded hover:border-indigo-600 text-slate-600 transition-colors">12Y</button>
                <button className="border border-slate-200 py-2 text-xs rounded hover:border-indigo-600 text-slate-600 transition-colors">14Y</button>
                <button className="border border-slate-200 py-2 text-xs rounded hover:border-indigo-600 text-slate-600 transition-colors">16Y</button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest mb-4">Price</h3>
              <div className="flex flex-col gap-2.5 text-sm">
                <label className="flex items-center gap-2 text-slate-700 cursor-pointer"><input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /> Under $20</label>
                <label className="flex items-center gap-2 text-slate-700 cursor-pointer"><input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /> $20 - $40</label>
                <label className="flex items-center gap-2 text-slate-700 cursor-pointer"><input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /> Over $40</label>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest mb-4">AI Style Profile</h3>
              <div className="bg-indigo-50 p-4 rounded-xl">
                <p className="text-[10px] text-indigo-800 leading-relaxed mb-3">
                  Based on your search for "Durable Activewear", Gemini recommends focusing on our <strong>Flex-Tough</strong> denim line.
                </p>
                <button className="w-full bg-indigo-600 text-white text-[10px] font-bold py-2 rounded-lg uppercase tracking-wider hover:bg-indigo-700 transition">Update Profile</button>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Feed */}
        <main className="flex-1 p-4 sm:p-8 flex flex-col gap-8 overflow-hidden">
          {/* Product Header */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-end shrink-0 gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Boys' Signature Denim <span className="text-sm font-normal text-slate-400 ml-2">({mockProducts.length} Results)</span></h2>
              <div className="flex gap-2 mt-2 text-[10px] text-slate-500 uppercase tracking-widest">
                <span>Home</span> / <span>Big Boy (6-12)</span> / <span className="text-indigo-600 font-bold">Jeans & Bottoms</span>
              </div>
            </div>
            <div className="hidden sm:flex gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-lg cursor-pointer">
                Sort: <span className="text-slate-900">Newest Arrivals</span>
                <ChevronDown size={14} className="text-slate-400" />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 overflow-hidden">
            {mockProducts.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer"
                onClick={() => onProductClick(product.id)}
              >
                <div className="aspect-[3/4] bg-slate-200 rounded-xl mb-3 relative overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider z-10">
                      {product.badge}
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <button className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-slate-900 hover:bg-white flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round"/></svg>
                  </button>
                </div>
                <h4 className="text-sm font-bold text-slate-800 truncate">{product.name}</h4>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm font-medium text-slate-600">${product.price.toFixed(2)}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400 text-xs">★</span>
                    <span className="text-[10px] font-bold text-slate-400">{product.rating || '4.8'} ({product.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Load More
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
