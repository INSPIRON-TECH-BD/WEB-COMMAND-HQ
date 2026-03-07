"use client";

import React, { useEffect, useState, useRef } from "react";
import { RefinedLogo } from "../../../components/Branding/RefinedLogo";

const slidesData = [
    {
        type: "title",
        title: "INSPIRON TECH",
        tagline: "I do not install software. I architect logic.",
        subtitle: "Bangladesh's Only Official Manager.io Partner",
        event: "Smart Bangladesh Accelerator · ESSAP 2026",
        founder: "MD ABU HASAN — Founder & Chief Architect"
    },
    {
        type: "problem",
        title: "The BDT 20–35 Lakh Accounting Black Hole",
        subtitle: "15,000+ manufacturing & trading SMEs in Dhaka are bleeding money through broken accounting:",
        points: [
            { t: "Invisible production costs", text: "Multi-entity businesses cannot see what they spend" },
            { t: "40+ hours wasted monthly", text: "Manual Excel reconciliation across departments" },
            { t: "NBR audit failures", text: "Penalties, rejections, and compliance nightmares" },
            { t: "Zero real-time visibility", text: "No cash flow or profitability dashboards" },
            { t: "Data silos", text: "Each branch operates on disconnected spreadsheets" }
        ],
        highlight: "Every year, a single manufacturing SME loses BDT 20–35 Lakh to this chaos. Multiply that by 15,000 businesses."
    },
    {
        type: "solution",
        title: "Cloud ERP Architecture That Eliminates the Black Hole",
        subtitle: "INSPIRON TECH architectures financial operating systems using Manager.io Cloud, combined with:",
        points: [
            { t: "Zero-Loss Data Migration", text: "From Tally, Excel, or legacy systems with 0.1% error tolerance" },
            { t: "Built-in NBR/VAT Automation", text: "Mushak 6.3 compliance, computer-generated invoices" },
            { t: "Real-Time Dashboards", text: "Custom Next.js dashboards for live cash flow & profitability" },
            { t: "Multi-Entity Architecture", text: "Divisions, projects, inter-company billing in one system" },
            { t: "IoT-Ready Pipeline", text: "AquaSmart integration, GitHub CI/CD into accounting workflows" }
        ],
        highlight: "We don't sell software licenses. We architect the logic that makes businesses audit-proof."
    },
    {
        type: "moat",
        title: "Why Competitors Cannot Copy Us",
        subtitle: "The Competitive Moat",
        points: [
            { t: "Only Official Manager.io Partner in Bangladesh", text: "Triple-verified: Advisor + Accountant + Developer" },
            { t: "14 Years Cross-Domain Expertise", text: "IT infrastructure + accounting + full-stack development" },
            { t: "Zero Data Loss Track Record", text: "0.1% error tolerance across all migrations" },
            { t: "Turnaround Specialist", text: "Take over projects after 2–3 other consultants failed" },
            { t: "Full-Stack Capability", text: "Bridge IoT sensors, CI/CD pipelines, and web dashboards into accounting" }
        ],
        highlight: "No competitor in Bangladesh has this combination. Manager.io Partner status alone takes years to earn."
    },
    {
        type: "traction",
        title: "Traction & Proof",
        subtitle: "Numbers That Speak",
        metrics: [
            { label: "Active Clients (2025)", value: "20+", sub: "across 5 industries" },
            { label: "Revenue 2025", value: "BDT 3,05,000", sub: "founder-only, zero marketing" },
            { label: "Enterprise Pipeline", value: "BDT 15,000,000", sub: "STEP Group — 99% close probability" },
            { label: "Zero Data Loss", value: "0.1%", sub: "100+ migrations error standard" },
            { label: "Global Reach", value: "2", sub: "Upwork contracts — Pakistan, Dubai" }
        ],
        bottom: "Growth Trajectory: BDT 3L → BDT 9M = 3,000% projected growth (2025→2026)"
    },
    {
        type: "case_study",
        title: "Case Study: Nobin Agro Farm",
        subtitle: "BDT 100-Crore Aquaculture Operation",
        before: [
            "40 batches, 30 ponds, 7 locations — all tracked in Excel",
            "No visibility into per-pond profitability",
            "Monthly reconciliation took 60+ hours"
        ],
        after: [
            "14,478 transactions migrated with zero errors",
            "BDT 20–35 Lakh annual savings through automation",
            "Real-time pond profitability tracking enabled",
            "Manual Excel chaos eliminated in 6 weeks"
        ],
        highlight: "This is not theoretical. This is a BDT 100-crore operation running on our architecture today."
    },
    {
        type: "revenue",
        title: "Revenue Model",
        subtitle: "4 Revenue Pillars",
        pillars: [
            { title: "1. Implementation", price: "BDT 50K – 200K", sub: "per SME", desc: "One-time project fee" },
            { title: "2. Monthly Retainers", price: "BDT 8K – 200K", sub: "per month", desc: "Ongoing compliance & support" },
            { title: "3. Enterprise Packages", price: "BDT 1.25M – 15M", sub: "multi-year", desc: "Complex architecture contracts" },
            { title: "4. Proton Privacy", price: "BDT 1.6M – 2.4M", sub: "projected", desc: "Privacy-conscious SME services (NEW)" }
        ],
        bottom: "Unit Economics: Average implementation: BDT 125K | Average retainer: BDT 50K/month | Enterprise: BDT 5M average (12–24 months) | LTV/CAC ratio: >10x"
    },
    {
        type: "market",
        title: "Market Opportunity",
        subtitle: "Massive Addressable Market",
        marketSizes: [
            { label: "TAM", size: "15,000+", desc: "manufacturing/trading SMEs in Dhaka alone" },
            { label: "SAM", size: "2,700+", desc: "BASIS member software companies" },
            { label: "SOM (Year 1)", size: "80–100", desc: "SMEs via partner network + training pipeline" }
        ],
        tailwinds: [
            "100% ITES tax exemption until June 2027",
            "NBR digitization mandate 2026 — every SME needs digital compliance",
            "Smart Bangladesh 2041 Vision — digital transformation is national policy",
            "First-mover advantage as only Official Manager.io Partner"
        ]
    },
    {
        type: "scalability",
        title: "Scalability Engine",
        subtitle: "How We Scale Without Linear Staff Growth",
        flow: "Train Partners → They Bring Clients → We Provide Platform + Certification",
        steps: [
            { title: "1. VAT Firm Partnerships (10–15)", desc: "VAT firms refer clients, we train their teams on Manager.io" },
            { title: "2. Institute Certification (200 students/year)", desc: "Training institutes deliver courses, we certify graduates" },
            { title: "3. Graduate Pipeline (5–10/year)", desc: "Top-performing graduates become implementation assistants" },
            { title: "4. Proton Privacy Channel", desc: "New revenue from privacy-conscious SMEs (projected 18–27% of 2026 revenue)" }
        ],
        highlight: "This model creates a self-reinforcing flywheel: more trained partners → more clients → more revenue → more training demand."
    },
    {
        type: "founder",
        title: "Founder",
        subtitle: "MD ABU HASAN — 14 Years of Battle-Tested Expertise",
        timeline: [
            { year: "2017", title: "VAT Pioneer", desc: "As Manager of Accounts at X-Press Technologies Ltd (7,360 customers), built Bangladesh's first digital VAT system in 30 days — processing 2,000+ computer-generated Mushak-11 invoices monthly when the entire industry used manual blue books. The NBR Motijheel VAT Superintendent arranged monthly lunch meetings for over a year." },
            { year: "Legal", title: "Legal Precedent", desc: "Won a legal argument at Commissioner level, updating VAT rules on bandwidth classification." },
            { year: "2018–24", title: "Infrastructure & Architecture", desc: "Installed 100+ medical analyzers, built cloud systems for B2B clients across Bangladesh. Mastered high-stakes financial architecture." },
            { year: "2025", title: "INSPIRON TECH", desc: "Formally registered Oct 2025. Secured Official Manager.io Partner status. Generated BDT 3,05,000 revenue — founder-only, zero marketing. Triple-verified: Advisor, Accountant, Developer." }
        ]
    },
    {
        type: "financials",
        title: "Financial Projections",
        subtitle: "Revenue Growth Trajectory",
        finData: [
            { year: "2024", rev: "BDT 0", customers: "0", team: "0", notes: "Pre-incorporation (freelancing, not under entity)" },
            { year: "2025", rev: "BDT 3,05,000", customers: "20+", team: "1", notes: "Post-registration Oct–Dec + pre-registration freelance" },
            { year: "2026", rev: "BDT 9,000,000", customers: "80+", team: "4", notes: "STEP Group pipeline BDT 15M (99% close) + 25 SME clients" },
            { year: "2027", rev: "BDT 15,000,000", customers: "150+", team: "8", notes: "Chittagong expansion + partner network maturity" }
        ],
        bottom: "Growth Rate: 3,000% (2025 → 2026) | Path to Profitability: Already profitable — founder-only operation with zero overhead"
    },
    {
        type: "ask",
        title: "The Ask",
        subtitle: "Funding: BDT 30,00,000 (30 Lakh) for 7% Equity",
        funds: [
            { purpose: "Productize VAT Extension", amount: "BDT 10L", desc: "Bangladesh Mushak/VAT automation module" },
            { purpose: "Hire 3 Junior Consultants", amount: "BDT 12L", desc: "Implementation capacity (18 months)" },
            { purpose: "Marketing & Sales", amount: "BDT 5L", desc: "First paid marketing, BASIS SoftExpo presence" },
            { purpose: "Working Capital", amount: "BDT 3L", desc: "Operations buffer" }
        ],
        needs: [
            "Mentorship: BGMEA, BKMEA, SME Foundation connections",
            "Network: Investor access for Series A preparation",
            "Resources: Legal compliance, BASIS SoftExpo support",
            "Validation: SBA alumni credibility shortens sales cycles by 40%"
        ]
    },
    {
        type: "thanks",
        title: "Thank You",
        subtitle: "Building Smart Bangladesh, One SME at a Time.",
        contact: {
            name: "MD ABU HASAN",
            role: "Founder & Chief Architect",
            email: "hello@inspiron.tech",
            phone: "+880 1719-300849",
            web: "https://inspiron.tech",
            partner: "Official Manager.io Partner — Bangladesh"
        }
    }
];

export default function PitchDeck() {
    const [exporting, setExporting] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleExportPDF = async () => {
        setExporting(true);
        setProgress(0);

        try {
            const { default: jsPDF } = await import('jspdf');
            const { default: html2canvas } = await import('html2canvas');

            const slides = document.querySelectorAll<HTMLElement>('.slide');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [1920, 1080],
                compress: true,
            });

            for (let i = 0; i < slides.length; i++) {
                setProgress(Math.round(((i) / slides.length) * 100));

                const canvas = await html2canvas(slides[i], {
                    scale: 1,
                    useCORS: true,
                    backgroundColor: '#010409',
                    width: 1920,
                    height: 1080,
                    windowWidth: 1920,
                    windowHeight: 1080,
                });

                const imgData = canvas.toDataURL('image/jpeg', 0.92);

                if (i > 0) pdf.addPage([1920, 1080], 'landscape');
                pdf.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);
            }

            setProgress(100);
            pdf.save('INSPIRON-TECH-PITCH-DECK-ESSAP-2026.pdf');
        } catch (err) {
            console.error('PDF export failed:', err);
            alert('PDF export failed. See console for details.');
        } finally {
            setExporting(false);
            setProgress(0);
        }
    };

    return (
        <div className="min-h-screen bg-[#010409] font-institutional overflow-x-hidden selection:bg-[#00D2FF] selection:text-black text-white">
            {/* Floating Export Button */}
            <button
                onClick={handleExportPDF}
                disabled={exporting}
                className="no-print fixed bottom-8 right-8 z-50 bg-[#FFD700] hover:bg-[#FFD700]/90 disabled:bg-[#FFD700]/50 text-black px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all uppercase tracking-widest text-sm flex items-center gap-3 min-w-[180px] justify-center"
            >
                {exporting ? (
                    <>
                        <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                        {progress}% Rendering...
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        Export PDF
                    </>
                )}
            </button>

            {/* Progress bar */}
            {exporting && (
                <div className="no-print fixed top-0 left-0 right-0 z-50 h-1 bg-black/50">
                    <div
                        className="h-full bg-[#FFD700] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}

            <div className="flex flex-col items-center">
                {slidesData.map((slide, i) => (
                    <Slide key={i} data={slide} slideNum={i + 1} />
                ))}
            </div>
        </div>
    );
}


function Slide({ data, slideNum }: { data: any, slideNum: number }) {
    return (
        <div className="slide relative w-[1920px] h-[1080px] bg-[#010409] border-b border-white/5 flex-shrink-0 overflow-hidden print:border-none">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

            {/* Blur Orb */}
            <div className={`absolute w-[800px] h-[800px] blur-[160px] rounded-full opacity-15 pointer-events-none ${slideNum % 2 === 0 ? 'top-[-200px] right-[-200px] bg-[#FFD700]' : 'bottom-[-200px] left-[-200px] bg-[#00D2FF]'}`} />

            {/* Header (except title and thanks slide) */}
            {data.type !== 'title' && data.type !== 'thanks' && (
                <div className="absolute top-12 left-12 right-12 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        <RefinedLogo size={36} />
                    </div>
                    <div className="text-[#FFD700] uppercase tracking-[0.3em] text-sm font-bold opacity-80 border border-[#FFD700]/20 px-4 py-2 rounded bg-[#FFD700]/5 backdrop-blur-sm">
                        ESSAP Pitch Deck
                    </div>
                </div>
            )}

            {/* Slide Number */}
            <div className="absolute bottom-12 right-12 text-[#cbd5e1] font-mono opacity-50 text-xl tracking-widest z-10">
                {slideNum.toString().padStart(2, '0')} / 13
            </div>

            {/* Slide Content Layouts */}
            <div className={`relative z-10 w-full h-full p-24 ${data.type === 'title' || data.type === 'thanks' ? 'flex items-center justify-center' : 'pt-40'}`}>

                {data.type === 'title' && (
                    <div className="text-center flex flex-col items-center max-w-[1200px] mx-auto">
                        <div className="mb-16 transform scale-150 orgin-center">
                            <RefinedLogo size={120} />
                        </div>
                        <h1 className="text-7xl font-black uppercase text-white mb-8 tracking-wide drop-shadow-2xl">
                            INSPIRON <span className="text-[#FFD700]">TECH</span>
                        </h1>
                        <h2 className="text-4xl font-light text-[#00D2FF] mb-12 italic tracking-wide">
                            "{data.tagline}"
                        </h2>
                        <div className="h-px w-32 bg-white/20 mb-12" />
                        <p className="text-2xl text-[#cbd5e1] mb-6 uppercase tracking-widest">{data.subtitle}</p>
                        <p className="text-xl text-[#94a3b8] mb-16 uppercase tracking-wider">{data.event}</p>
                        <p className="text-xl text-white font-mono bg-white/5 border border-white/10 px-8 py-4 rounded-xl backdrop-blur-md">{data.founder}</p>
                    </div>
                )}

                {data.type === 'problem' && (
                    <div className="h-full flex flex-col relative z-20">
                        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-red-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
                        <h1 className="text-[48px] font-black text-white mb-3 uppercase leading-tight drop-shadow-lg">
                            THE <span className="text-[#FFD700] text-[60px]">BDT 20–35 LAKH</span> ACCOUNTING BLACK HOLE
                        </h1>
                        <p className="text-xl text-white mb-4 font-light">{data.subtitle}</p>
                        <div className="flex-1 space-y-3">
                            {data.points.map((p: any, i: number) => (
                                <div key={i} className="flex items-start gap-4 bg-[#0f172a]/80 p-4 rounded-xl border border-red-500/20 backdrop-blur">
                                    <span className="text-2xl leading-none pt-1">⚠️</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-0.5">{p.t}</h3>
                                        <p className="text-base text-[#cbd5e1]">{p.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-xl">
                            <p className="text-base text-white font-light italic leading-relaxed">{data.highlight}</p>
                        </div>
                    </div>
                )}

                {data.type === 'solution' && (
                    <div className="h-full flex flex-col">
                        <h1 className="text-[48px] font-black text-[#00D2FF] mb-3 uppercase leading-tight max-w-[1500px]">{data.title}</h1>
                        <p className="text-xl text-white mb-4 font-light">{data.subtitle}</p>
                        <div className="flex-1 space-y-3">
                            {data.points.map((p: any, i: number) => (
                                <div key={i} className="flex items-center gap-5 bg-[#0f172a]/80 p-4 rounded-xl border border-[#00D2FF]/20 backdrop-blur">
                                    <div className="w-10 h-10 rounded-full bg-[#00D2FF]/20 flex items-center justify-center border border-[#00D2FF]/40 text-[#00D2FF] font-black text-lg shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-0.5">{p.t}</h3>
                                        <p className="text-base text-[#cbd5e1]">{p.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center gap-5 bg-[#00D2FF]/10 border border-[#00D2FF]/30 p-4 rounded-2xl relative overflow-hidden">
                            <div className="text-[68px] font-black text-[#FFD700] leading-none font-mono tracking-tighter shrink-0 drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                                0.1%
                            </div>
                            <div>
                                <p className="text-base text-white font-light italic leading-relaxed mb-1">{data.highlight}</p>
                                <p className="text-sm text-[#00D2FF] font-bold tracking-widest uppercase">Target Error Tolerance</p>
                            </div>
                        </div>
                    </div>
                )}

                {data.type === 'moat' && (
                    <div className="h-full flex flex-col">
                        <h1 className="text-[64px] font-black text-white mb-6 uppercase leading-tight">{data.title}</h1>
                        <p className="text-3xl text-[#FFD700] mb-6 font-light uppercase tracking-widest">{data.subtitle}</p>
                        <div className="flex-1 grid grid-cols-2 gap-8">
                            {data.points.map((p: any, i: number) => (
                                <div key={i} className={`bg-[#0f172a]/70 p-10 rounded-2xl border border-[#00D2FF]/30 backdrop-blur-md flex flex-col justify-center ${i === 4 ? 'col-span-2' : ''} hover:border-[#00D2FF]/70 transition-colors shadow-[0_4px_30px_rgba(0,210,255,0.05)]`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        {i === 0 && <span className="text-4xl" title="Partner Shield">🛡️</span>}
                                        <h3 className="text-3xl font-bold text-[#00D2FF] leading-tight">{p.t}</h3>
                                    </div>
                                    <p className="text-xl text-white/80 leading-relaxed tracking-wide">{p.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-center p-6 border border-[#FFD700]/30 rounded-xl bg-[#FFD700]/5">
                            <p className="text-3xl text-[#FFD700] font-light leading-relaxed">{data.highlight}</p>
                        </div>
                    </div>
                )}

                {data.type === 'traction' && (
                    <div className="h-full flex flex-col">
                        <h1 className="text-[56px] font-black text-white mb-4 uppercase leading-tight">{data.title}</h1>
                        <p className="text-2xl text-[#00D2FF] mb-8 font-light uppercase tracking-widest">{data.subtitle}</p>
                        <div className="flex-1 grid grid-cols-5 gap-5">
                            {data.metrics.map((m: any, i: number) => (
                                <div key={i} className="bg-[#1e293b]/50 p-8 rounded-2xl border border-white/5 flex flex-col justify-center relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50" />
                                    <h4 className="text-[#cbd5e1] text-sm uppercase tracking-widest mb-4 font-bold">{m.label}</h4>
                                    <div className="text-[40px] font-black text-white mb-3 leading-none font-mono">{m.value}</div>
                                    <p className="text-base text-[#94a3b8]">{m.sub}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex items-center gap-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] px-10 py-5 rounded-2xl border border-[#FFD700]/30">
                            <span className="text-[#FFD700] text-5xl font-black font-mono tracking-tight">3,000%</span>
                            <span className="text-white text-2xl font-bold">↑</span>
                            <p className="text-xl text-[#FFD700]">{data.bottom}</p>
                        </div>
                    </div>
                )}

                {data.type === 'case_study' && (
                    <div className="h-full flex flex-col">
                        <h1 className="text-[64px] font-black text-[#FFD700] mb-6 uppercase leading-tight">{data.title}</h1>
                        <p className="text-3xl text-white mb-16 font-light">{data.subtitle}</p>
                        <div className="flex-1 grid grid-cols-2 gap-12">
                            <div className="bg-red-900/10 border border-red-500/20 p-12 rounded-3xl backdrop-blur relative">
                                <div className="absolute -top-6 left-12 bg-red-900/80 text-white px-6 py-2 rounded-full font-bold tracking-widest uppercase border border-red-500/50">Before INSPIRON</div>
                                <ul className="space-y-8 mt-6">
                                    {data.before.map((p: string, i: number) => (
                                        <li key={i} className="flex gap-4 text-2xl text-[#cbd5e1] leading-relaxed">
                                            <span className="text-red-500 font-bold">×</span> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#00D2FF]/10 border border-[#00D2FF]/30 p-12 rounded-3xl backdrop-blur relative">
                                <div className="absolute -top-6 left-12 bg-[#00D2FF] text-[#010409] px-6 py-2 rounded-full font-black tracking-widest uppercase shadow-[0_0_15px_rgba(0,210,255,0.5)]">After INSPIRON</div>
                                <ul className="space-y-8 mt-6">
                                    {data.after.map((p: string, i: number) => (
                                        <li key={i} className="flex gap-4 text-2xl text-white leading-relaxed">
                                            <span className="text-[#00D2FF] font-bold">✓</span> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-16 text-center">
                            <p className="text-3xl font-light italic text-[#cbd5e1]">"{data.highlight}"</p>
                        </div>
                    </div>
                )}

                {data.type === 'revenue' && (
                    <div className="h-full flex flex-col">
                        <h1 className="text-[64px] font-black text-white mb-6 uppercase leading-tight">{data.title}</h1>
                        <p className="text-3xl text-[#00D2FF] mb-16 font-light uppercase tracking-widest">{data.subtitle}</p>
                        <div className="flex-1 grid grid-cols-4 gap-6">
                            {data.pillars.map((p: any, i: number) => (
                                <div key={i} className="bg-[#0f172a]/90 p-10 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col h-full group">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-[#FFD700] opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <h3 className="text-2xl font-bold text-[#00D2FF] mb-8 h-16">{p.title}</h3>
                                    <div className="text-4xl font-black text-white mb-2 tracking-tight">{p.price}</div>
                                    <div className="text-[#94a3b8] uppercase tracking-widest text-sm mb-auto">{p.sub}</div>
                                    <div className="mt-8 pt-8 border-t border-white/5 text-xl text-[#cbd5e1]">{p.desc}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                            <p className="text-xl text-[#FFD700] font-mono tracking-wide">{data.bottom}</p>
                        </div>
                    </div>
                )}

                {data.type === 'market' && (
                    <div className="h-full flex flex-col">
                        <h1 className="text-[64px] font-black text-[#FFD700] mb-6 uppercase leading-tight">{data.title}</h1>
                        <p className="text-3xl text-white mb-16 font-light">{data.subtitle}</p>

                        <div className="flex gap-16 flex-1">
                            <div className="w-1/2 space-y-6 flex flex-col justify-center">
                                {data.marketSizes.map((m: any, i: number) => (
                                    <div key={i} className="flex items-center gap-8 bg-[#0f172a]/80 p-8 rounded-2xl border border-[#00D2FF]/20">
                                        <div className="w-32 h-32 rounded-full border-4 border-[#00D2FF] flex items-center justify-center shrink-0">
                                            <span className="text-2xl font-bold text-[#00D2FF]">{m.label}</span>
                                        </div>
                                        <div>
                                            <div className="text-5xl font-black text-white mb-3 font-mono">{m.size}</div>
                                            <div className="text-2xl text-[#cbd5e1]">{m.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="w-1/2 bg-[#1e293b]/40 rounded-3xl p-12 border border-white/5 flex flex-col">
                                <h3 className="text-3xl font-bold text-[#FFD700] mb-12 uppercase tracking-widest">Market Tailwinds</h3>
                                <ul className="space-y-10">
                                    {data.tailwinds.map((t: string, i: number) => (
                                        <li key={i} className="flex gap-6 items-start">
                                            <div className="w-3 h-3 rounded-full bg-[#FFD700] mt-3 shrink-0 shadow-[0_0_10px_#FFD700]" />
                                            <span className="text-2xl text-white leading-relaxed">{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {data.type === 'scalability' && (
                    <div className="h-full flex flex-col">
                        <h1 className="text-[64px] font-black text-[#00D2FF] mb-6 uppercase leading-tight">{data.title}</h1>
                        <p className="text-3xl text-white mb-16 font-light">{data.subtitle}</p>

                        <div className="text-center mb-16">
                            <div className="inline-block bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] font-mono text-2xl font-bold px-12 py-6 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                                {data.flow}
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-8 flex-1">
                            {data.steps.map((s: any, i: number) => (
                                <div key={i} className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-10 rounded-2xl border border-white/10 relative mt-8 flex flex-col">
                                    {i < 3 && <div className="absolute top-1/2 -right-6 w-12 h-px bg-[#00D2FF] hidden xl:block" />}
                                    <div className="w-16 h-16 rounded-full bg-[#00D2FF]/20 flex items-center justify-center border border-[#00D2FF] text-[#00D2FF] font-black text-3xl absolute -top-8 left-1/2 -translate-x-1/2 shadow-lg">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mt-8 mb-6 text-center">{s.title}</h3>
                                    <p className="text-xl text-[#cbd5e1] text-center leading-relaxed mt-auto relative z-10">{s.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-3xl font-light italic text-[#cbd5e1]">"{data.highlight}"</p>
                        </div>
                    </div>
                )}

                {data.type === 'founder' && (
                    <div className="h-full flex flex-col">
                        <h1 className="text-[64px] font-black text-white mb-6 uppercase leading-tight">{data.title}</h1>
                        <p className="text-3xl text-[#FFD700] mb-16 font-light uppercase tracking-widest">{data.subtitle}</p>

                        <div className="flex gap-16 flex-1 h-full items-stretch">
                            {/* Photo Area */}
                            <div className="w-1/3 shrink-0 flex flex-col items-center justify-center bg-[#0f172a] rounded-3xl border border-white/5 relative overflow-hidden">
                                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 pt-48 flex items-end justify-center pb-12">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white mb-2">MD ABU HASAN</div>
                                        <div className="text-lg text-[#00D2FF] uppercase tracking-widest font-mono">Founder & Architect</div>
                                    </div>
                                </div>
                                <div className="w-[400px] h-[400px] rounded-2xl border-2 border-[#FFD700]/30 overflow-hidden relative z-0 mt-[-100px]">
                                    <img src="/founder-photo.jpeg" alt="MD ABU HASAN" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="w-2/3 h-full flex flex-col justify-between py-4">
                                {data.timeline.map((item: any, i: number) => (
                                    <div key={i} className="flex gap-8 relative pb-10">
                                        {i < 3 && <div className="absolute top-10 left-12 bottom-[-10px] w-px bg-white/10" />}
                                        <div className="w-24 shrink-0 text-right text-2xl font-bold text-[#FFD700] font-mono leading-tight">{item.year}</div>
                                        <div className="w-4 h-4 rounded-full bg-[#00D2FF] mt-1 shrink-0 z-10 shadow-[0_0_10px_#00D2FF]" />
                                        <div className="flex-1 mt-[-6px]">
                                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                            <p className="text-xl text-[#cbd5e1] leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {data.type === 'financials' && (
                    <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-[52px] font-black text-[#00D2FF] uppercase leading-tight">{data.title}</h1>
                            <div className="text-right">
                                <div className="text-[80px] font-black text-[#FFD700] leading-none tracking-tighter">3,000%</div>
                                <div className="text-lg text-[#94a3b8] uppercase tracking-widest font-mono">Growth 2025→2026</div>
                            </div>
                        </div>
                        <p className="text-2xl text-white mb-10 font-light">{data.subtitle}</p>

                        <div className="bg-[#0f172a]/60 rounded-3xl border border-white/10 overflow-hidden mb-12 flex-1 flex flex-col">
                            {/* Table Header */}
                            <div className="grid grid-cols-[150px_250px_150px_100px_auto] bg-[#00D2FF]/10 border-b border-[#00D2FF]/20 px-8 py-6">
                                <div className="text-xl font-bold text-[#00D2FF] uppercase tracking-wide">Year</div>
                                <div className="text-xl font-bold text-[#00D2FF] uppercase tracking-wide">Revenue (BDT)</div>
                                <div className="text-xl font-bold text-[#00D2FF] uppercase tracking-wide">Clients</div>
                                <div className="text-xl font-bold text-[#00D2FF] uppercase tracking-wide">Team</div>
                                <div className="text-xl font-bold text-[#00D2FF] uppercase tracking-wide">Growth Drivers</div>
                            </div>

                            {/* Table Rows */}
                            <div className="flex flex-col flex-1 pb-4">
                                {data.finData.map((row: any, i: number) => (
                                    <div key={i} className={`grid grid-cols-[150px_250px_150px_100px_auto] px-8 py-8 ${i < 3 ? 'border-b border-white/5' : ''} flex-1 items-center bg-[#010409]/30 hover:bg-[#00D2FF]/5 transition-colors`}>
                                        <div className="text-2xl font-bold text-white font-mono">{row.year}</div>
                                        <div>
                                            <div className={`text-3xl font-black font-mono tracking-tight ${i >= 2 ? 'text-[#FFD700]' : 'text-white'}`}>{row.rev}</div>
                                            {i >= 2 && <div className="w-full bg-white/5 h-2 rounded-full mt-3 overflow-hidden">
                                                <div className="bg-[#FFD700] h-full" style={{ width: i === 2 ? '60%' : '100%' }} />
                                            </div>}
                                        </div>
                                        <div className="text-2xl text-[#cbd5e1] font-mono">{row.customers}</div>
                                        <div className="text-2xl text-[#cbd5e1] font-mono">{row.team}</div>
                                        <div className="text-xl text-[#94a3b8] leading-relaxed">{row.notes}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-xl p-8">
                            <p className="text-3xl text-[#FFD700] font-bold tracking-wide">{data.bottom}</p>
                        </div>
                    </div>
                )}

                {data.type === 'ask' && (
                    <div className="h-full flex flex-col">
                        <h1 className="text-[64px] font-black text-[#FFD700] mb-6 uppercase leading-tight">{data.title}</h1>
                        <p className="text-3xl text-white mb-16 font-light uppercase tracking-widest">{data.subtitle}</p>

                        <div className="flex gap-16 flex-1">
                            {/* Use of funds list */}
                            <div className="w-1/2 space-y-6">
                                <h3 className="text-3xl font-bold text-white mb-8">Allocation of Funds</h3>
                                {data.funds.map((f: any, i: number) => (
                                    <div key={i} className="flex items-center gap-5 bg-[#0f172a] p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FFD700] opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <div className="w-28 bg-[#FFD700]/10 text-[#FFD700] p-3 rounded-xl text-center shrink-0">
                                            <span className="text-2xl font-black font-mono leading-none">{f.amount}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-white mb-2">{f.purpose}</h4>
                                            <p className="text-xl text-[#cbd5e1]">{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right side needs */}
                            <div className="w-1/2 flex flex-col">
                                <div className="bg-[#00D2FF]/10 border border-[#00D2FF]/30 p-12 rounded-3xl flex-1 backdrop-blur shadow-[0_0_50px_rgba(0,210,255,0.05)]">
                                    <h3 className="text-4xl font-black text-[#00D2FF] mb-12 uppercase tracking-tight">What We Need From SBA</h3>
                                    <ul className="space-y-10">
                                        {data.needs.map((n: string, i: number) => {
                                            const [bold, rest] = n.split(': ');
                                            return (
                                                <li key={i} className="flex gap-6 items-start">
                                                    <span className="text-3xl text-[#00D2FF]">▶</span>
                                                    <p className="text-2xl text-white leading-relaxed">
                                                        <span className="font-bold text-[#FFD700]">{bold}:</span> {rest}
                                                    </p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {data.type === 'thanks' && (
                    <div className="text-center w-full max-w-[1400px]">
                        <div className="mb-20 transform scale-150 origin-center flex justify-center">
                            <RefinedLogo size={160} />
                        </div>
                        <h1 className="text-[80px] font-black text-white uppercase tracking-tight mb-8 leading-[1.1]">{data.title}</h1>
                        <p className="text-4xl text-[#FFD700] font-light mb-24 italic tracking-wide">"{data.subtitle}"</p>

                        <div className="inline-block bg-[#0f172a] border border-white/10 p-16 rounded-3xl backdrop-blur-md shadow-2xl relative">
                            <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent" />

                            <h2 className="text-5xl font-black text-white uppercase tracking-wider mb-2">{data.contact.name}</h2>
                            <p className="text-2xl text-[#cbd5e1] uppercase tracking-widest font-mono mb-12">{data.contact.role}</p>

                            <div className="flex justify-center gap-12 text-2xl font-mono text-[#00D2FF]">
                                <span>{data.contact.email}</span>
                                <span className="text-white/30">|</span>
                                <span>{data.contact.phone}</span>
                                <span className="text-white/30">|</span>
                                <span>inspiron.tech</span>
                            </div>

                            <div className="mt-16 pt-8 border-t border-white/10">
                                <span className="inline-block px-8 py-3 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xl font-bold uppercase tracking-widest rounded-lg">
                                    {data.contact.partner}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div >
    );
}
