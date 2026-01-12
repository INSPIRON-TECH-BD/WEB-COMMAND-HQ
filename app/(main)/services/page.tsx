/**
 * INSPIRON TECH - Engineering Nodes (Services)
 * Objective: Justification for BDT 250k+ Project Rates
 */

import React from 'react';
import {
    Zap, Database, Globe, ShieldCheck,
    ArrowRight, MessageSquareCode, Settings2, Cpu
} from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
    {
        id: 'NODE_01',
        title: 'Manager.io Implementation',
        desc: 'Official Reseller & Implementation Partner in Bangladesh. We deploy custom COGS tracking and cloud-sync logic for high-volume inventory operations.',
        impact: '0.1% Error Tolerance',
        icon: Database,
        color: 'text-gold'
    },
    {
        id: 'NODE_02',
        title: 'Meta API Conversions',
        desc: 'Server-side event tracking and automated conversion logic. We bridge the gap between Meta Ads and real-time bank reconciliation.',
        impact: 'Scalable Meta ID: 1372121971105461',
        icon: Globe,
        color: 'text-aqua'
    },
    {
        id: 'NODE_03',
        title: 'Industrial IoT & Automation',
        desc: 'Custom firmware and data pipelines for aquaculture and manufacturing. Real-time pond-level monitor sensors integrated with financial reporting.',
        impact: 'Verified Site ID: 1129614909344159',
        icon: Cpu,
        color: 'text-white'
    },
    {
        id: 'NODE_04',
        title: 'Logic Migration & Audit',
        desc: 'Reconstructing fragmented legacy data into relational structures. We specialize in BDT 100 Crore+ turnover reconciliation missions.',
        impact: 'Zero-Discrepancy Guarantee',
        icon: Settings2,
        color: 'text-gray-400'
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#010409] text-white selection:bg-aqua selection:text-navy font-sans">

            {/* NAVIGATION */}
            <header className="border-b border-white/5 py-6 px-10 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all">
                    ← Return to Hub
                </Link>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aqua">Service Nodes v1.0</span>
            </header>

            {/* HERO SECTION */}
            <section className="py-24 px-10 bg-gradient-to-b from-[#002147]/20 to-transparent">
                <div className="max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-3 bg-aqua/10 border border-aqua/20 px-6 py-2 rounded-full mb-10">
                        <ShieldCheck size={14} className="text-aqua" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-aqua">Engineering Studio Approved</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
                        Engineering <br /> <span className="text-white opacity-40">Value Nodes.</span>
                    </h1>
                    <p className="max-w-xl text-xl text-gray-400 leading-relaxed font-medium italic border-l-2 border-white/10 pl-8">
                        "We don't sell software. We engineer operational supremacy. Our services are priced for businesses where data integrity is the primary asset."
                    </p>
                </div>
            </section>

            {/* SERVICE GRID */}
            <section className="py-32 px-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    {SERVICES.map((node) => (
                        <div key={node.id} className="p-16 bg-white/[0.03] border border-white/10 rounded-[48px] hover:border-aqua/50 transition-all group flex flex-col justify-between min-h-[450px]">
                            <div>
                                <div className="flex justify-between items-start mb-16">
                                    <node.icon className={`${node.color} opacity-40 group-hover:opacity-100 transition-opacity`} size={40} />
                                    <span className="text-[10px] font-mono text-gray-600 font-bold tracking-widest">{node.id}</span>
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-aqua transition-colors">{node.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-lg font-medium mb-10 italic">
                                    {node.desc}
                                </p>
                            </div>

                            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gold">{node.impact}</span>
                                <ArrowRight className="text-white/20 group-hover:text-aqua transition-colors" size={20} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-40 px-10 bg-white/[0.01] border-y border-white/5 text-center">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
                    Request a Technical <br /> <span className="text-aqua">Audit Node.</span>
                </h2>
                <p className="max-w-xl mx-auto text-gray-500 mb-12 font-medium">
                    Identify your capital leakage and automate your precision conversion logic today.
                </p>
                <a
                    href="https://wa.me/8801601618030"
                    className="inline-flex items-center justify-center gap-4 bg-aqua text-navy font-black px-12 py-6 rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-[0_30px_60px_rgba(0,255,255,0.2)]"
                >
                    <MessageSquareCode size={22} /> Initiate Engagement
                </a>
            </section>

            {/* FOOTER */}
            <footer className="py-20 text-center opacity-30">
                <p className="text-[10px] font-black uppercase tracking-[1em]">MD ABU HASAN | DHAKA | 2026</p>
            </footer>
        </div>
    );
}
