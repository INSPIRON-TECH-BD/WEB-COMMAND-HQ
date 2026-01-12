/**
 * INSPIRON TECH - Institutional Privacy Governance
 * Required for Meta App Review approval.
 */

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#010409] text-gray-300 py-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto border border-white/10 p-10 rounded-2xl bg-white/[0.02]">
                <h1 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">
                    Privacy <span className="text-aqua">Governance</span>
                </h1>

                <section className="space-y-8 text-sm leading-relaxed">
                    <div>
                        <h2 className="text-aqua font-bold uppercase tracking-widest mb-2">1. Data Capture Protocol</h2>
                        <p>INSPIRON TECH processes contact metadata (Name, WhatsApp ID) exclusively through the WhatsApp Business API. This data is captured during the initial "n-Law" handshake to categorize business automation requirements.</p>
                    </div>

                    <div>
                        <h2 className="text-aqua font-bold uppercase tracking-widest mb-2">2. Processing Logic</h2>
                        <p>As an Official Manager.io Reseller, we use captured data to provide 0.1% error-tolerant financial roadmaps. Data is analyzed to identify capital leakage and inventory discrepancies for agro and industrial enterprises.</p>
                    </div>

                    <div>
                        <h2 className="text-aqua font-bold uppercase tracking-widest mb-2">3. Deletion Rights (GDPR/Meta Compliant)</h2>
                        <p>Users may trigger a permanent purge of their data at any time by messaging <span className="text-gold font-bold">"DELETE"</span> to our verified business number: <span className="text-white">+880 1601-618030</span>. All records in the OP-MISSION-CONTROL environment will be erased within 24 hours.</p>
                    </div>

                    <div className="pt-10 border-t border-white/5 text-[10px] uppercase text-gray-500 tracking-widest">
                        Last Updated: Jan 2026 | Controller: MD ABU HASAN | Dhaka Command Node
                    </div>
                </section>
            </div>
        </main>
    );
}
