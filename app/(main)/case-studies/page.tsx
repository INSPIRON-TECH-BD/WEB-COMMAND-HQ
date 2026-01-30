/**
 * CASE STUDIES PAGE - CORE_MISSION-CONTROL-WEB V2.0
 * Client Success Stories & Project Implementations
 * Authority: MD ABU HASAN | Official Manager.io Partner
 */

import React from 'react';
import { Building2, TrendingUp, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black pt-32 pb-24 px-6">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-electric-cyan/10 border border-electric-cyan/30 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-electric-cyan mb-8">
                    <Building2 size={14} />
                    100+ Crore Enterprise Deployments
                </div>

                <h1 className="font-institutional text-5xl md:text-7xl font-medium text-institutional-white uppercase tracking-tighter leading-[0.9] mb-6">
                    Case <span className="text-action-gold">Studies</span>
                </h1>

                <p className="font-institutional text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                    Real implementations. Real results. Molecular-level financial control for Bangladesh's industrial leaders.
                </p>
            </div>

            {/* Case Study Grid */}
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Nobin Agro Limited */}
                <div className="bg-white/5 border-2 border-action-gold/30 rounded-3xl p-12 hover:border-action-gold/50 transition-all group">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-action-gold/10 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-action-gold mb-4">
                                <Shield size={12} />
                                Featured Deployment
                            </div>
                            <h2 className="font-institutional text-4xl font-bold text-institutional-white mb-3">
                                Nobin Agro Limited
                            </h2>
                            <p className="text-gray-400 text-lg font-light">
                                Manager.io Full Implementation | 150+ Crore Aquaculture Enterprise
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="text-5xl font-black text-action-gold mb-2">৳150Cr+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Annual Revenue</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="text-3xl font-black text-electric-cyan mb-2">4 Weeks</div>
                            <p className="text-gray-400 text-sm">Full Deployment Timeline</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="text-3xl font-black text-action-gold mb-2">0.08%</div>
                            <p className="text-gray-400 text-sm">Variance Error Rate</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="text-3xl font-black text-institutional-white mb-2">100%</div>
                            <p className="text-gray-400 text-sm">VAT Act 2012 Compliance</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <h3 className="font-institutional text-xl font-bold text-institutional-white uppercase">
                            Implementation Scope
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-action-gold flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-300 text-sm">Complete Chart of Accounts restructure</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-action-gold flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-300 text-sm">Multi-pond Production Order tracking</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-action-gold flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-300 text-sm">Feed inventory reconciliation automation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="text-action-gold flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-300 text-sm">Export documentation compliance (AEO)</span>
                            </li>
                        </ul>
                    </div>

                    <a
                        href="https://wa.me/8801719300849?text=Inquiry: Case Study - Nobin Agro Limited"
                        className="inline-flex items-center gap-2 bg-action-gold text-deep-navy-black px-8 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-action-gold/90 transition active:scale-95"
                    >
                        Request Detailed Report
                        <ArrowRight size={14} />
                    </a>
                </div>

                {/* Coming Soon - Additional Case Studies */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-electric-cyan/30 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-electric-cyan/20 text-electric-cyan px-6 py-2 text-[10px] font-black uppercase tracking-wider rounded-bl-2xl">
                            In Progress
                        </div>
                        <div className="mt-8">
                            <h3 className="font-institutional text-2xl font-bold text-institutional-white mb-3">
                                AquaSmart IoT Deployment
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Real-time dissolved oxygen monitoring integrated with Manager.io Production Orders
                            </p>
                            <div className="text-3xl font-black text-electric-cyan mb-2">Q2 2026</div>
                            <p className="text-gray-500 text-sm">Expected Completion</p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-institutional-white/30 rounded-3xl p-12">
                        <h3 className="font-institutional text-2xl font-bold text-institutional-white mb-3">
                            Custom BI Dashboard
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Next.js-powered real-time Net Profit tracking for multi-location textile manufacturer
                        </p>
                        <div className="text-3xl font-black text-institutional-white mb-2">Under NDA</div>
                        <p className="text-gray-500 text-sm">Confidential Client</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto mt-20 bg-electric-cyan/10 border border-electric-cyan/30 rounded-3xl p-12 text-center">
                <TrendingUp className="mx-auto mb-6 text-electric-cyan" size={48} />
                <h3 className="font-institutional text-3xl font-bold text-electric-cyan uppercase mb-4">
                    Ready to Join Our Success Stories?
                </h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                    Every deployment starts with a free audit. We identify your accounting blackholes before proposing a solution.
                </p>
                <a
                    href="https://wa.me/8801719300849?text=Request: Free Accounting Audit"
                    className="inline-flex items-center gap-2 bg-electric-cyan text-deep-navy-black px-10 py-5 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-electric-cyan/90 transition active:scale-95"
                >
                    Book Free Audit
                    <ArrowRight size={14} />
                </a>
            </div>
        </div>
    );
}
