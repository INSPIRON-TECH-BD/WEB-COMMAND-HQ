"use client";

/**
 * INSPIRON TECH - The n-Law Standards // REV 2026.1
 * Official Operational Code // Brand Geometry Lab Integration
 */

import React, { useState, useEffect } from 'react';
import {
    Scale, ShieldCheck, ArrowRight, Zap, Lock,
    Hexagon, Code2, ShieldAlert, CheckCircle2, Factory,
    Ruler, Crosshair, Activity, Database, BarChart3,
    ChevronRight, Globe, Terminal, TrendingUp, Download,
    MessageSquare, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

// Register ChartJS modules
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler
);

// --- MASTER ASSETS ---

const MasterLockup = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 358.846 350.3" className={className}>
        <defs>
            <mask id="VaultMask_Final" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">
                <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z" />
                <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z"
                    fill="none" stroke="#000" strokeWidth="24px" strokeLinecap="round" strokeLinejoin="round" />
            </mask>
        </defs>
        <g mask="url(#VaultMask_Final)">
            <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="currentColor" />
        </g>
        <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="currentColor" />
        <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700" />
    </svg>
);

// --- COMPONENTS ---

const BalanceChart = () => {
    const data = {
        labels: ['Navy', 'Cyan', 'Gold', 'UI Base'],
        datasets: [{
            data: [45, 30, 15, 10],
            backgroundColor: ['#002147', '#00D2FF', '#FFD700', 'rgba(255, 255, 255, 0.05)'],
            borderWidth: 0,
            hoverOffset: 25
        }]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        cutout: '90%',
        plugins: { legend: { display: false } }
    };

    return <Doughnut data={data} options={options} />;
};

const VelocityChart = () => {
    const data = {
        labels: ['-6H', '-4H', '-2H', 'SYNC', '+2H', '+4H'],
        datasets: [{
            label: 'Sync Mbps',
            data: [420, 810, 560, 1200, 980, 1350],
            borderColor: '#00D2FF',
            borderWidth: 6,
            pointRadius: 0,
            tension: 0.45,
            fill: true,
            backgroundColor: (context: any) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 150);
                gradient.addColorStop(0, 'rgba(0, 210, 255, 0.3)');
                gradient.addColorStop(1, 'rgba(0, 210, 255, 0)');
                return gradient;
            }
        }]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    };

    return <Line data={data} options={options} />;
};

export default function NLawStandards() {
    const [isAuditing, setIsAuditing] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const headerOffset = 100;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    const copyCode = () => {
        const text = [
            '<!-- INSPIRON TECH // MASTER ASSET REV 2026.1 -->',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.846 350.3">',
            '  <defs>',
            '    <mask id="inspiron-gap" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">',
            '      <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z"/>',
            '      <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5..." style="fill:none; stroke:#000; stroke-width:24px"/>',
            '    </mask>',
            '  </defs>',
            '  <g mask="url(#inspiron-gap)">',
            '    <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9..." fill="#00D2FF"/>',
            '  </g>',
            '  <path d="M321.346 350..." fill="#00D2FF"/>',
            '  <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"/>',
            '</svg>'
        ].join('\n');

        navigator.clipboard.writeText(text);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    return (
        <div className="min-h-screen bg-[#010409] text-white selection:bg-aqua selection:text-navy font-institutional overflow-x-hidden">

            {/* TOAST NOTIFICATION */}
            <div id="toast" className={showToast ? 'active' : ''}>
                <span className="font-bold tracking-widest text-[#00D2FF] mr-2">✓</span> REV 2026.1 MASTER COPIED
            </div>

            {/* QUICK NAV BAR */}
            <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[90] hidden lg:flex items-center gap-8 px-8 py-3 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                <button onClick={() => scrollToId('vision')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#00D2FF] transition-colors">00. Vision</button>
                <button onClick={() => scrollToId('anatomy')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#00D2FF] transition-colors">01. Anatomy</button>
                <button onClick={() => scrollToId('typography')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#00D2FF] transition-colors">02. Typography</button>
                <button onClick={() => scrollToId('simulation')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#00D2FF] transition-colors">03. Simulation</button>
            </div>

            <main className="pb-32">

                {/* 00. INTRO SECTION: BRAND VISION */}
                <section id="vision" className="pt-48 pb-32 px-10 text-center max-w-6xl mx-auto space-y-8 bg-[#010409] blueprint-grid border-b border-white/5 rounded-b-[4rem] shadow-sm relative overflow-hidden">
                    <div className="space-y-6 max-w-3xl mx-auto relative z-10">
                        <div className="flex justify-center">
                            <span className="px-5 py-2 bg-[#00D2FF]/10 text-[#00D2FF] text-[11px] font-bold rounded-full tracking-[0.4em] uppercase border border-[#00D2FF]/20 shadow-sm">Submission Final v2026.1</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">Institutional Equilibrium</h1>
                        <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed mt-10">
                            The final synthesis of Inspiron Tech's core logic. A mathematical architecture where geometry and typography exist in a state of absolute, axis-locked stability.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-12">
                            <button onClick={() => scrollToId('anatomy')} className="bg-white text-[#002147] px-10 py-5 rounded-[1.5rem] font-bold uppercase text-xs tracking-widest shadow-2xl active:scale-95 hover:bg-[#00D2FF] hover:text-white transition-all">Explore Geometry</button>
                            <button onClick={() => scrollToId('simulation')} className="bg-white/5 text-slate-400 px-10 py-5 rounded-[1.5rem] font-bold uppercase text-xs tracking-widest border border-white/10 hover:bg-white/10 transition-all">Live Test</button>
                        </div>
                    </div>
                </section>

                {/* 01. GEOMETRIC ANATOMY */}
                <section id="anatomy" className="py-40 px-8 max-w-7xl mx-auto space-y-24">
                    <div className="space-y-6 max-w-2xl border-l-[8px] border-[#FFD700] pl-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">01. Geometric Anatomy</h2>
                        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                            This quadrant validates the 358.846 coordinate system. By locking the vertical spine at X=321.346, the Golden Dot (r=37.5) anchors the composition, preventing visual drift at extreme resolutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="bg-[#002147]/50 rounded-[5rem] p-20 md:p-32 relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,33,71,0.3)] border border-white/5">
                            <div className="absolute inset-0 blueprint-grid opacity-10"></div>

                            {/* Axis Guide */}
                            {isAuditing && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute top-0 bottom-0 w-[1px] bg-red-500/50 border-l border-dashed border-red-500 z-50 left-[89.5%]"
                                />
                            )}

                            <div className="relative z-20 w-full aspect-square text-[#00D2FF] glow-cyan transition-transform duration-1000 group-hover:scale-[1.03]">
                                <MasterLockup />
                            </div>
                            <div className="absolute bottom-12 left-0 right-0 flex justify-center z-30">
                                <button onClick={() => setIsAuditing(!isAuditing)} className={`px-8 py-3 backdrop-blur-xl text-white text-[10px] font-bold rounded-full border border-white/20 uppercase tracking-[0.25em] transition-all ${isAuditing ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-white/10 hover:bg-white/20'}`}>
                                    {isAuditing ? 'Detach Structural Spine' : 'Toggle Structural Spine'}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="bg-white/[0.02] rounded-[3.5rem] p-12 border border-white/5 shadow-sm space-y-10">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-500">Equilibrium Audit</h3>
                                    <span className="text-[10px] font-mono text-green-500 font-bold uppercase">Verified</span>
                                </div>
                                <div className="h-[280px] md:h-[350px]">
                                    <BalanceChart />
                                </div>
                                <p className="text-[11px] text-slate-500 font-light italic leading-relaxed text-center">
                                    Distribution Analysis: The color mass distribution across Navy (Structural), Cyan (Operational), and Gold (Indicator) nodes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 02. TYPOGRAPHIC HUB */}
                <section id="typography" className="py-40 bg-[#00152e] relative overflow-hidden border-y border-white/5">
                    <div className="absolute inset-0 blueprint-grid opacity-5"></div>
                    <div className="max-w-6xl mx-auto px-10 space-y-32 relative z-20">
                        <div className="text-center space-y-4 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">02. Typographic Hub</h2>
                            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                                Verification of the official Neo Sans Pro implementation. We analyze the 500-weight "Identifier" node against the 300-weight "Sector" node.
                            </p>
                        </div>

                        <div className="bg-white/[0.02] rounded-[5rem] p-24 md:p-36 border border-white/10 backdrop-blur-md flex flex-col items-center shadow-2xl">
                            {/* THE MASTER LOCKUP (OLED MAGNIFICATION) */}
                            <div className="flex flex-col md:flex-row items-center gap-16 transition-all duration-1000 hover:scale-[1.02] group">
                                <div className="w-32 h-32 md:w-44 md:h-44 text-[#00D2FF] glow-cyan">
                                    <MasterLockup />
                                </div>
                                <div className="flex items-baseline leading-none pt-4">
                                    <span className="text-7xl md:text-[12rem] font-medium lowercase text-white tracking-tighter">inspiron</span>
                                    <span className="text-6xl md:text-[10rem] font-light uppercase text-[#FFD700] ml-6 tracking-[0.1em] group-hover:tracking-[0.18em] transition-all duration-1000">TECH</span>
                                </div>
                            </div>

                            <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
                                <div className="p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/5 space-y-4">
                                    <span className="text-[10px] font-bold text-[#00D2FF] uppercase tracking-[0.4em]">Node A: Medium Identifier</span>
                                    <div className="text-4xl font-medium lowercase text-white">Neo Sans Medium</div>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">The core brand anchor. Corrected shoulder tangency for the 'r' ensures visual fluidity on 4K displays. Verified at weight 500.</p>
                                </div>
                                <div className="p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/5 space-y-4">
                                    <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-[0.4em]">Node B: Light Sector</span>
                                    <div className="text-4xl font-light uppercase text-white">Institutional Tech</div>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">Technical precision node. Rendered at weight 300 to provide visual depth and hierarchical contrast against the primary lockup.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 03. OPERATIONAL SIMULATION */}
                <section id="simulation" className="py-40 px-8 max-w-7xl mx-auto space-y-32 transition-all">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">03. Operational Simulation</h2>
                            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                                Validating brand integrity in the crucible of operational use. High-density OLED vs. administrative LCD environments.
                            </p>
                        </div>
                        <div className="px-6 py-2.5 bg-green-500/10 rounded-2xl flex items-center gap-2 border border-green-500/20">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[11px] font-bold uppercase text-green-500 tracking-widest">Protocol: Syncing</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* MISSION CONTROL: OLED */}
                        <div className="space-y-10">
                            <p className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.6em] text-center">Mission Control // Flagship OLED</p>
                            <div className="app-frame h-[800px] flex flex-col bg-[#010409] border-[#1e293b] shadow-[0_0_150px_rgba(0,210,255,0.15)]">
                                <div className="h-28 bg-black/95 backdrop-blur-3xl flex items-center px-12 justify-between border-b border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 text-[#00D2FF] glow-cyan"><MasterLockup /></div>
                                        <div className="flex items-baseline pt-1">
                                            <span className="font-medium text-2xl lowercase text-white tracking-tighter leading-none">inspiron</span>
                                            <span className="font-light text-xl uppercase text-[#FFD700] ml-1.5 tracking-widest leading-none">TECH</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex-1 p-12 space-y-12 overflow-y-auto custom-scroll">
                                    <div className="space-y-3">
                                        <h4 className="text-white text-5xl font-black tracking-tight uppercase leading-[0.9]">Vault Dashboard</h4>
                                        <p className="text-slate-600 text-sm italic">Encrypted node synchronization active...</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-white/5 rounded-[3rem] p-10 border border-white/5">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] mb-4">Total Packets</div>
                                            <div className="text-5xl font-black text-white leading-none">42.8<span className="text-xl font-light text-slate-600 ml-1">PB</span></div>
                                        </div>
                                        <div className="bg-white/5 rounded-[3rem] p-10 border border-white/5">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] mb-4">Sync Health</div>
                                            <div className="text-5xl font-black text-[#FFD700] leading-none">100<span className="text-xl font-light text-slate-600 ml-1">%</span></div>
                                        </div>
                                    </div>
                                    <div className="p-12 rounded-[4.5rem] bg-gradient-to-br from-[#00152e] to-black border border-[#00D2FF]/20 relative overflow-hidden group">
                                        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                                        <div className="text-[11px] font-mono text-white/30 uppercase tracking-[0.5em] mb-10 relative z-20">Network Throughput (Gbps)</div>
                                        <div className="h-32 relative z-20">
                                            <VelocityChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ADMIN PANEL: LCD */}
                        <div className="space-y-10">
                            <p className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.6em] text-center">Admin Panel // Budget LCD</p>
                            <div className="app-frame h-[800px] flex flex-col border-slate-300 bg-slate-200">
                                <div className="h-28 bg-white flex items-center px-14 justify-between border-b-2 border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 text-[#002147]"><MasterLockup /></div>
                                        <div className="flex items-baseline pt-1">
                                            <span className="font-medium text-2xl lowercase text-slate-900 tracking-tighter leading-none">inspiron</span>
                                            <span className="font-light text-xl uppercase text-[#002147] ml-1.5 tracking-widest leading-none">TECH</span>
                                        </div>
                                    </div>
                                    <div className="w-14 h-1.5 bg-slate-200 rounded-full"></div>
                                </div>
                                <div className="flex-1 p-14 space-y-14 bg-white m-12 rounded-[5rem] shadow-xl border border-slate-200 overflow-hidden">
                                    <div className="space-y-4 border-b border-slate-100 pb-10">
                                        <h4 className="text-slate-900 font-black text-5xl tracking-tight uppercase leading-[0.85]">Protocol Config</h4>
                                        <p className="text-slate-400 text-md font-light">Node Authority: <strong className="text-[#002147] font-bold">Inspiron Tech BD</strong></p>
                                    </div>
                                    <div className="space-y-10">
                                        <div className="space-y-4">
                                            <label className="text-[12px] font-bold uppercase tracking-[0.4em] text-slate-400 ml-2">Vault Endpoint</label>
                                            <div className="w-full h-20 bg-slate-50 border-2 border-slate-100 rounded-[2rem] flex items-center px-10 text-slate-700 font-bold text-xl font-mono">vault.inspiron.tech/v2026.1</div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[12px] font-bold uppercase tracking-[0.4em] text-slate-400 ml-2">Sync Status</label>
                                            <div className="w-full h-20 bg-slate-50 border-2 border-slate-100 rounded-[2rem] flex items-center px-10 text-green-600 font-black text-xl uppercase tracking-[0.2em]">TLS 1.3 / SECURE</div>
                                        </div>
                                    </div>
                                    <button className="w-full py-8 bg-[#002147] text-white rounded-[2.5rem] font-black text-xl tracking-[0.25em] uppercase shadow-2xl shadow-navy-950/20 active:scale-[0.97] transition-all hover:bg-[#00D2FF]">Update Synchronization</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 04. PRODUCTION ASSET EXPORT */}
                <section className="py-40 bg-[#010409] relative overflow-hidden border-t border-white/5">
                    <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                    <div className="max-w-4xl mx-auto px-10 relative z-20 text-center space-y-14">
                        <div className="space-y-4">
                            <h3 className="text-[#00D2FF] font-mono text-[12px] tracking-[0.7em] uppercase">MIGRATION VAULT ASSET</h3>
                            <p className="text-white text-4xl font-black uppercase tracking-tighter">Geometric Master Export</p>
                        </div>
                        <div className="bg-white/[0.02] p-14 rounded-[5rem] border border-white/10 backdrop-blur-3xl group shadow-[0_0_120px_rgba(0,0,0,0.6)]">
                            <pre className="text-[#00D2FF] text-[12px] leading-relaxed overflow-x-auto text-left custom-scroll max-h-[400px] font-mono p-6 bg-black/40 rounded-3xl border border-white/5">
                                {`<!-- INSPIRON TECH // MASTER ASSET REV 2026.1 -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.846 350.3">
  <defs>
    <mask id="inspiron-gap" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">
      <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z"/>
      <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5..." style="fill:none; stroke:#000; stroke-width:24px"/>
    </mask>
  </defs>
  <g mask="url(#inspiron-gap)">
    <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9..." fill="#00D2FF"/>
  </g>
  <path d="M321.346 350..." fill="#00D2FF"/>
  <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"/>
</svg>`}
                            </pre>
                            <div className="mt-14 flex justify-center">
                                <button onClick={copyCode} className="bg-[#00D2FF] text-[#002147] px-20 py-7 rounded-[2.5rem] font-black uppercase text-sm tracking-[0.4em] shadow-[0_30px_60px_rgba(0,210,255,0.3)] transition-all hover:scale-105 active:scale-95">Copy Master Asset</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA: n-LAW GRID (LEGACY RE-INTEGRATED) */}
                <section className="py-40 bg-[#00152e] border-t border-white/5 px-10">
                    <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
                        <LawCard
                            number="01"
                            title="Zero Approximation"
                            icon={<Scale className="text-aqua" size={32} />}
                            content="All transaction data must be verified against field delivery challans. No manual entry is permitted without secondary systematic audit. Discrepancies > 0.01% trigger immediate re-verification."
                            color="border-aqua"
                        />
                        <LawCard
                            number="02"
                            title="Pure Vectoring"
                            icon={<Hexagon className="text-[#FFD700]" size={32} />}
                            content="The INSPIRON brand icon must never be exported in raster formats (JPEG/PNG) for institutional assets. 1:1 SVG precision is required to maintain architectural integrity at infinity scaling."
                            color="border-[#FFD700]"
                        />
                        <LawCard
                            number="03"
                            title="No Silicone Solutions"
                            icon={<Code2 className="text-white" size={32} />}
                            content="We reject subscription-based dependency. Every implementation must be a sovereign asset owned by the client, built on open-source foundations with zero vendor lock-in."
                            color="border-white"
                        />
                        <LawCard
                            number="04"
                            title="Persistent Audit"
                            icon={<ShieldAlert className="text-red-500" size={32} />}
                            content="Every automated workflow must include a persistent logging node. If a system fails, the root cause must be identifiable within 120 seconds of detection."
                            color="border-red-500"
                        />
                    </div>
                </section>
            </main>

            {/* INSTITUTIONAL FOOTER */}
            <footer className="py-32 bg-white px-12 border-t border-slate-100 flex flex-col items-center space-y-16">
                <div className="flex items-center gap-6 text-slate-300">
                    <div className="w-16 h-16 text-slate-200"><MasterLockup /></div>
                    <div className="w-48 h-px bg-slate-100"></div>
                    <span className="text-[12px] font-bold uppercase tracking-[0.8em]">Production Signature Verified</span>
                </div>
                <div className="text-center space-y-4">
                    <p className="text-[#002147] font-black text-5xl tracking-tighter uppercase leading-none">Architected by MD ABU HASAN</p>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.5em]">&copy; 2026 Inspiron Tech BD // Mission Control Protocol v2.1</p>
                </div>
            </footer>
        </div>
    );
}

function LawCard({ number, title, icon, content, color }: any) {
    return (
        <div className={`group relative p-12 bg-white/[0.02] border-t-4 ${color} hover:bg-white/[0.05] transition-all duration-500 rounded-b-3xl border-x border-b border-white/5`}>
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-black text-white stroke-text">{number}</span>
            </div>
            <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit border border-white/5">
                {icon}
            </div>
            <h3 className="text-2xl font-black uppercase mb-6 tracking-tight text-white group-hover:text-aqua transition-colors">
                Rule {number}: {title}
            </h3>
            <p className="text-gray-400 leading-relaxed font-medium text-sm">
                {content}
            </p>
        </div>
    );
}
