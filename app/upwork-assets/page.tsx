"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RefinedLogo, RefinedIcon } from "@/components/Branding/RefinedLogo";
import { Download } from "lucide-react";

/* ─── BRAND TOKENS ─────────────────────────────────────────────────────────── */
const CYAN  = "#00D2FF";
const GOLD  = "#FFD700";
const NAVY  = "#010409";
const WHITE = "#FFFFFF";
const GRAY  = "#9CA3AF";

/* ─── SLIDE DATA PRE-CONFIGURED ────────────────────────────────────────────── */
const SLIDES = [
    {
        id: "a1-erp-hero",
        label: "A1 ERP Hero",
        type: "hero",
        tag: "ENTERPRISE CLOUD ERP",
        headline: "Manager.io Accounting",
        highlight: "Complete Setup from Scratch",
        subtext: "Chart of Accounts · Database Migration · Custom Dashboards · Automation Rules",
    },
    {
        id: "a2-erp-before-after",
        label: "A2 ERP B/A",
        type: "before-after",
        tag: "ERP IMPLEMENTATION",
        headline: "Manual Spreadsheets",
        highlight: "to Automated Cloud",
        subtext: "Turn fragmented financial data into fully reconciled, audit-ready core systems.",
    },
    {
        id: "b1-migration-hero",
        label: "B1 Migration",
        type: "hero",
        tag: "ZERO-LOSS DATA MIGRATION",
        headline: "Clean Migration",
        highlight: "from QuickBooks · Tally · Excel",
        subtext: "Full audit trail · 0.1% tolerance · Verified",
    },
    {
        id: "c1-bpmn-hero",
        label: "C1 BPMN Hero",
        type: "hero",
        tag: "BPMN 2.0 · PROCESS ARCHITECTURE",
        headline: "Business Processes",
        highlight: "Made Clear",
        subtext: "As-Is / To-Be · Swim-Lane Diagrams · SOPs",
    },
    {
        id: "c2-bpmn-process",
        label: "C2 Process",
        type: "process",
        tag: "BPMN 2.0 · PROCESS FLOW",
        headline: "Business Processes",
        highlight: "Made Clear",
        subtext: "Zero-Loss Protocol Enforced at Every Stage",
    },
    {
        id: "d1-dashboard-hero",
        label: "D1 Dashboard",
        type: "hero",
        tag: "AUDIT-READY FINANCIAL REPORTS",
        headline: "Your KPI Dashboard",
        highlight: "Built Right",
        subtext: "P&L · Balance Sheet · Cash Flow · Management Reports",
    }
];

const TOTAL = SLIDES.length;

/* ─── SLIDE CANVAS ──────────────────────────────────────────────────────────── */
function SlideCanvas({ slide, idx }: { slide: typeof SLIDES[0]; idx: number }) {
    const s = slide as any;
    const num = String(idx + 1).padStart(2, "0");

    return (
        <div
            id={`slide-canvas-${idx}`}
            style={{
                width: 1600,
                height: 1200,
                backgroundColor: NAVY,
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                fontFamily: "Inter, sans-serif",
                boxSizing: "border-box",
                padding: "80px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(255,255,255,0.05)"
            }}
        >
            {/* Global Grid Overlay */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                backgroundImage: `linear-gradient(to right,rgba(0,210,255,0.08) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,210,255,0.08) 1px,transparent 1px)`,
                backgroundSize: "40px 40px",
            }} />

            {/* Glowing Orbs */}
            <div data-blur-orb="true" style={{
                position: "absolute", top: -400, right: -400,
                width: 1200, height: 1200, borderRadius: "50%",
                backgroundColor: CYAN, opacity: 0.1, filter: "blur(250px)", pointerEvents: "none", zIndex: 0
            }} />

            {/* Bottom Right Watermark */}
            <div style={{ position: "absolute", bottom: 64, right: 64, opacity: 0.4, zIndex: 10 }}>
                <RefinedIcon size={80} />
            </div>

            {/* Content Switcher */}
            <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
                {s.type === "hero" && <HeroContent s={s} />}
                {s.type === "before-after" && <BeforeAfterContent s={s} />}
                {s.type === "process" && <ProcessContent s={s} />}
            </div>
        </div>
    );
}

/* ─── INDIVIDUAL SLIDE COMPONENTS ───────────────────────────────────────────── */

function HeroContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
            <div style={{ display: "inline-block", padding: "16px 32px", border: `1px solid rgba(0,210,255,0.3)`, backgroundColor: "rgba(0,210,255,0.1)", color: CYAN, fontWeight: 900, fontSize: 24, letterSpacing: "0.3em", textTransform: "uppercase", borderRadius: 9999, marginBottom: 64, backdropFilter: "blur(12px)" }}>
                {s.tag}
            </div>
            <h1 style={{ fontSize: 130, fontWeight: 900, color: WHITE, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24, maxWidth: 1400 }}>
                {s.headline}
            </h1>
            <h2 style={{ fontSize: 90, fontWeight: 300, fontStyle: "italic", color: GOLD, lineHeight: 1.1, marginBottom: 64, maxWidth: 1400 }}>
                {s.highlight}
            </h2>
            <p style={{ fontSize: 36, color: GRAY, maxWidth: 1100, lineHeight: 1.6, fontFamily: "monospace" }}>
                {s.subtext}
            </p>
        </div>
    );
}

function BeforeAfterContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, width: "100%" }}>
            <div style={{ textAlign: "center", marginBottom: 80 }}>
                <div style={{ color: CYAN, fontWeight: 900, fontSize: 24, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 24 }}>{s.tag}</div>
                <h1 style={{ fontSize: 80, fontWeight: 900, color: WHITE, lineHeight: 1.1 }}>
                    {s.headline} <span style={{ color: GOLD, fontStyle: "italic", fontWeight: 300 }}>{s.highlight}</span>
                </h1>
            </div>
            
            <div style={{ display: "flex", gap: 64, width: "100%", flex: 1 }}>
                <div style={{ flex: 1, backgroundColor: "rgba(15,23,42,0.8)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 32, padding: 64, position: "relative", backdropFilter: "blur(20px)" }}>
                    <div style={{ position: "absolute", top: 0, left: 48, transform: "translateY(-50%)", backgroundColor: "rgba(127,29,29,0.9)", color: WHITE, padding: "12px 32px", borderRadius: 9999, fontWeight: 900, fontSize: 24, letterSpacing: "0.2em", border: "1px solid rgba(239,68,68,0.5)" }}>BEFORE INSPIRON</div>
                    <div style={{ fontSize: 100, marginBottom: 32, color: "#ef4444" }}>⚠️</div>
                    <p style={{ fontSize: 34, color: "#d1d5db", fontWeight: 300, lineHeight: 1.6 }}>Manual processes across Excel. Data silos. No unified visibility. Prone to audit failures.</p>
                </div>
                <div style={{ flex: 1, backgroundColor: "rgba(0,210,255,0.1)", border: `1px solid rgba(0,210,255,0.3)`, borderRadius: 32, padding: 64, position: "relative", backdropFilter: "blur(20px)" }}>
                    <div style={{ position: "absolute", top: 0, left: 48, transform: "translateY(-50%)", backgroundColor: CYAN, color: NAVY, padding: "12px 32px", borderRadius: 9999, fontWeight: 900, fontSize: 24, letterSpacing: "0.2em", boxShadow: "0 0 30px rgba(0,210,255,0.4)" }}>AFTER INSPIRON</div>
                    <div style={{ fontSize: 100, marginBottom: 32, color: CYAN }}>🛡️</div>
                    <p style={{ fontSize: 34, color: WHITE, fontWeight: 300, lineHeight: 1.6 }}>{s.subtext}</p>
                </div>
            </div>
        </div>
    );
}

function ProcessContent({ s }: { s: any }) {
    const steps = [
        { title: "Architecture Review", label: "PHASE 1" },
        { title: "Logic Mapping",       label: "PHASE 2" },
        { title: "System Migration",    label: "PHASE 3" },
        { title: "Go-Live Handover",    label: "PHASE 4" }
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, width: "100%" }}>
            <div style={{ textAlign: "center", marginBottom: 100 }}>
                <div style={{ color: GOLD, fontWeight: 900, fontSize: 24, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 24 }}>{s.tag}</div>
                <h1 style={{ fontSize: 90, fontWeight: 900, color: WHITE, lineHeight: 1.1 }}>{s.headline}</h1>
                <p style={{ fontSize: 40, color: GRAY, marginTop: 24, fontStyle: "italic" }}>"{s.highlight}"</p>
            </div>
            
            <div style={{ display: "flex", gap: 32, width: "100%", padding: "0 32px" }}>
                {steps.map((st, i) => (
                    <div key={i} style={{ flex: 1, backgroundImage: "linear-gradient(to bottom right, rgba(15,23,42,1), rgba(2,6,23,1))", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 32, padding: "64px 32px", position: "relative", textAlign: "center" }}>
                        <div style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", width: 80, height: 80, borderRadius: "50%", border: `2px solid ${CYAN}`, backgroundColor: "rgba(0,210,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 32, color: CYAN }}>
                            0{i + 1}
                        </div>
                        <div style={{ color: GOLD, fontWeight: 900, fontSize: 18, letterSpacing: "0.2em", marginTop: 16, marginBottom: 16 }}>{st.label}</div>
                        <div style={{ fontSize: 28, color: WHITE, fontWeight: 300 }}>{st.title}</div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: 80, backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "24px 64px", borderRadius: 24, color: WHITE, fontSize: 28, fontFamily: "monospace" }}>
                {s.subtext}
            </div>
        </div>
    );
}


/* ═══════════════════════════════════════════════════════════════════════════════
   MAIN STUDIO OVERHAUL
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function UpworkAssetsRefinedStudio() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [exporting, setExporting] = useState(false);
    const [scale, setScale] = useState(0.4);

    const stageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculateScale = () => {
            if (!stageRef.current) return;
            const container = stageRef.current;
            const padding = 64;
            const availableW = container.clientWidth - padding;
            const availableH = container.clientHeight - padding;
            const scaleX = availableW / 1600;
            const scaleY = availableH / 1200;
            setScale(Math.min(scaleX, scaleY, 1));
        };
        calculateScale();
        window.addEventListener('resize', calculateScale);
        return () => window.removeEventListener('resize', calculateScale);
    }, []);

    const exportSlide = async (idx: number) => {
        setExporting(true);
        try {
            const el = document.getElementById(`slide-canvas-${idx}`);
            if (!el) return;

            // Hide orbs during capture to prevent blurring artifacts in html2canvas if needed
            const orbs = el.querySelectorAll<HTMLElement>("[data-blur-orb]");
            // Optionally orbs.forEach(o => (o.style.display = "none")); 
            // Left active because upwork assets look better with orbs if html2canvas renders them okay.

            const { default: html2canvas } = await import("html2canvas");
            const canvas = await html2canvas(el, {
                scale: 1, // 1600x1200 is inherently sufficient resolution
                useCORS: true, 
                backgroundColor: NAVY,
                logging: false
            });
            
            const dataUrl = canvas.toDataURL("image/jpeg", 0.95);

            if (dataUrl) {
                const a = document.createElement("a");
                a.download = `upwork-${SLIDES[idx].id}.jpg`;
                a.href = dataUrl;
                a.click();
            }
        } catch (e) {
            console.error("Export failed:", e);
        } finally {
            setExporting(false);
        }
    };

    const exportAll = async () => {
        for (let i = 0; i < TOTAL; i++) {
            setActiveSlide(i);
            await new Promise(r => setTimeout(r, 400));
            await exportSlide(i);
            await new Promise(r => setTimeout(r, 200));
        }
    };

    return (
        <div style={{ height: "100vh", backgroundColor: "#050a10", color: WHITE, fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column", overflow: "hidden" }}>

            {/* ─── NAV ─── */}
            <nav style={{ flexShrink: 0, zIndex: 50, backgroundColor: "rgba(1,4,9,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)", height: 56, display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    <RefinedLogo size={24} />
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <Link href="/" style={{ fontSize: 11, fontFamily: "monospace", color: GRAY, textDecoration: "none", letterSpacing: "0.2em" }}>← HOME</Link>
                        <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
                        <span style={{ fontSize: 11, fontFamily: "monospace", color: "#374151", letterSpacing: "0.15em" }}>UPWORK ASSET STUDIO V3.0</span>
                    </div>
                </div>

                {/* Slide tabs */}
                <div style={{ display: "flex", gap: 6 }}>
                    {SLIDES.map((sl, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveSlide(i)}
                            style={{ padding: "6px 12px", borderRadius: 8, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: "none", cursor: "pointer", transition: "all 0.15s", backgroundColor: activeSlide === i ? CYAN : "transparent", color: activeSlide === i ? NAVY : GRAY }}
                        >
                            {String(i + 1).padStart(2, "0")} — {sl.label}
                        </button>
                    ))}
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                    <button
                        onClick={() => exportSlide(activeSlide)}
                        disabled={exporting}
                        style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: `1px solid ${CYAN}40`, backgroundColor: `${CYAN}10`, color: CYAN, cursor: "pointer" }}
                    >
                        <Download size={14} /> Export JPG
                    </button>
                    <button
                        onClick={exportAll}
                        disabled={exporting}
                        style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: "none", backgroundColor: GOLD, color: NAVY, cursor: "pointer" }}
                    >
                        {exporting ? "Exporting..." : "Export All 6"}
                    </button>
                </div>
            </nav>

            {/* ─── CANVAS STAGE ─── */}
            <main style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0", overflow: "hidden", position: "relative" }}>
                
                {/* Visual Stage wrapper to center scaled content */}
                <div ref={stageRef} style={{ flex: 1, display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", backgroundColor: "#020610", overflow: "hidden" }}>
                    
                    <div style={{ 
                        width: 1600, height: 1200, 
                        transform: `scale(${scale})`, 
                        transformOrigin: "center center", 
                        boxShadow: `0 0 100px rgba(0,210,255,0.08), 0 0 0 1px rgba(0,210,255,0.1)`, 
                        borderRadius: 16,
                        overflow: "hidden",
                        flexShrink: 0
                    }}>
                        <SlideCanvas slide={SLIDES[activeSlide]} idx={activeSlide} />
                    </div>

                </div>

                {/* Hidden canvases for export (Full resolution renders ready for html2canvas) */}
                <div style={{ position: "absolute", left: -9999, top: 0, visibility: "hidden" }}>
                    {SLIDES.map((sl, i) => i !== activeSlide && (
                        <SlideCanvas key={i} slide={sl} idx={i} />
                    ))}
                </div>

                {/* Bottom Thumbnails Strip */}
                <div style={{ height: 140, backgroundColor: "rgba(1,4,9,0.95)", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "0 32px" }}>
                    {SLIDES.map((sl, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveSlide(i)}
                            style={{ 
                                border: `2px solid ${activeSlide === i ? CYAN : "rgba(255,255,255,0.05)"}`, 
                                borderRadius: 12, backgroundColor: "transparent", cursor: "pointer", padding: 4, transition: "all 0.2s",
                                transform: activeSlide === i ? "translateY(-4px)" : "none",
                                boxShadow: activeSlide === i ? `0 8px 30px rgba(0,210,255,0.15)` : "none"
                            }}
                        >
                            <div style={{ width: 140, height: 105, backgroundColor: NAVY, borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, position: "relative", overflow: "hidden" }}>
                                <div style={{ position: "absolute", top: -20, right: -20, width: 40, height: 40, backgroundColor: CYAN, opacity: 0.1, filter: "blur(10px)", borderRadius: "50%" }}></div>
                                <span style={{ fontSize: 12, fontFamily: "monospace", color: activeSlide === i ? CYAN : GRAY, fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</span>
                                <span style={{ fontSize: 9, color: GRAY, textTransform: "uppercase", letterSpacing: "0.1em", padding: "0 8px" }}>{sl.label}</span>
                            </div>
                        </button>
                    ))}
                </div>

            </main>
        </div>
    );
}
