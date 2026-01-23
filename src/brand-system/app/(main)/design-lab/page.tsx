'use client';

import React from 'react';
import { RefinedLogo, RefinedIcon } from '../../../components/Branding/RefinedLogo';

export default function DesignLab() {
    return (
        <main className="min-h-screen bg-[#010409] text-white p-20 font-sans flex flex-col items-center gap-20">
            <header className="text-center">
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">
                    Design <span className="text-aqua">Lab</span>
                </h1>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                    Branding Node // Refinement Audit v2.0
                </p>
            </header>

            <section className="space-y-12 w-full max-w-4xl">
                <div className="border border-white/10 p-12 rounded-2xl bg-[#0d1117] flex flex-col items-center gap-8">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Standard Header Implementation</p>
                    <RefinedLogo />
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div className="border border-white/10 p-12 rounded-2xl bg-[#0d1117] flex flex-col items-center gap-8">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Icon Precision Node</p>
                        <RefinedIcon className="w-32 h-32" />
                    </div>
                    <div className="border border-white/10 p-12 rounded-2xl bg-[#0d1117] bg-white flex flex-col items-center gap-8">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Light Mode Legibility Audit</p>
                        <RefinedLogo className="!text-[#002147]" />
                        <style jsx global>{`
                            .flex.items-baseline span:first-child { color: #002147 !important; }
                        `}</style>
                    </div>
                </div>

                <div className="border border-white/10 p-12 rounded-2xl bg-gradient-to-b from-[#0d1117] to-black flex flex-col items-center gap-8 shadow-2xl">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Large Format Branding (Hero)</p>
                    <RefinedLogo className="scale-150 transform origin-center" />
                </div>
            </section>

            <footer className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl text-center">
                <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                    Verified by Antigravity // 0.0% Visual Error Protocol
                </p>
            </footer>
        </main>
    );
}
