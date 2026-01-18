'use client';

/**
 * INSPIRON TECH - Brand-Engine Command Node
 * Objective: Centralized Asset Management & AI Prompt Generation
 * commanded by MD ABU HASAN
 */

import React from 'react';
import { Copy, Terminal, ExternalLink, ShieldCheck, Globe, Linkedin, Facebook } from 'lucide-react';

const BRAND_ASSETS = {
    upwork: {
        title: "Manager.io Official Partner | ERP Engineer | Zero Error Protocol",
        headline: "MANAGER ERP SPECIALIST | 40% COST REDUCTION FOR NOBIN AGRO FARM",
        prompt: "High-precision technical blueprint of a digital ledger on Oxford Blue (#002147). Electric Cyan (#00D2FF) lines, Gold (#FFD700) spark dot. Label: '0.1% ERROR PROTOCOL'."
    },
    linkedin: {
        title: "ERP Systems Architect | Official Manager.io Partner | INSPIRON TECH Founder",
        summary: "Engineering operational supremacy for Bangladesh agro & manufacturing. I bridge the gap between the factory floor and financial reports.",
        prompt: "Professional LinkedIn banner: Dark Oxford Navy theme with glowing Electric Cyan data nodes. Text: 'MD ABU HASAN | SYSTEMS ARCHITECT'."
    }
};

export default function BrandEngine() {
    return (
        <div className="min-h-screen bg-[#010409] text-white p-10 font-sans selection:bg-aqua selection:text-navy">
            <header className="mb-16 border-b border-white/5 pb-10">
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">
                    INSPIRON <span className="text-aqua text-5xl">BRAND-ENGINE</span>
                </h1>
                <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                    Institutional Asset Generator for MD ABU HASAN
                </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-10">
                {/* UPWORK NODE */}
                <section className="bg-white/[0.02] border border-white/5 p-8 rounded-[32px] hover:border-aqua/30 transition-all">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                            <Globe className="text-aqua" size={20} /> Upwork Terminal
                        </h2>
                        <span className="text-[10px] bg-aqua/10 text-aqua px-3 py-1 rounded-full font-black uppercase tracking-widest">Target: BDT 9M</span>
                    </div>

                    <AssetBlock label="Authority Title" content={BRAND_ASSETS.upwork.title} />
                    <AssetBlock label="Whale Hook Headline" content={BRAND_ASSETS.upwork.headline} />
                    <AssetBlock label="Antigravity Media Prompt" content={BRAND_ASSETS.upwork.prompt} isPrompt />
                </section>

                {/* LINKEDIN NODE */}
                <section className="bg-white/[0.02] border border-white/5 p-8 rounded-[32px] hover:border-blue-400/30 transition-all">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                            <Linkedin className="text-blue-400" size={20} /> LinkedIn Sentry
                        </h2>
                    </div>

                    <AssetBlock label="Professional Headline" content={BRAND_ASSETS.linkedin.title} />
                    <AssetBlock label="Institutional Bio" content={BRAND_ASSETS.linkedin.summary} />
                    <AssetBlock label="Visual Asset Prompt" content={BRAND_ASSETS.linkedin.prompt} isPrompt />
                </section>
            </div>

            <footer className="mt-20 opacity-20 text-center font-mono text-[10px] uppercase tracking-[1em]">
                Operational Supremacy // commanded by MD ABU HASAN
            </footer>
        </div>
    );
}

function AssetBlock({ label, content, isPrompt = false }: { label: string, content: string, isPrompt?: boolean }) {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="mb-6 last:mb-0 group">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 block mb-2">{label}</label>
            <div className={`relative p-4 rounded-xl border border-white/5 transition-all group-hover:bg-white/[0.02] ${isPrompt ? 'bg-aqua/5 font-mono text-xs text-aqua' : 'bg-black/40 text-sm'}`}>
                <p className="pr-10">{content}</p>
                <button
                    onClick={() => copyToClipboard(content)}
                    className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors"
                >
                    <Copy size={16} />
                </button>
            </div>
        </div>
    );
}
