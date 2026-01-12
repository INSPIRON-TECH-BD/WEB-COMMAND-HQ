/**
 * INSPIRON TECH - Legal & Governance Layout
 * Standard: Institutional Compliance
 */

import React from 'react';
import "../globals.css";

export const metadata = {
    title: 'Privacy & Governance | INSPIRON TECH',
    description: 'Institutional data governance for MD ABU HASAN projects.',
}

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-[#010409] text-white selection:bg-aqua selection:text-navy">
                <div className="min-h-screen flex flex-col">
                    {/* Minimalist Legal Header */}
                    <header className="border-b border-white/5 py-6 px-8 flex justify-between items-center">
                        <a href="/" className="text-xs font-mono text-gray-500 hover:text-aqua transition-colors">
                            ← BACK TO COMMAND CENTER
                        </a>
                        <div className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.5em]">
                            Governance Node
                        </div>
                    </header>

                    <main className="flex-grow">
                        {children}
                    </main>

                    {/* Legal Footer */}
                    <footer className="border-t border-white/5 py-8 text-center text-[10px] text-gray-700 uppercase tracking-widest">
                        © 2026 INSPIRON TECH BD | Dhaka Command Node
                    </footer>
                </div>
            </body>
        </html>
    );
}
