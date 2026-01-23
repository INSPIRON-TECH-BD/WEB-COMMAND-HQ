/**
 * INSPIRON TECH - THE n-LAW GEOMETRY INSPECTOR
 * Status: OPERATIONAL SENTRY
 * Commanded by: MD ABU HASAN
 */

"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Crosshair, Zap } from 'lucide-react';

export default function GeometryInspector() {
    const [isAuditing, setIsAuditing] = useState(false);

    // BRAND COLOR STACK
    const COLORS = {
        navy: "#002147",
        cyan: "#00D2FF",
        gold: "#FFD700",
        dark: "#010409"
    };

    return (
        <div className="relative p-12 bg-[#010409] border border-white/5 rounded-[40px] overflow-hidden group">

            {/* 1. INSTITUTIONAL OVERLAY */}
            <div className="flex justify-between items-start mb-12">
                <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#00D2FF] mb-2">Geometric Integrity Audit</h3>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Protocol: n-Law V1.0 // 0.1% Tolerance</p>
                </div>
                <button
                    onClick={() => setIsAuditing(!isAuditing)}
                    className="bg-white/5 hover:bg-[#00D2FF]/10 border border-white/10 p-3 rounded-full transition-all"
                >
                    <Zap size={16} className={isAuditing ? "text-[#FFD700] animate-pulse" : "text-gray-500"} />
                </button>
            </div>

            {/* 2. THE LOGO WORKSPACE */}
            <div className="relative flex items-center justify-center py-20 bg-[#002147]/30 rounded-[30px] border border-white/5">

                {/* LOGO ASSEMBLY */}
                <div className="flex items-end gap-[20%] relative"> {/* 20% Spacing Constant */}

                    {/* THE ICON */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg viewBox="0 0 500 500" className="w-full h-full">
                            <path d="M162.2 424.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8 9.1 16.9 10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5,4-4.6,7.5-6.1,11.1-5.2,12.4-.4 27.3 10.9 34.6 5.5 3.6 11.4 5.4 17.5 5.4 12.3 0 25-7.6 32.9-20 5.5-8.1 23.6-37 45-70.6 31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8h.9c9.3 0 18.2 5.1 23.2 13.1 4.8 7.9 5.4,16.8,1,24.7-3.6,7-6.6,11.3-10.9,18-3.1,4.9-7.3,11.2-13,20.6-14.4,22.5-31,48.7-47,74.2-24.4,38.9-47.7,75.7-55.3,86.8-17.5 24.1-45.5,38.6-75.1,38.6h0v-.6h.4,0Z" fill="#00D2FF" />
                            <path d="M396.5 425h-1.3c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4,5.7-9 5.7-9.1s0-.3.3-.3h0c0,0,.3,0,.3.3,1.6,2.7,27.4,45.3,49.4,81.8,17,28.2,31.9,52.8,32.2,53.5,4.2,7,4.2,15.2,0,22.5-5.2,9-15.4,14.9-25.6,14.9h0l.4.3h-.2,0Z" fill="#00D2FF" />
                            <circle cx="387.5" cy="112.5" r="37.5" fill="#FFD700" />
                        </svg>

                        {/* AUDIT OVERLAYS */}
                        {isAuditing && (
                            <>
                                {/* 45° Alignment Line */}
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                    className="absolute top-0 right-0 w-[140%] h-[1px] bg-[#FFD700]/40 origin-bottom-left -rotate-45 border-t border-dashed"
                                />
                                <span className="absolute -top-6 -right-12 text-[8px] font-bold text-[#FFD700]">45.0° LOCK</span>
                            </>
                        )}
                    </div>

                    {/* THE WORDMARK */}
                    <div className="relative">
                        <h2 className="text-7xl font-black uppercase tracking-tighter leading-none mb-[-4px] text-white">
                            INSPIRON<span className="font-light italic text-[#FFD700]">tech</span>
                        </h2>

                        {/* Height Mandate Audit */}
                        {isAuditing && (
                            <motion.div
                                initial={{ width: 0 }} animate={{ width: '100%' }}
                                className="absolute left-0 bottom-0 h-full border-x-2 border-y border-[#00D2FF]/30 pointer-events-none"
                            >
                                <div className="absolute -top-6 left-0 flex items-center gap-2">
                                    <Ruler size={10} className="text-[#00D2FF]" />
                                    <span className="text-[8px] font-black text-[#00D2FF] uppercase">1:1 x-Height Verified</span>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* SCANNING LINE */}
                {isAuditing && (
                    <motion.div
                        initial={{ top: 0 }} animate={{ top: '100%' }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-[#00D2FF] shadow-[0_0_20px_#00D2FF] z-20 opacity-40"
                    />
                )}
            </div>

            {/* 3. AUDIT STATUS BAR */}
            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/5 pt-8">
                <StatusNode label="Baseline Lock" active={isAuditing} />
                <StatusNode label="20% Gap Constant" active={isAuditing} />
                <StatusNode label="Pure Vector Node" active={true} />
                <StatusNode label="ROI Node Alignment" active={isAuditing} />
            </div>

            <footer className="mt-12 text-center opacity-20">
                <p className="text-[8px] font-black uppercase tracking-[1em] text-gray-400">Geometrically Locked per n-Law</p>
            </footer>
        </div>
    );
}

function StatusNode({ label, active }: { label: string; active: boolean }) {
    return (
        <div className={`flex items-center gap-2 px-4 py-1 border ${active ? 'border-[#00D2FF] text-[#00D2FF]' : 'border-white/10 text-gray-500'} transition-all rounded-full`}>
            {active ? <ShieldCheck size={10} /> : <Crosshair size={10} />}
            <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
        </div>
    );
}
