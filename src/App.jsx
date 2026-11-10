import React, { useState } from 'react';
import KombuApp from './components/kombu/KombuApp';
import GrihaPravesamApp from './components/griha-pravesam/GrihaPravesamApp';
import AelineApp from './components/AelineApp';
import FlightApp from './FlightApp';

export default function App() {
  const [activeApp, setActiveApp] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const app = params.get('app');
    if (app === 'griha') return 'griha';
    if (app === 'aeline') return 'aeline';
    if (app === 'flight') return 'flight';
    return 'kombu'; // Default to newly created Kombu Alchemy
  });

  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const handleSwitch = (appName) => {
    setActiveApp(appName);
    const url = new URL(window.location);
    if (appName === 'kombu') {
      url.searchParams.delete('app');
    } else {
      url.searchParams.set('app', appName);
    }
    window.history.pushState({}, '', url);
  };

  return (
    <div className="relative min-h-screen">
      {/* Floating Project Switcher Pill */}
      <aside aria-label="Project Switcher" className="fixed top-3 right-3 md:bottom-5 md:right-5 md:top-auto z-50 flex items-center">
        {isSwitcherOpen ? (
          <div className="flex items-center bg-[#2A160A]/95 text-white p-1 rounded-full shadow-2xl backdrop-blur-md border border-[#E8A375]/40 text-xs font-semibold animate-in fade-in zoom-in-95">
            <button
              onClick={() => handleSwitch('kombu')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                activeApp === 'kombu'
                  ? 'bg-[#853813] text-white font-bold shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>🍾</span>
              <span>Kombu</span>
            </button>

            <button
              onClick={() => handleSwitch('griha')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeApp === 'griha'
                  ? 'bg-[#E77A23] text-white font-bold shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>🪔</span>
              <span>Griha</span>
            </button>

            <button
              onClick={() => handleSwitch('aeline')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeApp === 'aeline'
                  ? 'bg-[#D2F865] text-[#131E18] font-bold shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>🌱</span>
              <span>Aeline</span>
            </button>

            <button
              onClick={() => handleSwitch('flight')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeApp === 'flight'
                  ? 'bg-[#256BF5] text-white font-bold shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span>✈️</span>
              <span>Flight</span>
            </button>

            <button
              onClick={() => setIsSwitcherOpen(false)}
              className="ml-1 p-1 hover:bg-white/20 rounded-full text-white/70 hover:text-white cursor-pointer"
              title="Collapse"
            >
              ✕
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsSwitcherOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2A160A]/85 hover:bg-[#2A160A] text-white shadow-xl backdrop-blur-md border border-[#E8A375]/30 text-xs font-semibold cursor-pointer transition-all hover:scale-105"
            title="Switch Project"
          >
            <span>🍾</span>
            <span className="hidden sm:inline">Projects</span>
            <span className="text-[10px] text-[#E8A375]">▾</span>
          </button>
        )}
      </aside>

      {/* Render Current Application */}
      {activeApp === 'kombu' && <KombuApp />}
      {activeApp === 'griha' && <GrihaPravesamApp />}
      {activeApp === 'aeline' && <AelineApp />}
      {activeApp === 'flight' && <FlightApp />}
    </div>
  );
}
