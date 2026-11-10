import React from 'react';
import KombuSealLogo from './KombuSealLogo';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function KombuHeader({ 
  view, 
  onNavigateHome, 
  onOpenCart, 
  cartCount = 3, 
  onOpenProfile,
  activeFlavorName = "Flavor Detail"
}) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EDE6DC] transition-all">
      <div className="max-w-md md:max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {view === 'detail' ? (
          /* Detail Page Header (PDF 1) */
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              aria-label="Back to Home Discover"
              className="p-1.5 -ml-1.5 text-[#2B1D14] hover:bg-[#EFE8DD] rounded-full transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <div 
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <KombuSealLogo className="w-8 h-8" />
              <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-[#2B1D14] font-serif">
                Flavor Detail
              </h1>
            </div>
          </div>
        ) : (
          /* Home Discover Header (PDF 2) */
          <div 
            onClick={onNavigateHome}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <KombuSealLogo className="w-10 h-10 group-hover:rotate-6 transition-transform duration-300" />
            <div>
              <div className="text-xl md:text-2xl font-bold tracking-tight text-[#231710] font-sans leading-tight">
                Kombu Alchemy
              </div>
              <div className="text-[11px] md:text-xs font-bold tracking-[0.2em] text-[#934515] uppercase">
                HOME DISCOVER
              </div>
            </div>
          </div>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {view === 'home' && (
            <button
              onClick={onOpenCart}
              aria-label={`Shopping bag with ${cartCount} items`}
              className="relative p-2 text-[#2B1D14] hover:bg-[#EFE8DD] rounded-full transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-6 h-6 stroke-[1.8]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 bg-[#853813] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs border-2 border-[#FAF7F2] animate-in zoom-in-75">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          <button
            onClick={onOpenProfile}
            aria-label="User Profile"
            className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#EDE6DC] hover:ring-[#853813] transition-all cursor-pointer shadow-xs shrink-0"
          >
            <img
              src="/images/kombu/avatar.jpg"
              alt="Profile avatar"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80";
              }}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
