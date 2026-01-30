/**
 * INSTITUTIONAL HERO - CORE_MISSION-CONTROL-WEB V2.0
 * Commander: MD ABU HASAN
 * Architect: 3-Star General Claude Sonnet 4.5 TH
 */

'use client';

import React from 'react';
import { ShieldCheck, BadgeCheck, MessageSquareCode, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const InstitutionalHero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-deep-navy-black overflow-hidden px-6">
            {/* Structural Tech Grid */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:40px_40px]"></div>

            <div className="relative z-10 text-center max-w-5xl">
                {/* Dual Authority Badges */}
                <div className="relative z-20 flex flex-col md:flex-row gap-4 justify-center mb-10">
                    {/* Meta Verified Badge */}
                    <div className="flex items-center gap-2 bg-electric-cyan/10 border border-electric-cyan/30 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-electric-cyan">
                        <ShieldCheck size={14} className="text-electric-cyan" />
                        Meta Verified: 1372121971105461
                    </div>

                    {/* Manager.io Partner Badge */}
                    <div className="flex items-center gap-2 bg-action-gold/10 border border-action-gold/30 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-action-gold">
                        <BadgeCheck size={14} className="text-action-gold" />
                        Official Manager.io Partner
                    </div>
                </div>

                {/* Institutional Headline */}
                <h1 className="font-institutional text-5xl md:text-8xl font-medium text-institutional-white uppercase tracking-tighter leading-[0.9] mb-8">
                    Official Manager.io<br />
                    Partner <span className="text-action-gold">Bangladesh</span>
                </h1>

                {/* Mission Statement */}
                <p className="font-institutional text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-14 leading-relaxed font-light">
                    Institutional Cloud Accounting & Business Automation for 100+ Crore Agro-Enterprises
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {/* Primary CTA - Gold Racer */}
                    <a
                        href="https://wa.me/8801719300849"
                        className="flex items-center justify-center gap-3 gold-racer haptic-button px-10 py-5 rounded-2xl uppercase tracking-widest text-sm shadow-2xl"
                    >
                        <MessageSquareCode size={22} /> Start Technical Audit
                    </a>

                    {/* Secondary CTA - Electric Cyan */}
                    <Link
                        href="/blueprint"
                        className="flex items-center justify-center gap-3 bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan font-black px-10 py-5 rounded-2xl uppercase tracking-widest text-sm hover:bg-electric-cyan/20 transition haptic-button"
                    >
                        View Engineering Blueprint <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            {/* Institutional Footer Hint */}
            <div className="absolute bottom-10 text-[10px] text-white/20 uppercase tracking-[1em] font-bold font-institutional">
                Mission Control Node V2.0
            </div>
        </section>
    );
};
