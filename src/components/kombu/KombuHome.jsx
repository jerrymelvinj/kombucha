import React, { useState } from 'react';
import KombuSealLogo from './KombuSealLogo';
import { KOMBU_FLAVORS } from './kombuData';
import { 
  Sparkles, 
  Leaf, 
  FlaskConical, 
  Check, 
  ArrowRight, 
  Star, 
  HelpCircle, 
  ShieldCheck, 
  RefreshCw,
  Plus
} from 'lucide-react';

export default function KombuHome({ 
  onSelectFlavor, 
  onOpenQuiz, 
  onAddToCart,
  onShowToast 
}) {
  const [activeTab, setActiveTab] = useState('scoby'); // 'scoby' | 'tea' | 'batch'
  const [emailInput, setEmailInput] = useState('');
  const [emailSubscribed, setEmailSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      onShowToast?.('Please enter a valid email address');
      return;
    }
    setEmailSubscribed(true);
    onShowToast?.('🌿 Welcome to The Ferment Tribe! Promo code TRIBE15 saved.');
  };

  const scrollToBlends = () => {
    const el = document.getElementById('apothecary-reserve');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-[#FAF7F2] text-[#2B1D14] pb-16 selection:bg-[#E8D4C3]">
      {/* Container wrapper: mobile-first max-w-md, expands nicely on wider screens */}
      <div className="max-w-md md:max-w-2xl mx-auto px-4 pt-6 space-y-10">

        {/* 1. HERO SECTION */}
        <section className="space-y-4 text-left">
          {/* 100% RAW & ORGANIC Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2E8] border border-[#D5E4D0] text-[#2F5E36] text-[11px] font-bold tracking-widest uppercase">
            <Leaf className="w-3.5 h-3.5 text-[#2F5E36]" />
            <span>100% RAW & ORGANIC</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#231710] tracking-tight leading-[1.15]">
            Living Alchemy for Mind & Gut
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] md:text-base text-[#65574D] leading-relaxed font-sans">
            Raw, slow-fermented organic kombucha brewed with whole botanical herbs, restorative wild cultures, and mindful patience.
          </p>

          {/* Hero Visual Card */}
          <div 
            onClick={() => onSelectFlavor('ginger-turmeric')}
            className="group relative rounded-2xl overflow-hidden shadow-md border border-[#EDE4D8] bg-[#E8E2D6] cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <img
                src="/images/kombu/hero-bottle.jpg"
                alt="Crafted with 21-Day Oak Vat Aging Sunbrew Kombucha"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
              
              {/* Overlay Badge & Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-bold tracking-wider uppercase text-white shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#FDE68A]" />
                  <span>MICRO-BATCH N° 408</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold font-serif tracking-tight text-white drop-shadow-xs">
                  Crafted with 21-Day Oak Vat Aging
                </h3>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              onClick={scrollToBlends}
              className="w-full py-3 px-4 rounded-xl bg-[#853813] hover:bg-[#722F0F] active:scale-[0.98] text-white font-semibold text-sm tracking-wide text-center transition-all shadow-sm cursor-pointer"
            >
              Explore Blends
            </button>
            <button
              onClick={onOpenQuiz}
              className="w-full py-3 px-4 rounded-xl bg-[#F0ECE2] hover:bg-[#E7E2D6] active:scale-[0.98] text-[#2B1D14] border border-[#DDD5C9] font-semibold text-sm tracking-wide text-center transition-all cursor-pointer"
            >
              Take Gut Quiz
            </button>
          </div>

          {/* Key USP Badges Strip */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#EDF3EC] border border-[#DCE8DB]">
              <div className="w-8 h-8 rounded-lg bg-[#3F6647]/10 flex items-center justify-center text-[#2E5835] shrink-0 font-bold text-xs">
                🦠
              </div>
              <div>
                <div className="text-xs font-bold text-[#1F3D24]">Billions of CFU</div>
                <div className="text-[11px] text-[#4F7355]">Live Active Probiotics</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#EDF3EC] border border-[#DCE8DB]">
              <div className="w-8 h-8 rounded-lg bg-[#3F6647]/10 flex items-center justify-center text-[#2E5835] shrink-0 font-bold text-xs">
                🍃
              </div>
              <div>
                <div className="text-xs font-bold text-[#1F3D24]">Zero Refined Sugar</div>
                <div className="text-[11px] text-[#4F7355]">Naturally Fermented</div>
              </div>
            </div>
          </div>
        </section>


        {/* 2. APOTHECARY RESERVE (Curated Craft Blends) */}
        <section id="apothecary-reserve" className="space-y-4 pt-4 border-t border-[#EDE4D8]">
          <div className="space-y-1">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#8C3A12] uppercase">
              APOTHECARY RESERVE
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#231710] tracking-tight">
              Curated Craft Blends
            </h2>
            <p className="text-sm text-[#65574D]">
              Rooted in herbalism, wild fermentation, and clean, unpasteurized integrity.
            </p>
          </div>

          {/* Product Cards List */}
          <div className="space-y-3.5">
            {KOMBU_FLAVORS.map((flavor) => (
              <div
                key={flavor.id}
                className="group relative bg-[#FFFFFF] rounded-2xl p-4 border border-[#ECE5DB] shadow-xs hover:shadow-md hover:border-[#DFCFC0] transition-all duration-200 flex gap-3.5 items-start cursor-pointer"
                onClick={() => onSelectFlavor(flavor.id)}
              >
                {/* Bottle Thumbnail */}
                <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-[#F7F4EE] border border-[#EDE7DE] shrink-0 flex items-center justify-center">
                  <img
                    src={flavor.thumbnail}
                    alt={flavor.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=200&q=80";
                    }}
                  />
                  {flavor.badge && (
                    <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded-sm bg-[#843A14] text-white text-[9px] font-bold tracking-wider uppercase">
                      {flavor.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 space-y-1">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#7A6D63]">
                    <Star className="w-3 h-3 fill-[#E28D2B] text-[#E28D2B]" />
                    <span className="font-bold text-[#231710]">{flavor.rating}</span>
                    <span>({flavor.shortReviewCount})</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-serif font-bold text-[#231710] truncate group-hover:text-[#843A14] transition-colors">
                    {flavor.name}
                  </h3>

                  {/* Short snippet */}
                  <p className="text-xs text-[#6B5E54] line-clamp-2 leading-relaxed">
                    {flavor.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {flavor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-[#F4F1EA] text-[#63574D] text-[10px] font-semibold tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price & Add Button Row */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <div className="text-[11px] text-[#7A6D63]">Single Bottle (12 fl oz)</div>
                      <div className="text-base font-bold text-[#231710]">$4.50</div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart({
                          flavorId: flavor.id,
                          name: flavor.name,
                          packTitle: 'Single Bottle (12 fl oz)',
                          price: 4.50,
                          quantity: 1,
                          image: flavor.thumbnail,
                          type: 'Individual Reserve Bottle'
                        });
                        onShowToast?.(`Added 1 bottle of ${flavor.name} to cellar cart!`);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#853813] hover:bg-[#702F10] active:scale-95 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 3. SLOW SCIENCE & NATURE */}
        <section className="space-y-4 pt-4 border-t border-[#EDE4D8] text-center">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-8 h-8 rounded-full bg-[#EBF1E8] flex items-center justify-center text-[#355B3B] mb-1">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#8C3A12] uppercase">
              SLOW SCIENCE & NATURE
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#231710] tracking-tight">
              Why Raw Ferment Matters
            </h2>
            <p className="text-sm text-[#65574D] max-w-sm mx-auto">
              Most store kombucha is pasteurized or made from syrup concentrates. Here is how our symbiotic heritage makes real difference.
            </p>
          </div>

          {/* Interactive Pill Tabs */}
          <div className="flex rounded-xl bg-[#EBE5DB] p-1 gap-1 max-w-xs mx-auto">
            <button
              onClick={() => setActiveTab('scoby')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'scoby'
                  ? 'bg-white text-[#231710] shadow-xs'
                  : 'text-[#6E6157] hover:text-[#231710]'
              }`}
            >
              Live SCOBY
            </button>
            <button
              onClick={() => setActiveTab('tea')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'tea'
                  ? 'bg-white text-[#231710] shadow-xs'
                  : 'text-[#6E6157] hover:text-[#231710]'
              }`}
            >
              Whole Leaf Tea
            </button>
            <button
              onClick={() => setActiveTab('batch')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'batch'
                  ? 'bg-white text-[#231710] shadow-xs'
                  : 'text-[#6E6157] hover:text-[#231710]'
              }`}
            >
              Small Batch
            </button>
          </div>

          {/* Tab Content Box */}
          <div className="bg-[#FFFFFF] rounded-2xl p-5 border border-[#ECE5DB] shadow-xs text-left space-y-4">
            {activeTab === 'scoby' && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2E7] flex items-center justify-center text-[#2E5A36] text-xl">
                    🌿
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-[#231710]">
                      Symbiotic Heritage Colony
                    </h4>
                    <span className="inline-block text-[10px] font-bold tracking-wider text-[#2E5A36] uppercase bg-[#EAF2E7] px-2 py-0.5 rounded-sm">
                      UNFILTERED & 100% ACTIVE
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-[#605247] leading-relaxed">
                  Our mother culture has been lovingly preserved over 14 years. It produces naturally occurring B-vitamins, gluconic acid, and a diverse spectrum of bio-available enzymes that survive digestive transit.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#F2ECE4]">
                  <div>
                    <div className="text-[11px] text-[#7A6D63]">Active Microbial Strains</div>
                    <div className="text-sm font-bold text-[#231710]">4 Distinct Wild Yeasts</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#7A6D63]">Vitality Index</div>
                    <div className="text-sm font-bold text-[#8C3A12]">99.4% Alive</div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'tea' && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2E7] flex items-center justify-center text-[#2E5A36] text-xl">
                    🍵
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-[#231710]">
                      High-Mountain Estate Leaves
                    </h4>
                    <span className="inline-block text-[10px] font-bold tracking-wider text-[#2E5A36] uppercase bg-[#EAF2E7] px-2 py-0.5 rounded-sm">
                      SHADE-GROWN & ORGANIC
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-[#605247] leading-relaxed">
                  Fermented exclusively on hand-picked first-flush organic Sencha and high-elevation Yunnan black tea leaves rich in polyphenols and L-theanine.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#F2ECE4]">
                  <div>
                    <div className="text-[11px] text-[#7A6D63]">Polyphenol Density</div>
                    <div className="text-sm font-bold text-[#231710]">820mg / Bottle</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#7A6D63]">Direct-Trade Sourced</div>
                    <div className="text-sm font-bold text-[#8C3A12]">100% Single Estate</div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'batch' && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F8EFE4] flex items-center justify-center text-[#8C3A12] text-xl">
                    🪵
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-[#231710]">
                      Toasted White Oak Casks
                    </h4>
                    <span className="inline-block text-[10px] font-bold tracking-wider text-[#8C3A12] uppercase bg-[#F8EFE4] px-2 py-0.5 rounded-sm">
                      LIMITED 50-GALLON MICRO-VATS
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-[#605247] leading-relaxed">
                  We never brew in industrial stainless steel silos. Each micro-batch is aged inside 50-gallon toasted French white oak vats to allow gentle micro-oxygenation and fine silky effervescence.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#F2ECE4]">
                  <div>
                    <div className="text-[11px] text-[#7A6D63]">Batch Run Limit</div>
                    <div className="text-sm font-bold text-[#231710]">450 Bottles Max</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#7A6D63]">Slow Ferment Cycle</div>
                    <div className="text-sm font-bold text-[#8C3A12]">21 to 28 Days</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>


        {/* 4. TESTIMONIAL CARD */}
        <section>
          <div className="relative bg-[#FFFFFF] rounded-2xl p-5 border border-[#ECE5DB] shadow-xs space-y-3 overflow-hidden">
            {/* Stars */}
            <div className="flex gap-1 text-[#E28D2B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E28D2B]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-sm md:text-[15px] italic font-serif text-[#2B1D14] leading-relaxed">
              “Finally a kombucha that tastes like fresh botanicals without that sharp vinegar bite. My gut thanks me every morning.”
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-9 h-9 rounded-full bg-[#414E45] text-white flex items-center justify-center font-bold text-sm shrink-0">
                E
              </div>
              <div>
                <div className="text-xs font-bold text-[#231710]">Elena Rostova</div>
                <div className="text-[11px] text-[#7A6D63]">Verified Member • 6-Month Subscriber</div>
              </div>
            </div>

            {/* Subtle watermark seal on the right */}
            <div className="absolute -bottom-4 -right-4 opacity-10 pointer-events-none">
              <KombuSealLogo className="w-28 h-28" />
            </div>
          </div>
        </section>


        {/* 5. HOLISTIC MATCHMAKER CARD */}
        <section>
          <div className="bg-[#D6E2D2] rounded-2xl p-5 border border-[#C2D4BE] text-left space-y-3 relative overflow-hidden shadow-xs">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#345B3A] uppercase">
                HOLISTIC MATCHMAKER
              </div>
              <div className="w-7 h-7 rounded-full bg-white/70 flex items-center justify-center text-[#345B3A]">
                <HelpCircle className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-[#1F3A24] leading-snug">
              Unsure which botanical strain your microbiome needs?
            </h3>

            <p className="text-xs md:text-sm text-[#446249] leading-relaxed">
              Answer 3 mindful lifestyle questions to receive custom botanical pairings formulated for digestion, mental clarity, or skin radiance.
            </p>

            <button
              onClick={onOpenQuiz}
              className="w-full py-3 px-4 rounded-xl bg-[#374B37] hover:bg-[#2B3B2B] active:scale-[0.98] text-white font-semibold text-xs md:text-sm tracking-wide text-center transition-all shadow-xs cursor-pointer"
            >
              Start 60-Second Quiz
            </button>
          </div>
        </section>


        {/* 6. TRIBE EXCLUSIVE (Newsletter Signup) */}
        <section>
          <div className="bg-[#FCF5EE] rounded-2xl p-5 border border-[#EFE2D2] text-left space-y-3.5 shadow-xs">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#A0522D] uppercase">
              TRIBE EXCLUSIVE
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#231710] tracking-tight">
              Join The Ferment Tribe
            </h3>

            <p className="text-xs md:text-sm text-[#6E5F55] leading-relaxed">
              Receive 15% off your first cold-shipped alchemy reserve box, plus seasonal micro-batch allocations and foraging field notes.
            </p>

            {emailSubscribed ? (
              <div className="p-3 bg-[#EAF3E8] border border-[#CFE4CB] rounded-xl text-center space-y-1">
                <div className="text-xs font-bold text-[#23582A] flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4" /> You're in the Tribe!
                </div>
                <div className="text-[11px] text-[#476C4D]">
                  Use promo code <span className="font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-[#BDD9B9]">TRIBE15</span> at cellar checkout.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E0D5C7] text-sm text-[#231710] placeholder-[#9E9185] focus:outline-hidden focus:ring-2 focus:ring-[#853813]/20 focus:border-[#853813] transition-all"
                />
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#853813] hover:bg-[#702F10] active:scale-[0.98] text-white font-semibold text-xs md:text-sm tracking-wide flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <span>Claim 15% Off Your First Box</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-[#7A6D63] pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#355B3B]" /> Zero spam
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5 text-[#355B3B]" /> Cancel anytime
              </span>
            </div>
          </div>
        </section>


        {/* 7. FOOTER */}
        <footer className="pt-6 border-t border-[#EDE4D8] text-center space-y-2 text-[#7A6D63]">
          <div className="flex justify-center">
            <KombuSealLogo className="w-9 h-9" />
          </div>
          <div className="text-sm font-bold text-[#231710] font-serif">
            Kombu Alchemy
          </div>
          <p className="text-xs max-w-xs mx-auto">
            Brewed with organic botanicals & living devotion in small batches.
          </p>
          <div className="text-[11px] text-[#9A8F85] pt-1">
            © 2025 Kombu Alchemy Co. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  );
}
