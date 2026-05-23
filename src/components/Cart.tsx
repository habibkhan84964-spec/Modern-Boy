import React from 'react';
import { CartItem, PageView } from '../types';
import { X, Trash2, ShieldCheck } from 'lucide-react';

interface CartProps {
  cart: CartItem[];
  navigate: (page: PageView) => void;
  updateQuantity: (index: number, newQty: number) => void;
  removeItem: (index: number) => void;
}

export const Cart: React.FC<CartProps> = ({ cart, navigate, updateQuantity, removeItem }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const isFreeShipping = subtotal >= 50;
  const shortfall = isFreeShipping ? 0 : 50 - subtotal;

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-800 mb-4">Your Bag is Empty</h2>
        <p className="text-slate-500 mb-8 font-medium">Looks like you haven't added anything to your cart yet.</p>
        <button 
          onClick={() => navigate('category')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full uppercase tracking-widest text-xs shadow-lg transition-transform hover:scale-105"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-slate-50 min-h-screen w-full">
      <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase mb-8 border-b border-slate-200 pb-4">Shopping Bag</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="lg:w-2/3 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div key={`${item.product.id}-${index}`} className="flex gap-4 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                <div className="w-20 h-28 sm:w-24 sm:h-32 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer border border-slate-200">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm leading-tight mb-1 cursor-pointer hover:text-indigo-600">{item.product.name}</h3>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Color: {item.color} | Size: {item.size}</p>
                    </div>
                    <span className="font-bold text-slate-900">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-slate-200 rounded-md bg-slate-50">
                      <button className="px-3 py-1 text-slate-600 hover:text-indigo-600 cursor-pointer" onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                      <span className="px-3 py-1 font-bold text-xs">{item.quantity}</span>
                      <button className="px-3 py-1 text-slate-600 hover:text-indigo-600 cursor-pointer" onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                    </div>
                    <button 
                      onClick={() => removeItem(index)}
                      className="text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 mb-6 pb-4 border-b border-slate-100">Order Summary</h2>
            
            {/* Free Shipping Progress */}
            <div className="mb-6 bg-indigo-50 p-4 rounded-xl border border-indigo-100">
               {isFreeShipping ? (
                 <p className="text-indigo-700 font-bold text-xs flex items-center gap-2 uppercase tracking-wide">
                   🎉 You've unlocked Free Shipping!
                 </p>
               ) : (
                 <>
                   <p className="text-indigo-800 font-semibold text-xs mb-2">
                     Add <span className="font-bold">${shortfall.toFixed(2)}</span> more for free shipping!
                   </p>
                   <div className="w-full bg-indigo-200/50 rounded-full h-1.5">
                     <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: `${(subtotal / 50) * 100}%` }}></div>
                   </div>
                 </>
               )}
            </div>

            <div className="space-y-3 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100">
              <div className="flex justify-between">
                <span className="text-xs font-semibold">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-semibold">Estimated Shipping</span>
                <span className="font-semibold text-green-600">{isFreeShipping ? 'FREE' : '$5.99'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-semibold">Tax</span>
                <span className="text-xs font-medium text-slate-400">Calculated at checkout</span>
              </div>
            </div>

            <div className="flex justify-between font-black text-lg text-slate-900 mb-6">
              <span className="uppercase tracking-widest text-sm self-center">Total</span>
              <span>${(subtotal + (isFreeShipping ? 0 : 5.99)).toFixed(2)}</span>
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-widest py-4 rounded-lg shadow-lg hover:shadow-xl transition-all mb-3">
              Secure Checkout
            </button>
            <button 
              className="w-full bg-white text-slate-700 border border-slate-300 font-bold text-[10px] uppercase tracking-widest py-3 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => navigate('category')}
            >
              Continue Shopping
            </button>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-500">
                 <ShieldCheck size={16} className="text-green-500" />
                 <span className="text-[10px] font-bold uppercase tracking-wider">SSL Encrypted Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
