/**
 * INSPIRON TECH - KINETIC BUTTON SYSTEM
 * Objective: High-Precision User Feedback
 */

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CommandButtonProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    href?: string;
    className?: string; // Allow overrides
}

export const CommandButton = ({ label, variant = 'primary', href = '#', className = '' }: CommandButtonProps) => {
    const baseStyles = `relative overflow-hidden px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 active:scale-95 flex items-center gap-3 justify-center group ${className}`;

    const variants = {
        primary: "bg-[#FFD700] text-[#010409] hover:bg-white hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] shadow-xl",
        secondary: "border border-white/10 text-gray-400 hover:border-[#00D2FF] hover:text-[#00D2FF] bg-transparent",
        ghost: "text-gray-500 hover:text-white"
    };

    const content = (
        <>
            {/* GLOW OVERLAY FOR PRIMARY */}
            {variant === 'primary' && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            )}

            {label}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </>
    );

    if (href && href !== '#') {
        return (
            <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
                {content}
            </Link>
        );
    }

    return (
        <button className={`${baseStyles} ${variants[variant]}`}>
            {content}
        </button>
    );
};
