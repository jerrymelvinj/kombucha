import React, { useState } from 'react';
import { KOMBU_FLAVORS } from './kombuData';
import { 
  Share2, 
  Bookmark, 
  Star, 
  Truck, 
  RefreshCw, 
  ChevronDown, 
  UtensilsCrossed, 
  Activity, 
  Check, 
  Sparkles,
  Award,
  Zap,
  ShoppingBag
} from 'lucide-react';

export default function KombuDetail({ 
  flavorId = 'ginger-turmeric', 
  onAddToCart,
  onShowToast,
  onNavigateHome
}) {
  const flavor = KOMBU_FLAVORS.find(f => f.id === flavorId) || KOMBU_FLAVORS[0];

  const [selectedPackId, setSelectedPackId] = useState('pack-12');
  const [isNutritionalOpen, setIsNutritionalOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const selectedPack = flavor.packs.find(p => p.id === selectedPackId) || flavor.packs[0];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Kombu Alchemy - ${flavor.name}`,
          text: `Check out ${flavor.name} crafted with ${flavor.oakAging} by Kombu Alchemy.`,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or share dismissed
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      onShowToast?.('✨ Link copied to clipboard!');
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(prev => !prev);
    onShowToast?.(
      !isBookmarked 
        ? `🔖 Saved ${flavor.name} to your Cellar Favorites!` 
        : `Removed ${flavor.name} from Favorites.`
    );
  };

  const handleAddCurrentPack = () => {
    onAddToCart({
      flavorId: flavor.id,
      name: flavor.name,
      packTitle: selectedPack.title,
      price: selectedPack.price,
      originalPrice: selectedPack.originalPrice,
      quantity: quantity,
      image: flavor.thumbnail,
      type: selectedPack.type === 'subscription' ? 'Subscription (Every 2 Weeks)' : 'Cellar Reserve Box'
    });
    onShowToast?.(`Added ${quantity > 1 ? `${quantity}x ` : ''}${selectedPack.title} (${flavor.name}) to cart!`);
  };

  return (
    <div className="w-full bg-[#FAF7F2] text-[#2B1D14] pb-28 selection:bg-[#E8D4C3]">
      <div className="max-w-md md:max-w-2xl mx-auto px-4 pt-4 space-y-6">

        {/* 1. TOP STATUS ROW: Batch Pill + Share + Bookmark */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2E8] border border-[#D5E4D0] text-[#2F5E36] text-[11px] font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#2F5E36] animate-pulse" />
            <span>RAW OAK-AGED BATCH {flavor.batchNo}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShare}
              aria-label="Share Flavor"
              className="p-2 text-[#4A3D34] hover:bg-[#EFE8DD] rounded-full transition-colors cursor-pointer"
            >
              <Share2 className="w-5 h-5 stroke-[1.8]" />
            </button>
            <button
              onClick={handleBookmark}
              aria-label="Save to favorites"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'text-[#8C3A12] bg-[#F7EBE2]' 
                  : 'text-[#4A3D34] hover:bg-[#EFE8DD]'
              }`}
            >
              <Bookmark className={`w-5 h-5 stroke-[1.8] ${isBookmarked ? 'fill-[#8C3A12]' : ''}`} />
            </button>
          </div>
        </div>


        {/* 2. HERO BOTTLE CARD & INGREDIENT PILLS */}
        <div className="space-y-3">
          <div className="relative rounded-2xl overflow-hidden bg-[#ECE6DC] border border-[#E0D8CB] aspect-4/3 flex items-center justify-center p-4 shadow-xs">
            {/* Bottle Image */}
            <img
              src={flavor.heroImage}
              alt={flavor.heroAlt}
              className="w-full h-full object-cover object-center rounded-xl"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80";
              }}
            />

            {/* Floating Badges (Top Right) */}
            <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FCEDE4]/95 backdrop-blur-xs border border-[#F3D1C2] text-[#934515] text-[11px] font-bold shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#934515]" />
                {flavor.awardBadge}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8F5EB]/95 backdrop-blur-xs border border-[#CEEAD4] text-[#1E6B34] text-[11px] font-bold shadow-xs">
                <Activity className="w-3.5 h-3.5 text-[#1E6B34]" />
                {flavor.cfu}
              </span>
            </div>
          </div>

          {/* Botanical Ingredient Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {flavor.ingredients.map((ing) => (
              <span
                key={ing.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5DFD4] text-xs font-medium text-[#4A3D34] shadow-2xs"
              >
                <span>{ing.icon}</span>
                <span>{ing.name}</span>
              </span>
            ))}
          </div>
        </div>


        {/* 3. RATINGS, TITLE & DESCRIPTION */}
        <div className="space-y-1.5 text-left">
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-[#6F6258]">
            <div className="flex text-[#E28D2B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#E28D2B]" />
              ))}
            </div>
            <span className="font-bold text-[#231710]">{flavor.rating}</span>
            <span>({flavor.reviewsCount.toLocaleString()} verified cellar sips)</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#231710] tracking-tight">
            {flavor.name}
          </h2>

          {/* Subtitle */}
          <p className="text-sm font-medium text-[#65574D]">
            {flavor.tagline}
          </p>

          <p className="text-xs md:text-sm text-[#73655B] leading-relaxed pt-1">
            {flavor.extendedDescription}
          </p>
        </div>


        {/* 4. TASTING PROFILE GAUGES */}
        <div className="bg-white rounded-2xl p-5 border border-[#ECE5DB] shadow-xs space-y-4 text-left">
          <div className="flex items-center justify-between border-b border-[#F2EDE6] pb-2.5">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#8C3A12] uppercase">
              TASTING PROFILE
            </span>
            <span className="text-xs font-semibold text-[#4A3D34]">
              {flavor.tastingProfile.style}
            </span>
          </div>

          {/* 2x2 Gauges Grid */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-3.5">
            {flavor.tastingProfile.gauges.map((gauge) => (
              <div key={gauge.label} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#685A50] font-medium">{gauge.label}</span>
                  <span className="font-bold text-[#231710]">{gauge.valueText}</span>
                </div>
                {/* Gauge bar track */}
                <div className="w-full h-1.5 bg-[#EDE8E0] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#2B1D14] rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${gauge.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* 5. CHOOSE YOUR CELLAR PACK */}
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-serif font-bold text-[#231710]">
              Choose Your Cellar Pack
            </h3>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-[#8C3A12]">
              <Truck className="w-3.5 h-3.5 text-[#8C3A12]" />
              COLD-CHAIN DELIVERED
            </span>
          </div>

          {/* Pack Options */}
          <div className="space-y-2.5">
            {flavor.packs.map((pack) => {
              const isSelected = selectedPackId === pack.id;
              return (
                <div
                  key={pack.id}
                  onClick={() => setSelectedPackId(pack.id)}
                  className={`relative p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#FFFDFC] border-[#E28557] ring-1 ring-[#E28557] shadow-sm'
                      : 'bg-white border-[#ECE5DB] hover:border-[#DECFC0]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Radio circle */}
                    <div className="pt-0.5">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected ? 'border-[#8C3A12]' : 'border-[#C8BFB5]'
                      }`}>
                        {isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#8C3A12]" />
                        )}
                      </div>
                    </div>

                    {/* Pack Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm md:text-base text-[#231710]">
                            {pack.title}
                          </span>
                          {pack.badge && (
                            <span className="px-2 py-0.5 rounded-full bg-[#FCEDE4] text-[#934515] text-[10px] font-bold uppercase tracking-wider">
                              {pack.badge}
                            </span>
                          )}
                        </div>

                        <div className="flex items-baseline gap-1.5">
                          <span className="text-base font-bold text-[#231710]">
                            ${pack.price.toFixed(2)}
                          </span>
                          {pack.originalPrice && (
                            <span className="text-xs text-[#9E9085] line-through">
                              ${pack.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-xs text-[#6F6157] leading-relaxed">
                        {pack.subtitle}
                      </p>

                      {pack.perks && (
                        <div className="flex items-center gap-1.5 pt-1 text-[11px] text-[#8C3A12] font-medium">
                          <RefreshCw className="w-3 h-3 shrink-0" />
                          <span>{pack.perks}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* 6. INSIDE EVERY SIP */}
        <div className="bg-white rounded-2xl p-5 border border-[#ECE5DB] shadow-xs text-left space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#8C3A12] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#8C3A12]" />
              <span>Inside Every Sip</span>
            </div>
            <p className="text-xs md:text-sm text-[#685A50] leading-relaxed">
              {flavor.insideEverySip.headline}
            </p>
          </div>

          <div className="space-y-3 pt-1">
            {flavor.insideEverySip.benefits.map((benefit, idx) => (
              <div 
                key={benefit.id} 
                className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DD]"
              >
                <div className="w-7 h-7 rounded-lg bg-[#EBF2E8] text-[#2E5A36] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx === 0 ? '🦠' : idx === 1 ? '🫚' : '✨'}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs md:text-sm font-bold text-[#231710]">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-[#6F6157] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* 7. 28-DAY OAK FERMENTATION TIMELINE */}
        <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E5DFD4] shadow-xs text-left space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🪵</span>
              <h3 className="font-serif font-bold text-base md:text-lg text-[#231710]">
                {flavor.fermentationTimeline.daysTotal}
              </h3>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-[#EDE6DC] text-[#5C4D43] text-[10px] font-bold uppercase tracking-wider">
              {flavor.fermentationTimeline.caskMethod}
            </span>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-3 gap-2">
            {flavor.fermentationTimeline.phases.map((phase) => (
              <div 
                key={phase.span}
                className="bg-white rounded-xl p-2.5 border border-[#E8E2D7] text-center space-y-1"
              >
                <div className="text-[10px] font-bold text-[#8C3A12] uppercase tracking-wider">
                  {phase.span}
                </div>
                <div className="text-xs font-bold text-[#231710] leading-tight">
                  {phase.title}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#6F6157] text-center leading-relaxed">
            {flavor.fermentationTimeline.description}
          </p>
        </div>


        {/* 8. CELLAR NUTRITIONAL VERIFICATION (Accordion) */}
        <div className="bg-white rounded-2xl border border-[#ECE5DB] shadow-xs overflow-hidden text-left">
          <button
            onClick={() => setIsNutritionalOpen(prev => !prev)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-[#FAF7F2] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-base">📋</span>
              <span className="font-serif font-bold text-sm md:text-base text-[#231710]">
                Cellar Nutritional Verification
              </span>
            </div>
            <ChevronDown className={`w-5 h-5 text-[#6F6157] transition-transform duration-200 ${
              isNutritionalOpen ? 'rotate-180' : ''
            }`} />
          </button>

          {isNutritionalOpen && (
            <div className="p-4 pt-0 border-t border-[#F2EDE6] text-xs space-y-3 bg-[#FCFAF7]">
              <div className="grid grid-cols-2 gap-2 pt-3">
                <div className="p-2.5 bg-white rounded-lg border border-[#EDE7DE]">
                  <div className="text-[#7F7167]">Serving Size</div>
                  <div className="font-bold text-[#231710]">{flavor.nutrition.servingSize}</div>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-[#EDE7DE]">
                  <div className="text-[#7F7167]">Calories / Bottle</div>
                  <div className="font-bold text-[#231710]">{flavor.nutrition.calories} kcal</div>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-[#EDE7DE]">
                  <div className="text-[#7F7167]">Sugar (Natural Ferment)</div>
                  <div className="font-bold text-[#231710]">{flavor.nutrition.sugar}</div>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-[#EDE7DE]">
                  <div className="text-[#7F7167]">Live Probiotic CFU</div>
                  <div className="font-bold text-[#1F5C2F]">{flavor.nutrition.cfuCount}</div>
                </div>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-[#EDE7DE] space-y-1">
                <div className="text-[#7F7167]">Organic Ferment Acids</div>
                <div className="font-semibold text-[#231710]">{flavor.nutrition.organicAcids}</div>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-[#EDE7DE] space-y-1">
                <div className="text-[#7F7167]">Cellar Certifications</div>
                <div className="font-semibold text-[#231710]">{flavor.nutrition.certification}</div>
              </div>
            </div>
          )}
        </div>


        {/* 9. RECOMMENDED RITUAL */}
        <div className="bg-[#F6F2EA] rounded-2xl p-5 border border-[#E7E0D4] text-left space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#3B2C24] text-[#EFE8DD] flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#8C3A12] uppercase">
              RECOMMENDED RITUAL
            </div>
          </div>

          <blockquote className="text-xs md:text-sm italic font-serif text-[#2B1D14] leading-relaxed">
            “{flavor.ritual.instructions}”
          </blockquote>

          <p className="text-xs text-[#6F6157] leading-relaxed pt-1 border-t border-[#EAE3D7]">
            {flavor.ritual.pairing}
          </p>
        </div>


        {/* 10. ATMOSPHERIC QUOTE BANNER */}
        <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#EDE4D8] aspect-2/1 flex items-center justify-center">
          <img
            src="/images/kombu/ritual-banner.jpg"
            alt="Living Hands Living Beings"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80";
            }}
          />
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <p className="font-serif italic text-base md:text-lg text-white font-medium drop-shadow-md">
              “Crafted by living hands for living beings.”
            </p>
          </div>
        </div>

      </div>

      {/* 11. STICKY BOTTOM CHECKOUT ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8E1D5] py-3 px-4 shadow-lg">
        <div className="max-w-md md:max-w-2xl mx-auto flex items-center justify-between gap-3">
          {/* Quantity Controls */}
          <div className="flex items-center rounded-xl bg-white border border-[#E0D7CC] p-1 shadow-xs">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#231710] font-bold hover:bg-[#F4EFE6] disabled:opacity-30 cursor-pointer"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-bold text-[#231710]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#231710] font-bold hover:bg-[#F4EFE6] cursor-pointer"
            >
              +
            </button>
          </div>

          {/* Add to Cellar Reserve Button */}
          <button
            onClick={handleAddCurrentPack}
            className="flex-1 py-3 px-5 rounded-xl bg-[#853813] hover:bg-[#702F10] active:scale-[0.98] text-white font-semibold text-xs md:text-sm tracking-wide flex items-center justify-between transition-all shadow-md cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cellar Reserve</span>
            </div>
            <span className="font-bold">
              ${(selectedPack.price * quantity).toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
