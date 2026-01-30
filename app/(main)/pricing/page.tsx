/**
 * PRICING PAGE - CORE_MISSION-CONTROL-WEB V2.0
 * Transparent Service Pricing with Kinetic Palette
 * Authority: MD ABU HASAN | Official Manager.io Partner
 */

import React from 'react';
import { Check, Shield, MessageSquareCode, Zap } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black pt-32 pb-24 px-6">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-action-gold/10 border border-action-gold/30 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-action-gold mb-8">
                    <Shield size={14} />
                    Official Manager.io Partner Pricing
                </div>

                <h1 className="font-institutional text-5xl md:text-7xl font-medium text-institutional-white uppercase tracking-tighter leading-[0.9] mb-6">
                    Transparent <span className="text-action-gold">Pricing</span>
                </h1>

                <p className="font-institutional text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                    Industrial-grade solutions with zero hidden costs. Every deployment governed by the 0.1% Error Protocol.
                </p>
            </div>

            {/* Pricing Grid */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Manager.io Implementation */}
                <div className="bg-white/5 border-2 border-action-gold/30 rounded-3xl p-10 hover:border-action-gold/50 transition-all group">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-institutional text-2xl font-bold text-action-gold uppercase">Manager.io Implementation</h3>
                        <Zap className="text-action-gold" size={32} />
                    </div>

                    <div className="mb-8">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-institutional-white">৳50,000</span>
                        </div>
                        <p className="text-gray-400 text-sm font-light">4-Week Full Implementation</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start gap-3">
                            <Check className="text-action-gold flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Complete Chart of Accounts setup tailored to your business</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-action-gold flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Manager.io Cloud deployment & configuration</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-action-gold flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Staff training & documentation</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-action-gold flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">30-day post-deployment support</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-action-gold flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Compliance with Bangladesh VAT Act 2012</span>
                        </li>
                    </ul>

                    <a
                        href="https://wa.me/8801719300849?text=Inquiry: Manager.io Implementation - BDT 50,000"
                        className="w-full flex items-center justify-center gap-2 bg-action-gold text-deep-navy-black px-6 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-action-gold/90 transition active:scale-95"
                    >
                        <MessageSquareCode size={14} />
                        Book Implementation
                    </a>
                </div>

                {/* AquaSmart IoT */}
                <div className="bg-white/5 border-2 border-electric-cyan/30 rounded-3xl p-10 hover:border-electric-cyan/50 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-electric-cyan text-deep-navy-black px-4 py-1 text-[9px] font-black uppercase tracking-wider rounded-bl-xl">
                        R&D Alpha
                    </div>

                    <div className="flex items-center justify-between mb-8 mt-6">
                        <h3 className="font-institutional text-2xl font-bold text-electric-cyan uppercase">AquaSmart IoT</h3>
                        <Shield className="text-electric-cyan" size={32} />
                    </div>

                    <div className="mb-8">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-institutional-white">৳200,000+</span>
                        </div>
                        <p className="text-gray-400 text-sm font-light">Per Industrial Node</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start gap-3">
                            <Check className="text-electric-cyan flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Dissolved Oxygen monitoring (0.1 mg/L precision)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-electric-cyan flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">pH, Temperature, Ammonia, Salinity sensors</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-electric-cyan flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Manager.io Production Order integration</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-electric-cyan flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Real-time Telegram/SMS alerts</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-electric-cyan flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Solar-powered with IP67 durability</span>
                        </li>
                    </ul>

                    <Link
                        href="/services/aquasmart-iot"
                        className="w-full flex items-center justify-center gap-2 bg-electric-cyan text-deep-navy-black px-6 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-electric-cyan/90 transition active:scale-95"
                    >
                        View Tech Specs
                    </Link>
                </div>

                {/* Custom BI Dashboards */}
                <div className="bg-white/5 border-2 border-institutional-white/30 rounded-3xl p-10 hover:border-institutional-white/50 transition-all group">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-institutional text-2xl font-bold text-institutional-white uppercase">Custom BI Dashboards</h3>
                        <Zap className="text-institutional-white" size={32} />
                    </div>

                    <div className="mb-8">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-institutional-white">Custom</span>
                        </div>
                        <p className="text-gray-400 text-sm font-light">6-8 Week Implementation</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start gap-3">
                            <Check className="text-institutional-white flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Real-time Net Profit tracking dashboards</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-institutional-white flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Automated revenue recognition workflows</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-institutional-white flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Multi-currency consolidation</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-institutional-white flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Export-ready AEO compliance reports</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-institutional-white flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-300 text-sm">Encrypted mobile-first interface</span>
                        </li>
                    </ul>

                    <a
                        href="https://wa.me/8801719300849?text=Inquiry: Custom BI Dashboard - Quote Request"
                        className="w-full flex items-center justify-center gap-2 bg-institutional-white text-deep-navy-black px-6 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-institutional-white/90 transition active:scale-95"
                    >
                        <MessageSquareCode size={14} />
                        Request Quote
                    </a>
                </div>
            </div>

            {/* Enterprise Guarantee */}
            <div className="max-w-4xl mx-auto mt-20 bg-action-gold/10 border border-action-gold/30 rounded-3xl p-12 text-center">
                <h3 className="font-institutional text-3xl font-bold text-action-gold uppercase mb-4">
                    100+ Crore Enterprise Guarantee
                </h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                    Every deployment is governed by the <span className="text-action-gold font-bold">0.1% Error Protocol</span>.
                    If variance exceeds this threshold, we rebuild at no cost.
                </p>
            </div>
        </div>
    );
}
