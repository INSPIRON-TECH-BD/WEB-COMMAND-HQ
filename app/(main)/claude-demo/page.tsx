import ClaudeProposalPanel from '@/components/ui/ClaudeProposalPanel';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Claude AI Scoping Demo | INSPIRON TECH',
    description: 'Internal hidden route for testing the AI proposal generation layout.',
    robots: 'noindex, nofollow',
};

export default function ClaudeDemoPage() {
    // Simulated backend payload from /api/claude
    const mockProposal = {
        score: 9.3,
        tier: "hot" as const,
        industry_detected: "Global Manufacturing & Logistics",
        current_system_assessment: "Legacy ERP with highly fragmented Excel-based reporting, leading to an estimated 15% revenue bleed in lost operational hours.",
        recommended_service: "Standard implementation with advanced inventory routing and automated production workflows.",
        starter: {
            title: "Phase 1: Foundation",
            price: "$1,500",
            scope: "Chart of accounts restructuring, legacy data migration (1 year history), and foundational user roles."
        },
        standard: {
            title: "Phase 2: Operational Supremacy",
            price: "$3,200",
            scope: "Full manufacturing module deployment, multi-location inventory, and automated tax reporting matrices."
        },
        advanced: {
            title: "Phase 3: Custom Architecture",
            price: "$5,500",
            scope: "Custom API integrations, dynamic dashboard building, and embedded staff training on-site."
        },
        next_step: "Schedule an architectural review call.",
        one_liner: "We don't just migrate data; we architect an entirely new logic structure to eliminate your operational blind spots."
    };

    return (
        <div className="min-h-screen bg-deep-navy-black pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10 text-center md:text-left">
                    <div className="text-electric-cyan text-[10px] font-black tracking-[0.2em] uppercase mb-2">
                        System Diagnostics » Hidden Route
                    </div>
                    <h1 className="text-4xl md:text-5xl font-institutional text-white uppercase tracking-tighter mb-4">
                        Claude Engine
                        <span className="text-action-gold block md:inline md:ml-4 mt-2 md:mt-0">
                            Protocol Test
                        </span>
                    </h1>
                    <p className="text-gray-400 text-sm font-mono max-w-2xl">
                        This is an isolated test environment (noindex) rendering the <span className="text-white bg-white/10 px-1 py-0.5 rounded">ClaudeProposalPanel</span> component using simulated telemetry from the structural backend.
                    </p>
                </div>
                
                {/* Visual rendering of the proposal panel */}
                <ClaudeProposalPanel 
                    proposal={mockProposal} 
                    clientName="Argus Advanced Engineering" 
                    clientPhone="+971 50 123 4567"
                />
            </div>
        </div>
    );
}
