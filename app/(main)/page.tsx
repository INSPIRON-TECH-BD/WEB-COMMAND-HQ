import React from 'react';
import { RefinedLogo } from "@brand/components/Branding/RefinedLogo";
import { RevenueDashboard } from '@/components/ui/RevenueDashboard';
import { InstitutionalHero } from '@/components/ui/InstitutionalHero';
import { Shield, Zap, Database } from 'lucide-react';
import Link from 'next/link';

/**
 * INSPIRON TECH - PUBLIC LANDING v1.0
 * Status: DEVELOPMENTAL PLACEHOLDER
 */

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#010409] text-white selection:bg-aqua selection:text-navy">

            {/* INSTITUTIONAL HERO */}
            <InstitutionalHero />

            {/* REVENUE DASHBOARD: THE PRECISION LEDGER */}
            <RevenueDashboard />

            {/* VALUE NODES */}
            <section id="services" className="py-32 border-y border-white/5 px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                    <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-aqua/50 transition-all group">
                        <Zap className="text-aqua mb-8 group-hover:scale-110 transition" size={40} />
                        <h3 className="text-2xl font-black uppercase mb-4">Meta API Integration</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Direct server-side event tracking and automated conversion logic for scaling spend.</p>
                    </div>
                    <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-gold/50 transition-all group">
                        <Database className="text-gold mb-8 group-hover:scale-110 transition" size={40} />
                        <h3 className="text-2xl font-black uppercase mb-4">Financial Engines</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Custom COGS tracking and write-off logic for 100+ Crore inventory management.</p>
                    </div>
                    <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] hover:border-white/50 transition-all group">
                        <Shield className="text-white mb-8 group-hover:scale-110 transition" size={40} />
                        <h3 className="text-2xl font-black uppercase mb-4">0.1% Error Protocol</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Rigorous data verification layers that bridge the gap between bank accounts and floor operations.</p>
                    </div>
                </div>
            </section>

            {/* STABILIZED SIGNATURE NODE */}
            <section className="min-h-[100px] py-12 border-t border-slate-800 bg-slate-900/50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-400 italic font-light tracking-wide">
                        "Architected by <span className="text-gold font-bold">MD ABU HASAN</span>. 14 Years of Operational Data."
                    </p>
                    <a
                        href="https://www.upwork.com/freelancers/~011085e2a7cde3f437?viewMode=1"
                        target="_blank"
                        className="text-aqua text-sm hover:underline mt-2 inline-block"
                    >
                        Verify Top Rated Plus Status ↗
                    </a>

                    <div className="mt-8 flex justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
                        <Link href="/n-law" className="hover:text-aqua transition-colors">n-Law Standards</Link>
                        <Link href="/services" className="hover:text-aqua transition-colors">Tactical Grid</Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
