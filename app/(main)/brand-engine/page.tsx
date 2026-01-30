"use client";

/**
 * SOVEREIGN ASSET FORGE v2026.3
 * The Central Visual Command Node for INSPIRON TECH
 * 
 * CAPABILITIES:
 * 1. Industrial Hybrid Canvas (820x360) - Universal Device Logic
 * 2. Overlap Protection Protocol - LinkedIn & Instagram Safe Zones
 * 3. Axis-Locked Geometry - 0.1% Visual Tolerance
 * 
 * COMMANDER: MD ABU HASAN
 */

import React, { useState } from 'react';

const TACTICAL_PRESETS = {
    LI_PERSONAL: { id: 'li-p', label: 'LinkedIn Personal', w: 4200, h: 700, scale: 0.15, offset: 'translate-x-[400px]', textScale: 'text-[180px]' },
    LI_PAGE: { id: 'li-c', label: 'LinkedIn Page', w: 1584, h: 396, scale: 0.4, offset: 'translate-x-0', textScale: 'text-[82px]' },
    FB_HYBRID: { id: 'fb', label: 'Facebook Cover', w: 820, h: 360, scale: 0.8, offset: 'translate-x-0', textScale: 'text-[42px]' },
    IG_POST: { id: 'ig-p', label: 'Instagram Post', w: 1080, h: 1080, scale: 0.45, offset: 'translate-x-0', textScale: 'text-[92px]' },
    IG_STORY: { id: 'ig-s', label: 'Instagram Story', w: 1080, h: 1920, scale: 0.3, offset: 'translate-y-[-100px]', textScale: 'text-[92px]' },
    WA_BIZ: { id: 'wa-b', label: 'WhatsApp Business', w: 1920, h: 1020, scale: 0.35, offset: 'translate-x-0', textScale: 'text-[120px]' },
};

export default function SovereignAssetForge() {
    const [active, setActive] = useState(TACTICAL_PRESETS.LI_PERSONAL);

    return (
        <div className="flex flex-col items-center bg-[#010409] min-h-screen p-12 text-white font-institutional overflow-hidden">
            {/* HUD INTERFACE */}
            <div className="text-center mb-16 z-20">
                <h1 className="text-3xl font-black uppercase tracking-[0.4em] mb-4">
                    Sovereign Asset Forge <span className="text-[#FFD700]">v2026.3</span>
                </h1>
                <div className="flex flex-wrap gap-3 justify-center">
                    {Object.values(TACTICAL_PRESETS).map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setActive(p)}
                            className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm border transition-all duration-500
                ${active.id === p.id ? "bg-[#FFD700] text-[#010409] border-[#FFD700]" : "bg-white/5 border-white/10 text-white/40"}`}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* PRODUCTION CANVAS */}
            <div className="relative flex justify-center items-start w-full">
                <div
                    className="bg-[#010409] border border-white/10 relative overflow-hidden transition-all duration-1000 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
                    style={{
                        width: active.w, height: active.h,
                        transform: `scale(${active.scale})`, transformOrigin: 'top center',
                        backgroundImage: 'radial-gradient(rgba(0, 210, 255, 0.05) 2px, transparent 2px)',
                        backgroundSize: '80px 80px'
                    }}
                >
                    {/* THE KINETIC BRAND CORE */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center p-20 transition-transform duration-700 ${active.offset}`}>
                        <div className={`flex ${active.id.includes('ig') ? 'flex-col' : 'flex-row'} items-center gap-16`}>

                            {/* AXIS-LOCKED SVG (321.346 Lock) */}
                            <div className="w-44 h-44 text-[#00D2FF] drop-shadow-[0_0_30px_rgba(0,210,255,0.4)]">
                                <svg viewBox="0 0 358.846 350.3" className="w-full h-full">
                                    <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="currentColor"></path>
                                    <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="currentColor"></path>
                                    <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"></circle>
                                </svg>
                            </div>

                            {/* 12REM MONOLITHIC TYPOGRAPHY */}
                            <div className={`flex items-baseline leading-none ${active.textScale}`}>
                                <span className="font-medium lowercase text-white tracking-tighter">inspiron</span>
                                <span className="font-light uppercase text-[#FFD700] ml-[0.05em] tracking-[0.1em]">TECH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
