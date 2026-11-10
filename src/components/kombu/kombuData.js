export const KOMBU_FLAVORS = [
  {
    id: 'ginger-turmeric',
    name: 'Ginger Turmeric Elixir',
    tagline: 'Raw Cultured Living Kombucha • Botanical Batch',
    batchNo: '#84',
    oakAging: '28-Day Oak Vat Aging',
    rating: 4.9,
    reviewsCount: 1240,
    shortReviewCount: 184,
    badge: 'BEST SELLER',
    awardBadge: 'Award Blend',
    cfu: '9.4B CFU',
    colorTheme: {
      accent: '#8C3A12',
      accentLight: '#FDF6EE',
      accentBorder: '#F2D3BE',
      bottleGlow: 'rgba(217, 119, 6, 0.25)',
      bottleLiquid: 'linear-gradient(180deg, #F59E0B 0%, #D97706 60%, #92400E 100%)'
    },
    heroImage: '/images/kombu/ginger-detail.jpg',
    thumbnail: '/images/kombu/ginger-detail.jpg',
    heroAlt: 'Amber bottle of Ginger Turmeric Elixir in soft natural sunlight',
    description: 'Warm spicy zest with fresh-pressed Hawaiian turmeric and slow-simmered organic Peruvian ginger root.',
    extendedDescription: 'A deeply restorative botanical tonic combining slow-fermented organic black tea with the warming heat of cold-pressed Hawaiian gingerols and bioavailable turmeric curcumin.',
    tags: ['Digestive', 'Warming'],
    ingredients: [
      { name: 'Wild Ginger', icon: '🌿' },
      { name: 'Fresh Turmeric', icon: '✨' },
      { name: 'Cold-Pressed Lemon', icon: '🍋' },
      { name: 'Raw Black Tea', icon: '🍃' }
    ],
    tastingProfile: {
      style: 'Effervescent • Earthy Spice',
      gauges: [
        { label: 'Warm Zest', valueText: 'High', percentage: 90 },
        { label: 'Effervescence', valueText: 'Gentle', percentage: 40 },
        { label: 'Sweetness', valueText: 'Low (3g)', percentage: 22 },
        { label: 'Tartness', valueText: 'Balanced', percentage: 60 }
      ]
    },
    packs: [
      {
        id: 'pack-12',
        title: '12-Pack Subscription',
        subtitle: 'Delivered fresh every 2 weeks • Free cold-chain chilled freight',
        badge: 'Most Popular',
        price: 42.00,
        originalPrice: 54.00,
        perks: 'Pause, shift, or cancel anytime with zero friction',
        unitPrice: '₹3.50 / bottle',
        type: 'subscription'
      },
      {
        id: 'pack-6',
        title: '6-Pack Wellness Pack',
        subtitle: 'One-time cellar tasting allotment',
        badge: 'Save 11%',
        price: 24.00,
        originalPrice: 27.00,
        perks: 'Ships in 100% recyclable insulated cold pack',
        unitPrice: '₹4.00 / bottle',
        type: 'one-time'
      },
      {
        id: 'pack-1',
        title: 'Single Bottle (16 fl oz)',
        subtitle: 'Individual reserve tasting jar',
        price: 4.50,
        originalPrice: null,
        perks: 'Freshly tapped cellar reserve allotment',
        unitPrice: '₹4.50 / bottle',
        type: 'one-time'
      }
    ],
    insideEverySip: {
      headline: 'Rooted in small-batch alchemy. Raw, unpasteurized, and teeming with beneficial active microbiome flora.',
      benefits: [
        {
          id: 'probiotics',
          title: 'Lactobacillus plantarum & Acetobacter',
          desc: 'Live heritage cultures that bolster the gut lining and balance microbial flora.',
          iconType: 'culture'
        },
        {
          id: 'ginger',
          title: 'Cold-Pressed Organic Hawaiian Ginger',
          desc: 'Soothing gingerols that encourage digestion and provide clean gastric warmth.',
          iconType: 'ginger'
        },
        {
          id: 'turmeric',
          title: 'Wild Yellow Turmeric Curcumin',
          desc: 'Bioavailable antioxidants to neutralize systemic inflammation post-activity.',
          iconType: 'turmeric'
        }
      ]
    },
    fermentationTimeline: {
      daysTotal: '28-Day Oak Fermentation',
      caskMethod: 'Slow Cask Method',
      description: 'Aged gracefully in toasted French and American white oak barrels to produce silky micro-bubbles.',
      phases: [
        { span: 'Days 1–7', title: 'Sweet Tea & SCOBY', note: 'Organic black tea base meets 14-year mother culture.' },
        { span: 'Days 8–21', title: 'Oak Aeration', note: 'Micro-oxygenation through porous toasted wood staves.' },
        { span: 'Days 22–28', title: 'Cold Botanicals', note: 'Cold-steeped with gingerols and turmeric extracts.' }
      ]
    },
    nutrition: {
      calories: 35,
      sugar: '3g (naturally occurring from fermentation)',
      servings: 1,
      servingSize: '16 fl oz (473ml)',
      organicAcids: 'Acetic, Glucuronic, L-Lactic, Gluconic Acids (820mg)',
      cfuCount: '9.4 Billion CFU guaranteed at time of consumption',
      polyphenols: '165mg catechins & bio-flavonoids',
      alcohol: '<0.5% ABV naturally occurring',
      certification: 'USDA Organic, Non-GMO Project Verified, Raw & Unpasteurized'
    },
    ritual: {
      instructions: 'Best enjoyed chilled at 48°F, 30 minutes before your midday meal or as an invigorating afternoon elixir to awaken the senses.',
      pairing: 'Pairs exquisitely with sourdough avocado toast, charred seasonal brassicas, or wild rice bowls.'
    }
  },
  {
    id: 'hibiscus-rose',
    name: 'Hibiscus Rose Radiance',
    tagline: 'Raw Cultured Living Kombucha • Botanical Batch',
    batchNo: '#79',
    oakAging: '21-Day Oak Vat Aging',
    rating: 5.0,
    reviewsCount: 890,
    shortReviewCount: 92,
    badge: 'STAFF PICK',
    awardBadge: 'Botanical Gold',
    cfu: '8.8B CFU',
    colorTheme: {
      accent: '#9A243D',
      accentLight: '#FDF2F4',
      accentBorder: '#F3CCD4',
      bottleGlow: 'rgba(219, 39, 119, 0.25)',
      bottleLiquid: 'linear-gradient(180deg, #BE185D 0%, #9D174D 60%, #700C2F 100%)'
    },
    heroImage: '/images/kombu/hibiscus.jpg',
    thumbnail: '/images/kombu/hibiscus.jpg',
    heroAlt: 'Ruby red Hibiscus Rose Radiance Kombucha in clear botanical bottle',
    description: 'Floral antioxidant powerhouse with hand-picked Persian rose petals & ruby Sudanese hibiscus calyces.',
    extendedDescription: 'A tart, floral infusion loaded with natural anthocyanins, vitamin C, and delicate rose aromatics that restore cutaneous hydration and glow.',
    tags: ['Skin Vitality', 'Floral'],
    ingredients: [
      { name: 'Persian Rose Petals', icon: '🌹' },
      { name: 'Ruby Hibiscus', icon: '🌺' },
      { name: 'Cold-Pressed Pomegranate', icon: '🫐' },
      { name: 'Organic White Tea', icon: '🍃' }
    ],
    tastingProfile: {
      style: 'Tart Crisp • Floral Blossom',
      gauges: [
        { label: 'Warm Zest', valueText: 'Subtle', percentage: 25 },
        { label: 'Effervescence', valueText: 'Vibrant', percentage: 75 },
        { label: 'Sweetness', valueText: 'Low (2g)', percentage: 18 },
        { label: 'Tartness', valueText: 'High Crisp', percentage: 85 }
      ]
    },
    packs: [
      {
        id: 'pack-12',
        title: '12-Pack Subscription',
        subtitle: 'Delivered fresh every 2 weeks • Free cold-chain chilled freight',
        badge: 'Most Popular',
        price: 42.00,
        originalPrice: 54.00,
        perks: 'Pause, shift, or cancel anytime with zero friction',
        unitPrice: '₹3.50 / bottle',
        type: 'subscription'
      },
      {
        id: 'pack-6',
        title: '6-Pack Wellness Pack',
        subtitle: 'One-time cellar tasting allotment',
        badge: 'Save 11%',
        price: 24.00,
        originalPrice: 27.00,
        perks: 'Ships in 100% recyclable insulated cold pack',
        unitPrice: '₹4.00 / bottle',
        type: 'one-time'
      },
      {
        id: 'pack-1',
        title: 'Single Bottle (16 fl oz)',
        subtitle: 'Individual reserve tasting jar',
        price: 4.50,
        originalPrice: null,
        perks: 'Freshly tapped cellar reserve allotment',
        unitPrice: '₹4.50 / bottle',
        type: 'one-time'
      }
    ],
    insideEverySip: {
      headline: 'Formulated with organic botanicals to awaken cellular radiance and support internal moisture retention.',
      benefits: [
        {
          id: 'probiotics',
          title: 'Lactobacillus reuteri & Saccharomyces',
          desc: 'Dermal-supportive wild yeasts proven to assist skin barrier resilience.',
          iconType: 'culture'
        },
        {
          id: 'rose',
          title: 'Persian Damascus Rose Distillate',
          desc: 'Rich in polyphenolic flavonoids that calm cutaneous redness and balance pH.',
          iconType: 'ginger'
        },
        {
          id: 'hibiscus',
          title: 'Sun-Dried Nile Valley Hibiscus',
          desc: 'High concentration of organic AHA acids and bio-vitamin C.',
          iconType: 'turmeric'
        }
      ]
    },
    fermentationTimeline: {
      daysTotal: '21-Day Cold Vat Steep',
      caskMethod: 'Aroma Retention Method',
      description: 'Slow conditioned in chilled stainless oak casks to preserve delicate floral volatile terpenes.',
      phases: [
        { span: 'Days 1–7', title: 'White Peony Tea Ferment', note: 'High altitude mountain tea with delicate silver tips.' },
        { span: 'Days 8–16', title: 'Botanical Cold Steep', note: 'Nile hibiscus calyces release ruby antioxidants.' },
        { span: 'Days 17–21', title: 'Rose Blossom Infusion', note: 'Gentle low-temp infusion of Damascus rose petals.' }
      ]
    },
    nutrition: {
      calories: 30,
      sugar: '2g (naturally occurring from fermentation)',
      servings: 1,
      servingSize: '16 fl oz (473ml)',
      organicAcids: 'Malic, Citric, Acetic, Gluconic Acids (790mg)',
      cfuCount: '8.8 Billion CFU guaranteed at time of consumption',
      polyphenols: '210mg anthocyanins and flavonoids',
      alcohol: '<0.5% ABV naturally occurring',
      certification: 'USDA Organic, Non-GMO Project Verified, Raw & Unpasteurized'
    },
    ritual: {
      instructions: 'Best poured into a crystal wine glass over a single rock of hand-cut ice during sunset or evening self-care rituals.',
      pairing: 'Pairs exquisitely with Mediterranean mezze platters, lemon herb quinoa, and fresh figs.'
    }
  },
  {
    id: 'wild-lavender',
    name: 'Wild Lavender Blueberry',
    tagline: 'Raw Cultured Living Kombucha • Botanical Batch',
    batchNo: '#91',
    oakAging: '24-Day Oak Vat Aging',
    rating: 4.8,
    reviewsCount: 640,
    shortReviewCount: 147,
    badge: 'CUSTOMER FAVORITE',
    awardBadge: 'Apothecary Choice',
    cfu: '9.1B CFU',
    colorTheme: {
      accent: '#4C3B71',
      accentLight: '#F5F2F9',
      accentBorder: '#D7CEE5',
      bottleGlow: 'rgba(99, 102, 241, 0.25)',
      bottleLiquid: 'linear-gradient(180deg, #4338CA 0%, #312E81 60%, #1E1B4B 100%)'
    },
    heroImage: '/images/kombu/lavender.jpg',
    thumbnail: '/images/kombu/lavender.jpg',
    heroAlt: 'Deep purple Wild Lavender Blueberry Kombucha bottle with fresh berries',
    description: 'Deep forest berries combined with French culinary lavender for nervous system calming and restorative evening relaxation.',
    extendedDescription: 'Hand-foraged sub-alpine wild blueberries cold-macerated with aromatic Provence lavender flowers to help soothe evening restlessness.',
    tags: ['Restorative', 'Serenity'],
    ingredients: [
      { name: 'Foraged Blueberries', icon: '🫐' },
      { name: 'Provence Lavender', icon: '🪻' },
      { name: 'Chamomile Buds', icon: '🌼' },
      { name: 'Oolong Tea', icon: '🍃' }
    ],
    tastingProfile: {
      style: 'Velvety Berry • Herbal Calming',
      gauges: [
        { label: 'Warm Zest', valueText: 'Mellow', percentage: 20 },
        { label: 'Effervescence', valueText: 'Silky Fine', percentage: 50 },
        { label: 'Sweetness', valueText: 'Balanced (4g)', percentage: 35 },
        { label: 'Tartness', valueText: 'Soft Winey', percentage: 50 }
      ]
    },
    packs: [
      {
        id: 'pack-12',
        title: '12-Pack Subscription',
        subtitle: 'Delivered fresh every 2 weeks • Free cold-chain chilled freight',
        badge: 'Most Popular',
        price: 42.00,
        originalPrice: 54.00,
        perks: 'Pause, shift, or cancel anytime with zero friction',
        unitPrice: '₹3.50 / bottle',
        type: 'subscription'
      },
      {
        id: 'pack-6',
        title: '6-Pack Wellness Pack',
        subtitle: 'One-time cellar tasting allotment',
        badge: 'Save 11%',
        price: 24.00,
        originalPrice: 27.00,
        perks: 'Ships in 100% recyclable insulated cold pack',
        unitPrice: '₹4.00 / bottle',
        type: 'one-time'
      },
      {
        id: 'pack-1',
        title: 'Single Bottle (16 fl oz)',
        subtitle: 'Individual reserve tasting jar',
        price: 4.50,
        originalPrice: null,
        perks: 'Freshly tapped cellar reserve allotment',
        unitPrice: '₹4.50 / bottle',
        type: 'one-time'
      }
    ],
    insideEverySip: {
      headline: 'A synergistic blend of linalool-rich botanicals and deep polyphenol antioxidants designed to ease nervous tension.',
      benefits: [
        {
          id: 'probiotics',
          title: 'Bifidobacterium infantis & Brettanomyces',
          desc: 'Living probiotic strains that synthesize neuro-supportive GABA and serotonin precursors.',
          iconType: 'culture'
        },
        {
          id: 'lavender',
          title: 'Culinary High-Altitude Lavender',
          desc: 'Rich in natural linalool and terpenes known to soothe the parasympathetic nervous system.',
          iconType: 'ginger'
        },
        {
          id: 'blueberry',
          title: 'Cold-Pressed Wild Blueberries',
          desc: 'Dense antioxidant anthocyanins that protect cellular membranes from oxidative strain.',
          iconType: 'turmeric'
        }
      ]
    },
    fermentationTimeline: {
      daysTotal: '24-Day Oak Fermentation',
      caskMethod: 'Macerated Cask Method',
      description: 'Slowly conditioned with crushed whole wild berries in lightly charred American oak barrels.',
      phases: [
        { span: 'Days 1–8', title: 'Mountain Oolong Primary', note: 'Semifermented high-mountain oolong tea foundation.' },
        { span: 'Days 9–18', title: 'Berry Oak Aging', note: 'Cold berry maceration develops deep ruby-indigo tones.' },
        { span: 'Days 19–24', title: 'Lavender Terpene Finish', note: 'Freshly dried botanical lavender buds steeped in cool cellar.' }
      ]
    },
    nutrition: {
      calories: 38,
      sugar: '4g (naturally occurring from wild berries)',
      servings: 1,
      servingSize: '16 fl oz (473ml)',
      organicAcids: 'Glucuronic, Quinic, Acetic Acids (840mg)',
      cfuCount: '9.1 Billion CFU guaranteed at time of consumption',
      polyphenols: '280mg wild berry anthocyanins',
      alcohol: '<0.5% ABV naturally occurring',
      certification: 'USDA Organic, Non-GMO Project Verified, Raw & Unpasteurized'
    },
    ritual: {
      instructions: 'Sip slowly 45 minutes before bedtime in dim lighting, or as a serene twilight replacement for evening wine.',
      pairing: 'Pairs exquisitely with artisanal aged sheep’s cheese, roasted walnuts, or dark stone fruits.'
    }
  },
  {
    id: 'crisp-green-tea',
    name: 'Crisp Green Tea Mint',
    tagline: 'Raw Cultured Living Kombucha • Botanical Batch',
    batchNo: '#63',
    oakAging: '18-Day Oak Vat Aging',
    rating: 4.9,
    reviewsCount: 512,
    shortReviewCount: 63,
    badge: 'HERBAL RESERVE',
    awardBadge: 'Clean Taste Award',
    cfu: '9.6B CFU',
    colorTheme: {
      accent: '#2D5A3A',
      accentLight: '#F0F6F2',
      accentBorder: '#C9DEC0',
      bottleGlow: 'rgba(34, 197, 94, 0.25)',
      bottleLiquid: 'linear-gradient(180deg, #65A30D 0%, #4D7C0F 60%, #365314 100%)'
    },
    heroImage: '/images/kombu/greentea.jpg',
    thumbnail: '/images/kombu/greentea.jpg',
    heroAlt: 'Golden green crisp green tea kombucha with sprig of garden spearmint',
    description: 'Single-origin Sencha green tea paired with heirloom spearmint for daytime focus, mental clarity, and crisp digestive comfort.',
    extendedDescription: 'Shade-grown Japanese Sencha rich in calming L-theanine, double-steeped with refreshing garden spearmint and lemongrass.',
    tags: ['Focus', 'Cooling'],
    ingredients: [
      { name: 'Single-Origin Sencha', icon: '🍵' },
      { name: 'Heirloom Spearmint', icon: '🌱' },
      { name: 'Crushed Lemongrass', icon: '🌾' },
      { name: 'Wild Blossom Honey', icon: '🍯' }
    ],
    tastingProfile: {
      style: 'Clean Herbaceous • Crisp Refreshment',
      gauges: [
        { label: 'Warm Zest', valueText: 'Cooling', percentage: 15 },
        { label: 'Effervescence', valueText: 'Bright Champagne', percentage: 70 },
        { label: 'Sweetness', valueText: 'Very Low (2g)', percentage: 15 },
        { label: 'Tartness', valueText: 'Crisp Clean', percentage: 65 }
      ]
    },
    packs: [
      {
        id: 'pack-12',
        title: '12-Pack Subscription',
        subtitle: 'Delivered fresh every 2 weeks • Free cold-chain chilled freight',
        badge: 'Most Popular',
        price: 42.00,
        originalPrice: 54.00,
        perks: 'Pause, shift, or cancel anytime with zero friction',
        unitPrice: '₹3.50 / bottle',
        type: 'subscription'
      },
      {
        id: 'pack-6',
        title: '6-Pack Wellness Pack',
        subtitle: 'One-time cellar tasting allotment',
        badge: 'Save 11%',
        price: 24.00,
        originalPrice: 27.00,
        perks: 'Ships in 100% recyclable insulated cold pack',
        unitPrice: '₹4.00 / bottle',
        type: 'one-time'
      },
      {
        id: 'pack-1',
        title: 'Single Bottle (16 fl oz)',
        subtitle: 'Individual reserve tasting jar',
        price: 4.50,
        originalPrice: null,
        perks: 'Freshly tapped cellar reserve allotment',
        unitPrice: '₹4.50 / bottle',
        type: 'one-time'
      }
    ],
    insideEverySip: {
      headline: 'Awakens cognitive flow state without jitters or sugar crashes through the synergy of green tea catechins and wild botanicals.',
      benefits: [
        {
          id: 'probiotics',
          title: 'Gluconacetobacter & Lactobacillus',
          desc: 'High gluconic acid producers that support healthy liver detoxification.',
          iconType: 'culture'
        },
        {
          id: 'mint',
          title: 'Estate-Grown Heirloom Spearmint',
          desc: 'Pure menthol botanical oil that gently relieves digestive spasms and refreshes the breath.',
          iconType: 'ginger'
        },
        {
          id: 'sencha',
          title: 'First-Flush Uji Sencha Green Tea',
          desc: 'High concentration of L-Theanine promoting sustained alpha-wave brain activity.',
          iconType: 'turmeric'
        }
      ]
    },
    fermentationTimeline: {
      daysTotal: '18-Day Vat Fermentation',
      caskMethod: 'Clean Vat Method',
      description: 'Fermented in virgin neutral oak to allow the luminous tea notes and lively spearmint to shine through.',
      phases: [
        { span: 'Days 1–6', title: 'Sencha Primary Ferment', note: 'First flush green tea brewed with spring water.' },
        { span: 'Days 7–14', title: 'Controlled Acidulation', note: 'Microbial cultures balance tart acidity without bitterness.' },
        { span: 'Days 15–18', title: 'Fresh Spearmint Crash', note: 'Cold steeped with bruised fresh spearmint leaves.' }
      ]
    },
    nutrition: {
      calories: 28,
      sugar: '2g (naturally occurring from fermentation)',
      servings: 1,
      servingSize: '16 fl oz (473ml)',
      organicAcids: 'Gluconic, Acetic, Citric Acids (860mg)',
      cfuCount: '9.6 Billion CFU guaranteed at time of consumption',
      polyphenols: '340mg EGCG catechins',
      alcohol: '<0.5% ABV naturally occurring',
      certification: 'USDA Organic, Non-GMO Project Verified, Raw & Unpasteurized'
    },
    ritual: {
      instructions: 'Pour over crushed ice during your peak morning work sprint or after intense physical training for immediate rehydration.',
      pairing: 'Pairs exquisitely with poke bowls, cucumber mint salads, sashimi, or steamed matcha buns.'
    }
  }
];

export const INITIAL_CART_ITEMS = [
  {
    id: 'cart-1',
    flavorId: 'ginger-turmeric',
    name: 'Ginger Turmeric Elixir',
    packTitle: '12-Pack Subscription',
    quantity: 1,
    price: 42.00,
    originalPrice: 54.00,
    type: 'Subscription (Every 2 Weeks)',
    image: '/images/kombu/ginger-detail.jpg'
  },
  {
    id: 'cart-2',
    flavorId: 'hibiscus-rose',
    name: 'Hibiscus Rose Radiance',
    packTitle: '6-Pack Wellness Pack',
    quantity: 1,
    price: 24.00,
    originalPrice: 27.00,
    type: 'One-time Tasting Allotment',
    image: '/images/kombu/hibiscus.jpg'
  },
  {
    id: 'cart-3',
    flavorId: 'crisp-green-tea',
    name: 'Crisp Green Tea Mint',
    packTitle: 'Single Bottle (16 fl oz)',
    quantity: 1,
    price: 4.50,
    originalPrice: null,
    type: 'Individual Reserve Tasting Jar',
    image: '/images/kombu/greentea.jpg'
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 'intention',
    question: 'What is your primary wellness intention today?',
    subtitle: 'Select the primary harmony your body is seeking',
    options: [
      {
        id: 'digest',
        title: 'Digestive Ease & Clean Warmth',
        desc: 'Relieve bloating, ignite sluggish digestion, and cultivate inner warmth.',
        flavorId: 'ginger-turmeric',
        icon: '🔥'
      },
      {
        id: 'radiance',
        title: 'Skin Radiance & Antioxidant Glow',
        desc: 'Hydrate skin cells from within and protect against environmental stress.',
        flavorId: 'hibiscus-rose',
        icon: '🌸'
      },
      {
        id: 'rest',
        title: 'Deep Calm & Evening Serenity',
        desc: 'Unwind nervous tension, ease bedtime anxiety, and quiet a busy mind.',
        flavorId: 'wild-lavender',
        icon: '🌙'
      },
      {
        id: 'clarity',
        title: 'Laser Focus & Daytime Vitality',
        desc: 'Enhance cognitive clarity, clean alertness, and refreshing rehydration.',
        flavorId: 'crisp-green-tea',
        icon: '⚡'
      }
    ]
  },
  {
    id: 'palate',
    question: 'What botanical flavor profile awakens your senses?',
    subtitle: 'Every palate resonates with different herbal notes',
    options: [
      {
        id: 'spice',
        title: 'Warm Ginger Spice & Earthy Root',
        desc: 'Zesty ginger heat balanced with golden turmeric and lemon twist.',
        flavorId: 'ginger-turmeric',
        icon: '🫚'
      },
      {
        id: 'tart-floral',
        title: 'Tart Crimson Fruit & Velvet Rose',
        desc: 'Crisp mouth-watering hibiscus with soft lingering floral petals.',
        flavorId: 'hibiscus-rose',
        icon: '🌺'
      },
      {
        id: 'berry-herbal',
        title: 'Jammy Forest Berry & French Lavender',
        desc: 'Deep wild blueberries accompanied by soothing purple botanical herbs.',
        flavorId: 'wild-lavender',
        icon: '🫐'
      },
      {
        id: 'clean-green',
        title: 'Brisk Sencha Tea & Cooling Spearmint',
        desc: 'Crisp Champagne-like effervescence with crushed garden mint leaves.',
        flavorId: 'crisp-green-tea',
        icon: '🍃'
      }
    ]
  },
  {
    id: 'ritual-time',
    question: 'When is your sacred daily sipping ritual?',
    subtitle: 'Timing influences how active cultures integrate with your rhythm',
    options: [
      {
        id: 'midday',
        title: '30 Minutes Before Midday Meal',
        desc: 'Prepares digestive enzymes and primes gut biome for nutrient absorption.',
        flavorId: 'ginger-turmeric',
        icon: '🥗'
      },
      {
        id: 'morning',
        title: 'First Morning Light & Breakfast',
        desc: 'Gentle hydration to jumpstart metabolism with skin-supportive vitamins.',
        flavorId: 'hibiscus-rose',
        icon: '🌅'
      },
      {
        id: 'evening',
        title: 'Twilight Unwind & Sunset Hours',
        desc: 'A calming substitute for evening alcohol that aids nightly cell renewal.',
        flavorId: 'wild-lavender',
        icon: '🌆'
      },
      {
        id: 'afternoon',
        title: 'Mid-Afternoon Creative Flow Block',
        desc: 'Clears mental fog and powers through afternoon tasks with zero crash.',
        flavorId: 'crisp-green-tea',
        icon: '💻'
      }
    ]
  }
];
