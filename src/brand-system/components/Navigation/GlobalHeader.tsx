/**
 * INSPIRON TECH - MOBILE-FIRST COMMAND BAR
 * Objective: 0.1% Alignment Tolerance for Mobile Viewports
 */
import { RefinedLogo } from '../Branding/RefinedLogo';
import Link from 'next/link';
import { Shield, Activity, Zap } from 'lucide-react';

export const GlobalNavigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#010409]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1440px] mx-auto h-20 px-5 md:px-10 flex justify-between items-center">

            {/* LOGO: ANCHORED LEFT WITH 48PX BASELINE LOGIC */}
            <Link href="/" className="flex items-center active:scale-95 transition-transform">
                <RefinedLogo className="h-8 md:h-10 w-auto" />
            </Link>

            {/* ICON COMMANDS: VERTICALLY ALIGNED TO LOGO CENTER */}
            <div className="flex items-center gap-2 md:gap-6">
                {[
                    { icon: Shield, path: '/services', color: 'hover:text-[#FFD700]' },
                    { icon: Activity, path: '/n-law', color: 'hover:text-[#00D2FF]' },
                    { icon: Zap, path: '/migration-logic', color: 'hover:text-white' }
                ].map((item, i) => (
                    <Link
                        key={i}
                        href={item.path}
                        className={`p-3 text-gray-500 ${item.color} transition-all active:bg-white/5 active:scale-95 rounded-xl`}
                    >
                        <item.icon size={22} strokeWidth={2.5} />
                    </Link>
                ))}
            </div>
        </div>
    </nav>
);
