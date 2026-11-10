import React, { useState } from 'react';
import { X, Trash2, ArrowRight, Truck, Check, ShieldCheck } from 'lucide-react';

export default function KombuCartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onSelectFlavor,
  onShowToast
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * discountPercent;
  const freeShippingThreshold = 50.00;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shipping = isFreeShipping || cartItems.length === 0 ? 0 : 7.50;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'TRIBE15' || clean === 'KOMBU15' || clean === 'FERMENT15') {
      setDiscountPercent(0.15);
      onShowToast?.('🌿 Promo code TRIBE15 applied (15% off)!');
    } else {
      onShowToast?.('Invalid code. Try "TRIBE15"');
    }
  };

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      onShowToast?.('🎉 Cellar allocation confirmed! Cold-chain dispatch scheduled.');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside 
        aria-label="Cellar Reserve Cart"
        className="relative w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col z-10 border-l border-[#E2D8CC] animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="p-4 border-b border-[#EBE4DA] flex items-center justify-between bg-white/70">
          <div>
            <h2 className="text-lg font-serif font-bold text-[#231710]">
              Cellar Reserve Bag
            </h2>
            <div className="text-xs text-[#7F7167]">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items reserved
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart drawer"
            className="p-2 rounded-full hover:bg-[#F0EAE0] text-[#4A3D34] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="p-3.5 bg-[#EDF3EC] border-b border-[#DCE7DA] text-xs">
          <div className="flex items-center justify-between text-[#1F4A26] font-semibold mb-1.5">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#2E6837]" />
              {isFreeShipping 
                ? 'Free Cold-Chain Freight unlocked!' 
                : `₹${remainingForFreeShipping.toFixed(2)} away from Free Cold Freight`}
            </span>
            <span className="font-bold">{isFreeShipping ? '100%' : `${Math.round((subtotal / freeShippingThreshold) * 100)}%`}</span>
          </div>
          <div className="w-full h-1.5 bg-[#D4E4D2] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#2E6837] rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {checkoutComplete ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E5F3E6] text-[#2E6837] flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#231710]">
                Order Allocated!
              </h3>
              <p className="text-xs md:text-sm text-[#6F6157] max-w-xs mx-auto leading-relaxed">
                Your cold-shipped kombucha box has entered the refrigerated dispatch queue. A confirmation email and tracking link have been sent.
              </p>
              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#853813] text-white text-xs font-bold shadow-xs cursor-pointer"
              >
                Continue Exploring
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="text-4xl">🍃</div>
              <h3 className="font-serif font-bold text-lg text-[#231710]">
                Your cellar bag is empty
              </h3>
              <p className="text-xs text-[#7F7167] max-w-xs mx-auto">
                Discover our botanical micro-batches slow-fermented in toasted white oak vats.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id}
                className="p-3 bg-white rounded-xl border border-[#ECE5DB] shadow-2xs flex gap-3 items-center"
              >
                {/* Thumbnail */}
                <div 
                  onClick={() => {
                    onSelectFlavor?.(item.flavorId);
                    onClose();
                  }}
                  className="w-16 h-16 rounded-lg bg-[#F7F4EE] overflow-hidden shrink-0 cursor-pointer border border-[#EBE4DA]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=150&q=80";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-0.5">
                  <div className="flex items-start justify-between gap-1">
                    <h4 
                      onClick={() => {
                        onSelectFlavor?.(item.flavorId);
                        onClose();
                      }}
                      className="text-xs font-serif font-bold text-[#231710] truncate cursor-pointer hover:text-[#853813]"
                    >
                      {item.name}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#A39589] hover:text-[#B91C1C] p-1 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-[11px] text-[#7F7167]">
                    {item.packTitle}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {/* Quantity controls */}
                    <div className="flex items-center bg-[#F7F4EF] rounded-md border border-[#E2D9CC] text-xs font-semibold">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-2 py-0.5 hover:bg-[#EBE3D6] text-[#231710] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 text-[11px] text-[#231710]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 hover:bg-[#EBE3D6] text-[#231710] cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-xs font-bold text-[#231710]">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {!checkoutComplete && cartItems.length > 0 && (
          <div className="p-4 border-t border-[#EBE4DA] bg-white space-y-3">
            {/* Promo code input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Discount code (try TRIBE15)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-lg bg-[#FAF7F2] border border-[#DDD4C7] focus:outline-hidden focus:ring-1 focus:ring-[#853813] uppercase font-mono"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-lg bg-[#EFE8DE] hover:bg-[#E5DDCF] text-xs font-bold text-[#231710] cursor-pointer"
              >
                Apply
              </button>
            </form>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-[#6F6157] pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#231710]">₹{subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-[#246A31]">
                  <span>Tribe Discount (15%)</span>
                  <span>-₹{discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Refrigerated Freight</span>
                <span>{shipping === 0 ? <strong className="text-[#246A31]">FREE</strong> : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#231710] pt-1 border-t border-[#F0EBE2]">
                <span>Estimated Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleSimulateCheckout}
              disabled={isCheckingOut}
              className="w-full py-3 px-4 rounded-xl bg-[#853813] hover:bg-[#702F10] active:scale-[0.98] text-white font-semibold text-xs md:text-sm tracking-wide flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>Securing Cold Allotment...</span>
              ) : (
                <>
                  <span>Proceed to Cellar Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#7F7167]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3F6647]" />
              <span>Cold-chain guaranteed fresh upon delivery or free replacement.</span>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
