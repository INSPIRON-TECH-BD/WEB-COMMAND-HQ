/**
 * INSPIRON TECH - Legal & Governance Layout (Nested)
 * Objective: Institutional Compliance for Meta App Review
 */

import React from 'react';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#010409]">
            {/* Minimalist Governance Header */}
            <header className="border-b border-white/5 py-6 px-10 flex justify-between items-center bg-black/40 backdrop-blur-md">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                    Governance Node // <span className="text-aqua text-bold">INSPIRON</span>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
            </header>

            <main className="flex-grow">{children}</main>

            <footer className="border-t border-white/5 py-8 text-center text-[10px] text-gray-700 uppercase tracking-widest font-bold">
                © 2026 INSPIRON TECH BD | Dhaka Command Node
            </footer>
        </div>
    );
}
