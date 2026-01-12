import React from 'react';
import { InspironLogo } from '@/components/Branding/Logo';
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

            {/* NAVIGATION */}
            <nav className="border-b border-white/5 py-6 px-8 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="w-40"><InspironLogo /></div>
                <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                    <Link href="/services" className="hover:text-aqua transition-colors">Services</Link>
                    <Link href="/precision-audit" className="hover:text-aqua transition-colors">Precision Audit</Link>
                    <a href="https://wa.me/8801601618030" className="text-aqua">Initiate Audit</a>
                </div>
            </nav>

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

            {/* FOOTER */}
            <footer className="py-20 text-center border-t border-white/5">
                <div className="w-32 mx-auto grayscale opacity-20 hover:opacity-100 transition mb-10"><InspironLogo /></div>
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-[1em]">MD ABU HASAN | DHAKA | 2026</p>
            </footer>
        </div>
    );
}
