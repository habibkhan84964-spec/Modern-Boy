import React, { useState } from 'react';
import { Product } from '../types';
import { Star, ShieldCheck, Truck, RotateCcw, Share2, Heart } from 'lucide-react';

interface PDPProps {
  product: Product;
  onAddToCart: (product: Product, size: string, color: string, qty: number) => void;
}

export const PDP: React.FC<PDPProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [errorLine, setErrorLine] = useState('');

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorLine('Don’t forget your size!');
      return;
    }
    setErrorLine('');
    onAddToCart(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-slate-50 w-full min-h-screen">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        {/* Breadcrumbs */}
        <nav className="flex gap-2 text-[10px] text-slate-500 uppercase tracking-widest mb-6">
          <span>Home</span> / <span>{product.ageGroup || 'Big Boy (6-12)'}</span> / <span className="text-indigo-600 font-bold">{product.category}</span> / <span>{product.name}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {[1,2,3].map((i) => (
                <button key={i} className={`w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${i === 1 ? 'border-indigo-600' : 'border-transparent hover:border-slate-300'}`}>
                   <img src={product.image} alt="thumbnail" className={`object-cover w-full h-full ${i !== 1 && 'opacity-80 hover:opacity-100'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details right panel */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight leading-tight">{product.name}</h1>
              <span className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
            </div>
            
            <div className="flex items-center gap-1 mb-6 text-xs">
              <span className="text-amber-400">★</span>
              <span className="text-[10px] font-bold text-slate-500">{product.rating || '4.9'} ({product.reviews} reviews)</span>
            </div>

            <p className="text-slate-600 text-sm mb-8 leading-relaxed max-w-prose">
              {product.description}
            </p>

            <hr className="border-slate-100 mb-6" />

            {/* Color Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-bold uppercase text-slate-400 tracking-widest">Color: <span className="text-indigo-600">{selectedColor}</span></span>
              </div>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? 'border-indigo-600 scale-110' : 'border-transparent ring-1 ring-slate-200 hover:scale-105'}`}
                    style={{ backgroundColor: color.toLowerCase() === 'black' ? '#0f172a' : color.toLowerCase() === 'navy' ? '#1e3a8a' : color.toLowerCase().includes('blue') ? '#3b82f6' : color.toLowerCase() === 'green' ? '#22c55e' : '#f8fafc' }}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-bold uppercase text-slate-400 tracking-widest">Select Size</span>
                <button className="text-[10px] uppercase font-bold text-indigo-600 hover:underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-1 border rounded text-xs text-center font-bold transition-colors ${selectedSize === size ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {errorLine && <p className="text-red-500 text-[11px] mt-2 font-bold uppercase tracking-wide">{errorLine}</p>}
            </div>

            {/* Add to Cart Actions */}
            <div className="flex gap-4 mb-8">
              <div className="w-24 border border-slate-200 rounded-lg flex items-center justify-between px-3 bg-slate-50">
                <button className="text-slate-500 hover:text-indigo-600 text-lg font-medium" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="font-bold text-sm text-slate-800">{quantity}</span>
                <button className="text-slate-500 hover:text-indigo-600 text-lg font-medium" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-widest rounded-lg py-4 transition-colors shadow-lg"
              >
                Add To Bag
              </button>
              <button className="w-12 sm:w-14 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:text-red-500 hover:border-red-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>

            {/* Trust Signals */}
            <div className="bg-slate-50 p-4 rounded-xl space-y-3 mb-8 border border-slate-100">
              <div className="flex items-center gap-3 text-xs text-slate-600">
                 <Truck className="text-indigo-600" size={16} />
                 <span><strong className="text-slate-800">Free Standard Shipping</strong> on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                 <RotateCcw className="text-indigo-600" size={16} />
                 <span><strong className="text-slate-800">Free 30-Day Returns</strong> via mail or in-store</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                 <ShieldCheck className="text-green-500" size={16} />
                 <span><strong className="text-slate-800">Secure Checkout</strong> via Apple Pay or Card</span>
              </div>
            </div>

            {/* Details Accordion */}
            <div className="border-t border-slate-200">
               <details className="group" open>
                 <summary className="flex justify-between items-center font-bold text-xs uppercase tracking-widest cursor-pointer list-none py-4 text-slate-800">
                   <span>Product Details</span>
                   <span className="transition-transform group-open:rotate-180 text-slate-400">
                     <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><polyline points="6 9 12 15 18 9"></polyline></svg>
                   </span>
                 </summary>
                 <ul className="text-slate-600 text-sm pb-6 list-disc pl-5 space-y-2 marker:text-slate-300">
                   <li>100% premium combed cotton</li>
                   <li>Tag-free neckline for itch-free play</li>
                   <li>Machine washable (cold wash recommended)</li>
                   <li>Pre-shrunk to maintain fit</li>
                 </ul>
               </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
