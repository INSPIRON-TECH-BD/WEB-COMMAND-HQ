
import React from 'react';
import { ShieldCheck, TrendingUp, Activity, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NobinAgroCaseStudy() {
    return (
        <div className="min-h-screen bg-[#010409] text-white selection:bg-aqua selection:text-navy font-sans">

            {/* NAVIGATION */}
            <nav className="border-b border-white/5 py-6 px-10 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all flex items-center gap-2">
                    <ArrowLeft size={14} /> Back to Hub
                </Link>
                <div className="flex gap-6 items-center">
                    <Link href="/services" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all hidden md:block">
                        Services
                    </Link>
                    <a href="https://www.upwork.com/fl/abuhasan" target="_blank" className="bg-[#14a800] text-white px-4 py-2 rounded font-bold hover:bg-[#0d7a00] transition-all normal-case tracking-normal text-[10px] flex items-center gap-2">
                        💼 Hire on Upwork
                    </a>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="py-24 px-10 relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-3 bg-aqua/10 border border-aqua/20 px-6 py-2 rounded-full mb-10">
                        <Activity size={14} className="text-aqua" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-aqua">Case Study: Aquaculture Automation</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        How Manager.io Reduced Admin Overhead by <span className="text-aqua">40%</span> in Aquaculture.
                    </h1>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl">
                        Nobin Agro Farm: Transforming a traditional 29-pond operation into a data-driven enterprise with 99.9% data integrity.
                    </p>
                </div>
            </section>

            {/* METRICS GRID */}
            <section className="py-20 px-10 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <div className="p-10 bg-black/40 border border-white/10 rounded-[32px]">
                        <TrendingUp className="text-aqua mb-6" size={32} />
                        <h3 className="text-4xl font-black mb-2 text-white">40%</h3>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Admin Reduction</p>
                    </div>
                    <div className="p-10 bg-black/40 border border-white/10 rounded-[32px]">
                        <ShieldCheck className="text-gold mb-6" size={32} />
                        <h3 className="text-4xl font-black mb-2 text-white">99.9%</h3>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Data Integrity</p>
                    </div>
                    <div className="p-10 bg-black/40 border border-white/10 rounded-[32px]">
                        <Activity className="text-white mb-6" size={32} />
                        <h3 className="text-4xl font-black mb-2 text-white">৳25.4M</h3>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Capital Recovered</p>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-32 px-10">
                <div className="max-w-3xl mx-auto space-y-16">
                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-widest mb-6 text-white border-l-4 border-aqua pl-6">The Challenge</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Nobin Agro Farm operated with 29 ponds and 50+ staff using manual inventory tracking.
                            The complexity of pond leasing, batch tracking, and financial reconciliation caused
                            60+ hours/month of administrative overhead. Capital leakage was a constant risk due to
                            manual data entry errors and lack of real-time visibility.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-widest mb-6 text-white border-l-4 border-gold pl-6">The Solution</h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-8">
                            We deployed the **Manager.io STARTER package** in just 5 days, specifically tailored for
                            aquaculture batch-lease allocation logic.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Custom Chart of Accounts for Aquaculture Industry",
                                "Automated Batch-Lease Allocation Logic",
                                "Real-time Financial Visibility across 29 Ponds",
                                "NBR-Compliant Reporting Structure",
                                "Automated Invoicing and Payment Tracking"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <CheckCircle2 size={16} className="text-aqua" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-12 bg-aqua/5 border border-aqua/20 rounded-[40px] text-center">
                        <h3 className="text-xl font-bold italic text-white mb-6">
                            "The transition from manual ledgers to Manager.io was seamless. We now have absolute clarity on our COGS and batch profitability."
                        </h3>
                        <p className="text-aqua font-black uppercase tracking-widest text-xs">— Nobin Agro Leadership</p>
                    </div>

                    <div className="text-center pt-10">
                        <a
                            href="https://www.upwork.com/fl/abuhasan"
                            target="_blank"
                            className="inline-flex items-center gap-4 bg-[#14a800] text-white font-black px-12 py-6 rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-[0_0_60px_rgba(20,168,0,0.3)]"
                        >
                            💼 Book Your Project on Upwork
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
