import React, { useState, useEffect } from 'react';
import KombuHeader from './KombuHeader';
import KombuHome from './KombuHome';
import KombuDetail from './KombuDetail';
import KombuCartDrawer from './KombuCartDrawer';
import KombuQuizModal from './KombuQuizModal';
import { KOMBU_FLAVORS, INITIAL_CART_ITEMS } from './kombuData';
import { Smartphone, Monitor, CheckCircle, Info } from 'lucide-react';

export default function KombuApp() {
  const [view, setView] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('view') === 'detail' ? 'detail' : 'home';
  });

  const [activeFlavorId, setActiveFlavorId] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('flavor') || 'ginger-turmeric';
  });

  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  
  // Display layout mode: 'mobile' (matches PDF 1:1) or 'wide' (responsive full width)
  const [layoutMode, setLayoutMode] = useState('mobile');

  // Sync URL when view / flavor changes
  useEffect(() => {
    const url = new URL(window.location);
    if (view === 'detail') {
      url.searchParams.set('view', 'detail');
      url.searchParams.set('flavor', activeFlavorId);
    } else {
      url.searchParams.delete('view');
      url.searchParams.delete('flavor');
    }
    window.history.replaceState({}, '', url);
  }, [view, activeFlavorId]);

  // Toast auto-dismiss
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const handleSelectFlavor = (flavorId) => {
    setActiveFlavorId(flavorId);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (newItem) => {
    setCartItems(prev => {
      // Check if item with same flavorId and pack exists
      const existingIdx = prev.findIndex(
        i => i.flavorId === newItem.flavorId && i.packTitle === newItem.packTitle
      );
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + (newItem.quantity || 1)
        };
        return updated;
      } else {
        return [
          {
            id: `cart-${Date.now()}`,
            flavorId: newItem.flavorId,
            name: newItem.name,
            packTitle: newItem.packTitle,
            quantity: newItem.quantity || 1,
            price: newItem.price,
            originalPrice: newItem.originalPrice || null,
            type: newItem.type || 'Single Reserve Bottle',
            image: newItem.image
          },
          ...prev
        ];
      }
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(prev => 
      prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast('Removed item from cellar bag.');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const activeFlavor = KOMBU_FLAVORS.find(f => f.id === activeFlavorId) || KOMBU_FLAVORS[0];

  return (
    <div className="min-h-screen bg-[#F0ECE4] text-[#2B1D14] flex flex-col items-center">
      
      {/* Top Experience Bar (Layout switcher & quick view toggles) */}
      <aside aria-label="Kombu Alchemy Controls" className="w-full bg-[#271911] text-[#E8DDD2] px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-3 shadow-md z-30">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-wider text-[#E8A375] font-serif uppercase">
            Kombu Alchemy
          </span>
          <span className="text-[#8A7768] hidden sm:inline">•</span>
          <span className="text-[#BCAFA3] hidden sm:inline">
            Apothecary Living Kombucha Design System
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* View toggle (Home vs Flavor Detail) */}
          <div className="flex bg-[#3E291C] rounded-lg p-0.5 border border-[#583D2C]">
            <button
              onClick={handleNavigateHome}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                view === 'home'
                  ? 'bg-[#853813] text-white shadow-xs'
                  : 'text-[#D0C2B4] hover:text-white'
              }`}
            >
              Home Discover
            </button>
            <button
              onClick={() => handleSelectFlavor('ginger-turmeric')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                view === 'detail'
                  ? 'bg-[#853813] text-white shadow-xs'
                  : 'text-[#D0C2B4] hover:text-white'
              }`}
            >
              Flavor Detail
            </button>
          </div>

          {/* Quick Flavor Switcher when in Detail view */}
          {view === 'detail' && (
            <select
              value={activeFlavorId}
              onChange={(e) => handleSelectFlavor(e.target.value)}
              className="bg-[#3E291C] text-[#E8DDD2] text-[11px] px-2 py-1 rounded-lg border border-[#583D2C] focus:outline-hidden cursor-pointer"
            >
              {KOMBU_FLAVORS.map(f => (
                <option key={f.id} value={f.id}>{f.name}</option>
              ))}
            </select>
          )}

          {/* Device Frame Mode Toggle */}
          <div className="flex bg-[#3E291C] rounded-lg p-0.5 border border-[#583D2C]">
            <button
              onClick={() => setLayoutMode('mobile')}
              title="Mobile Frame (PDF 1:1 view)"
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                layoutMode === 'mobile'
                  ? 'bg-[#853813] text-white shadow-xs'
                  : 'text-[#D0C2B4] hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setLayoutMode('wide')}
              title="Expanded Responsive View"
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                layoutMode === 'wide'
                  ? 'bg-[#853813] text-white shadow-xs'
                  : 'text-[#D0C2B4] hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <main className={`w-full transition-all duration-300 ${
        layoutMode === 'mobile'
          ? 'max-w-[430px] my-4 md:my-8 rounded-[40px] shadow-2xl border-[8px] border-[#271911] overflow-hidden bg-[#FAF7F2]'
          : 'max-w-4xl my-0 min-h-screen bg-[#FAF7F2] shadow-xl'
      }`}>
        {/* Header Bar */}
        <KombuHeader
          view={view}
          onNavigateHome={handleNavigateHome}
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={totalCartCount}
          onOpenProfile={() => showToast('🌿 Cellar Member: Elena Rostova (Verified Subscriber)')}
          activeFlavorName={activeFlavor.name}
        />

        {/* View Router */}
        {view === 'home' ? (
          <KombuHome
            onSelectFlavor={handleSelectFlavor}
            onOpenQuiz={() => setIsQuizOpen(true)}
            onAddToCart={handleAddToCart}
            onShowToast={showToast}
          />
        ) : (
          <KombuDetail
            flavorId={activeFlavorId}
            onAddToCart={handleAddToCart}
            onShowToast={showToast}
            onNavigateHome={handleNavigateHome}
          />
        )}
      </main>

      {/* Cart Slide-Over Drawer */}
      <KombuCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onSelectFlavor={handleSelectFlavor}
        onShowToast={showToast}
      />

      {/* Microbiome Quiz Modal */}
      <KombuQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectFlavor={handleSelectFlavor}
        onShowToast={showToast}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <aside 
          aria-label="Notifications"
          className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#271911]/95 text-white px-4 py-2.5 rounded-full shadow-2xl text-xs md:text-sm font-medium border border-[#E8A375]/40 backdrop-blur-md flex items-center gap-2 animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <CheckCircle className="w-4 h-4 text-[#86EFAC] shrink-0" />
          <span>{toastMessage}</span>
        </aside>
      )}

    </div>
  );
}
