/**
 * AEO READINESS SCORECARD - STEP GROUP V1
 * Purpose: Transition from BDT 1.4M Risk to Green Channel Immunity
 */
import React from 'react';

export const AEOScorecard = () => (
    <div className="bg-[#0b111a] border border-white/10 rounded-[32px] p-8 md:p-12 font-institutional mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
            <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FFD700] mb-2">Operational Audit</h2>
                <p className="text-4xl font-black uppercase tracking-tighter text-white">AEO Readiness</p>
            </div>
            <div className="text-right">
                <div className="text-6xl font-black text-[#00D2FF]">66%</div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Compliance Score</p>
            </div>
        </div>

        <div className="space-y-6">
            {[
                { label: "Yield Variance Control", val: 45, status: "Critical", alert: "0.1% Protocol Required" },
                { label: "BOM-Linked Accounting", val: 30, status: "Gap Identified" },
                { label: "Bond License Security", val: 92, status: "Stable" }
            ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-center mb-4 text-[10px] font-black uppercase tracking-widest">
                        <span>{item.label}</span>
                        <span className={item.val < 50 ? 'text-red-400 animate-pulse' : 'text-green-400'}>{item.status}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full ${item.val < 50 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${item.val}%` }} />
                    </div>
                </div>
            ))}
        </div>
    </div>
);
