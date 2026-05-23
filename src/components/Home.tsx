import React from 'react';
import { PageView } from '../types';
import { mockProducts } from '../data';
import { ArrowRight, Star } from 'lucide-react';

interface HomeProps {
  navigate: (page: PageView) => void;
  onProductClick: (productId: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate, onProductClick }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 w-full overflow-hidden">
      <main className="flex-1 p-4 sm:p-8 flex flex-col gap-8 w-full max-w-7xl mx-auto">
        {/* Hero Segment */}
        <div className="h-48 sm:h-64 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-6 sm:p-8 flex justify-between items-center relative overflow-hidden shrink-0">
          <div className="z-10">
            <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold backdrop-blur-sm">New Season Collection</span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 leading-tight uppercase">Elevate<br/>His Style.</h1>
            <p className="text-indigo-100 text-sm mt-2 font-medium">Designed for the playground, built for the spotlight.</p>
            <button 
              onClick={() => navigate('category')}
              className="mt-4 bg-white text-indigo-600 hover:bg-slate-100 px-6 py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg transition-colors"
            >
              Shop Now
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 flex items-end justify-center">
             <div className="w-48 h-48 sm:w-64 sm:h-64 bg-indigo-400/30 rounded-full blur-3xl absolute -bottom-10"></div>
             <div className="text-white/10 font-black text-[120px] sm:text-[180px] leading-none select-none">2026</div>
          </div>
        </div>

        {/* Shop By Age Category */}
        <section className="w-full">
          <h2 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest mb-4">Shop by Age</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Toddler (2-5)', 'Little Boy (6-8)', 'Big Boy (9-12)', 'Teen (13-18)'].map((age, i) => (
              <div 
                key={age}
                onClick={() => navigate('category')}
                className="group cursor-pointer rounded-xl overflow-hidden relative aspect-[3/4] bg-slate-200 flex items-center justify-center p-4 text-center hover:shadow-lg transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                <img 
                  src={`https://images.unsplash.com/photo-${['1503919005314-30d93d07d823','1622290291468-a28f7a7dc6a8','1618331835717-801e976710b2','1584448270104-583eb1ebde92'][i]}?w=600&auto=format&fit=crop&q=80`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={age}
                />
                <span className="relative z-20 text-white font-bold text-sm tracking-widest uppercase transform translate-y-2 group-hover:translate-y-0 transition-transform">{age}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Now */}
        <section className="w-full pb-8">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest">Trending Now</h2>
            <button onClick={() => navigate('category')} className="text-indigo-600 font-bold hover:underline text-[10px] uppercase tracking-wider">View All</button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {mockProducts.slice(0, 4).map(product => (
              <div 
                key={product.id} 
                className="group cursor-pointer flex flex-col"
                onClick={() => onProductClick(product.id)}
              >
                <div className="relative aspect-[3/4] bg-slate-200 rounded-xl overflow-hidden mb-3">
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm z-10">
                      {product.badge}
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-slate-900/40 to-transparent">
                    <button className="w-full bg-white/90 text-slate-900 text-xs font-bold py-2 rounded shadow hover:bg-white uppercase tracking-wider">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-slate-800 text-sm leading-tight truncate">{product.name}</h4>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-slate-600">${product.price.toFixed(2)}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-amber-400 text-[10px]">★</span>
                      <span className="text-[10px] font-bold text-slate-400">{product.rating || '4.9'} ({product.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
