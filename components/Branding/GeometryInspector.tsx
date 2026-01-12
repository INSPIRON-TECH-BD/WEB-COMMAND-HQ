/**
 * INSPIRON TECH - Geometry Inspector Component
 * Feature: SVG Path Documentation
 * Target: brand.inspiron.tech
 */

"use client";

import React, { useState } from 'react';
import { Terminal, Eye, Copy, Check } from 'lucide-react';

const LOGO_PATHS = {
    foundation: 'M24 9h1200v800H24z',
    aquaEngine: 'M170.513,390.122c19.041-28.67,153.424-248.52,173.058-275.708,8.149-8.949,19.75-15.307,32.112-15.447,27.55-1.022,48.705,28.922,35.652,54.215-9.11,17.609-14.589,23.714-34.219,56.237-53.038,84.66-128.452,208.551-146.379,234.648-53.063,74.719-163.653,75.626-212.52-3.604-21.821-35.207-24.321-79.579-5.97-117.163,17.907-33.149,99.941-162.985,138.482-226.749,3.662-6.055,6.767-11.057,11.824-16.692,33.443-38.943,96.644-41.399,127.064,2.159,7.858,11.358,12.948,24.767,14.777,38.353.442,3.958-.9,7.273-2.987,10.53-4.825,7.815-14.609,23.603-23.061,37.262-3.023,4.883-5.876,9.492-8.271,13.36-3.7,5.178-5.834,12.552-9.921,8.732-9.712-11.301-18.25-29.614-26.856-42.475-4.833-7.492-14.847-9.796-20.424-2.324-12.261,19.54-89.812,146.075-101.454,164.856-5.259,8.522-12.601,20.202-18.389,29.502-4.836,7.888-9.188,14.126-11.624,20.789-7.631,18.434-.851,40.294,15.896,51.202,27.122,17.669,57.146,3.423,73.128-21.567l.081-.116Z',
    roiNode: 'cx="418.478" cy="46.739" r="46.739"',
    secondaryAqua: 'M457.55,497.321c-15.856-1.518-27.842-9.715-36.62-22.023-1.652-3.001-90.107-150.959-89.665-152.344,11.176-18.256,47.227-76.759,47.245-76.808,4.218,7.102,115.6,195.221,116.923,197.44,15.224,25.077-10.234,54.996-37.647,53.747l-.235-.012Z'
};

export const GeometryInspector = () => {
    const [copied, setCopied] = useState(false);
    const [activePath, setActivePath] = useState<'aquaEngine' | 'secondaryAqua' | 'roiNode'>('aquaEngine');

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-xl border border-[#30363d] overflow-hidden bg-[#0d1117] my-8">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#30363d] bg-[#161b22]">
                <div className="flex gap-4 items-center">
                    <div className="flex gap-2 items-center mr-4">
                        <Terminal size={14} className="text-aqua" />
                        <span className="text-[11px] font-mono text-gray-400">path_analysis.sys</span>
                    </div>
                    <div className="flex gap-2">
                        {(['aquaEngine', 'secondaryAqua', 'roiNode'] as const).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActivePath(key)}
                                className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded ${activePath === key ? 'bg-aqua text-navy' : 'text-gray-500 hover:text-white'
                                    }`}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => copyToClipboard(LOGO_PATHS[activePath])}
                    className="text-gray-500 hover:text-white transition-colors p-1"
                >
                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2">
                <div className="p-6 border-r border-[#30363d] font-mono text-[10px] text-aqua/80 overflow-x-auto max-h-[300px] overflow-y-auto bg-black/20">
                    <span className="text-gray-600">// Source Geometry</span><br />
                    <span className="text-gold">const</span> <span className="text-white">{activePath}</span> = {`"`}
                    <span className="text-green-400 break-all">{LOGO_PATHS[activePath]}</span>
                    {`"`};
                </div>
                <div className="bg-[#010409] flex items-center justify-center p-8 relative">
                    <div className="absolute top-2 right-2 text-[8px] font-mono text-gray-700 uppercase">Interactive_Preview</div>
                    {/* Scaled Preview of specific path */}
                    <div className="w-48 h-48 opacity-80 relative flex items-center justify-center">
                        <div className="absolute inset-0 border border-aqua/5 rounded pointer-events-none"></div>
                        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                            {activePath === 'roiNode' ? (
                                <circle cx="418.478" cy="46.739" r="46.739" fill="#fc0" />
                            ) : (
                                <path d={LOGO_PATHS[activePath]} fill={activePath.includes('roi') ? '#fc0' : 'aqua'} />
                            )}
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};
