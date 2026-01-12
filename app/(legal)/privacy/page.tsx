/**
 * INSPIRON TECH - Institutional Privacy Governance
 * Mandatory for Meta App Review ID: 1372121971105461
 */

import React from 'react';
import { ShieldAlert, Lock, Trash2, Eye } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#010409] text-white selection:bg-aqua selection:text-navy font-sans">
            {/* HEADER */}
            <header className="border-b border-white/5 py-8 px-10 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all">
                    ← Return to base
                </Link>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-aqua">Governance Node v1.0</span>
            </header>

            <main className="max-w-4xl mx-auto py-24 px-10">
                <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-6 py-2 rounded-full mb-12">
                    <ShieldAlert size={14} className="text-red-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-400">Official Legal Disclosure</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 leading-tight">
                    Privacy <br /> <span className="text-gray-600">Governance.</span>
                </h1>

                <div className="space-y-20">
                    {/* 1. DATA CAPTURE */}
                    <section className="group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-aqua/10 rounded-xl text-aqua">
                                <Eye size={20} />
                            </div>
                            <h2 className="text-xl font-black uppercase tracking-widest">01. Data Capture</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed pl-14 border-l border-white/10 italic">
                            "We process contact information (name, phone number) exclusively through the WhatsApp Business API to categorize operational automation requirements for BDT 100 Crore+ industrial enterprises."
                        </p>
                    </section>

                    {/* 2. PROCESSING LOGIC */}
                    <section className="group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gold/10 rounded-xl text-gold">
                                <Lock size={20} />
                            </div>
                            <h2 className="text-xl font-black uppercase tracking-widest">02. Processing Logic</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed pl-14 border-l border-white/10 italic">
                            "Data is used solely to deliver '0.1% error-tolerant' financial roadmaps for Manager.io implementations. We do not sell, trade, or rasterize your institutional data for third-party consumption."
                        </p>
                    </section>

                    {/* 3. DELETION PROTOCOL */}
                    <section className="group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white/10 rounded-xl text-white">
                                <Trash2 size={20} />
                            </div>
                            <h2 className="text-xl font-black uppercase tracking-widest">03. Deletion Protocol</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed pl-14 border-l border-white/10 italic">
                            "Users can trigger the permanent deletion of their metadata at any time by messaging 'DELETE' to our verified number: <span className="text-white font-bold tracking-widest">+880 1601-618030</span>. All records are purged from the OP-MISSION-CONTROL environment within 24 hours."
                        </p>
                    </section>

                    {/* 4. SECURITY AUDIT */}
                    <section className="p-12 bg-white/5 border border-white/10 rounded-[40px]">
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 mb-6">Institutional Security Statement</h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-8">
                            As a verified business (Verified Dec 10, 2025), INSPIRON TECH manages all data within the secure OP-MISSION-CONTROL environment under the direct supervision of MD ABU HASAN. Our infrastructure is engineered to prevent data leakage and ensure persistent auditability.
                        </p>
                        <div className="p-4 bg-aqua/5 border border-aqua/10 rounded-xl inline-block text-[10px] font-mono text-aqua uppercase tracking-widest">
                            Verified_Status: ACTIVE | Security_Node: IT-BN-2026-SEC
                        </div>
                    </section>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="py-20 text-center border-t border-white/5 opacity-30">
                <p className="text-[10px] font-black uppercase tracking-[1em]">MD ABU HASAN | DHAKA | 2026</p>
            </footer>
        </div>
    );
}
