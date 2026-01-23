
import React from 'react';
import { Database, TrendingUp, ShieldCheck, ArrowRight, Server, Activity } from 'lucide-react';

export default function UpworkAssetsPage() {
    return (
        <div className="min-h-screen bg-[#010409] text-white p-10 space-y-20">

            <div className="text-center mb-20">
                <h1 className="text-4xl font-black text-aqua uppercase tracking-widest mb-4">Upwork Asset Generator</h1>
                <p className="text-gray-400">Screenshot these sections for your Project Catalog.</p>
            </div>

            {/* 1. STARTER NODE */}
            <section className="max-w-4xl mx-auto border border-white/10 p-10 rounded-3xl bg-[#002147]/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-aqua text-navy font-bold px-4 py-1 text-xs uppercase tracking-widest">Starter Node</div>
                <div className="absolute inset-0 bg-[radial-gradient(#00ffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

                <div className="relative z-10 flex items-center gap-8">
                    <div className="p-6 bg-aqua/10 rounded-2xl border border-aqua/20">
                        <Database size={64} className="text-aqua" />
                    </div>
                    <div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-2">Institutional <br /><span className="text-white">Architecture</span></h2>
                        <p className="text-xl text-gray-400 font-mono">Chart of Accounts // NBR Compliance // Bank Rules</p>
                    </div>
                </div>
                <div className="mt-10 flex gap-4">
                    <div className="px-4 py-2 bg-white/5 rounded border border-white/10 text-xs font-mono text-aqua">BDT 50,000</div>
                    <div className="px-4 py-2 bg-white/5 rounded border border-white/10 text-xs font-mono text-gold">5 Day Delivery</div>
                </div>
            </section>

            {/* 2. PROFESSIONAL NODE */}
            <section className="max-w-4xl mx-auto border border-white/10 p-10 rounded-3xl bg-[#002147]/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gold text-navy font-bold px-4 py-1 text-xs uppercase tracking-widest">Professional Node</div>
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-aqua/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex items-center gap-8">
                    <div className="p-6 bg-gold/10 rounded-2xl border border-gold/20">
                        <Activity size={64} className="text-gold" />
                    </div>
                    <div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-2">Data <br /><span className="text-white">Transformation</span></h2>
                        <p className="text-xl text-gray-400 font-mono">Legacy Migration // Multi-Currency // Automation</p>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
                    <div className="p-3 bg-black/40 border border-white/5 rounded text-center">
                        <div className="text-xs text-gray-500 uppercase">Source</div>
                        <div className="font-bold text-white">Excel/Tally</div>
                    </div>
                    <div className="flex items-center justify-center text-aqua">
                        <ArrowRight />
                    </div>
                    <div className="p-3 bg-black/40 border border-white/5 rounded text-center">
                        <div className="text-xs text-gray-500 uppercase">Target</div>
                        <div className="font-bold text-white">Manager ERP</div>
                    </div>
                </div>
            </section>

            {/* 3. ENTERPRISE NODE */}
            <section className="max-w-4xl mx-auto border border-gold/20 p-10 rounded-3xl bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-white text-navy font-bold px-4 py-1 text-xs uppercase tracking-widest">Enterprise Node</div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]"></div>

                <div className="relative z-10 flex items-center gap-8">
                    <div className="p-6 bg-white/10 rounded-2xl border border-white/20">
                        <ShieldCheck size={64} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-2 text-gold">Mission <br /><span className="text-white">Control</span></h2>
                        <p className="text-xl text-gray-400 font-mono">0.1% Error Protocol // GitHub CI/CD // Sentry Active</p>
                    </div>
                </div>
                <div className="mt-10 p-6 bg-[#002147] rounded-xl border border-aqua/30 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Server className="text-aqua" />
                        <div>
                            <div className="text-xs text-aqua uppercase tracking-widest">System Status</div>
                            <div className="text-lg font-bold text-white">ALL SYSTEMS NOMINAL</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-gray-400 uppercase">Uptime</div>
                        <div className="text-lg font-mono text-gold">99.99%</div>
                    </div>
                </div>
            </section>

        </div>
    );
}
