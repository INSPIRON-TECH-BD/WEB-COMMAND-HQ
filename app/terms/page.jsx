/**
 * INSPIRON TECH - Terms of Service
 * Required for Meta App Review approval.
 */

export const metadata = {
  title: 'Terms of Service | INSPIRON TECH',
  description: 'Terms of Service for INSPIRON TECH digital services and automation solutions.',
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-[#010409] text-gray-300 py-20 px-6 font-sans">
            <div className="max-w-3xl mx-auto border border-white/10 p-10 rounded-2xl bg-[#0d1117] shadow-2xl">
                <h1 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">
                    Terms of <span className="text-aqua">Service</span>
                </h1>
                <p className="mb-8 text-aqua font-bold uppercase text-xs tracking-widest">
                    INSPIRON TECH // Institutional Standard v1.0
                </p>
                <div className="space-y-6 text-sm leading-relaxed text-gray-400">

                    <section className="mb-8 p-6 bg-aqua/5 border border-aqua/20 rounded-xl">
                        <h2 className="text-aqua font-bold uppercase tracking-widest mb-2 text-xs">Acceptance of Terms</h2>
                        <p className="text-white">
                            By accessing or using any services provided by INSPIRON TECH ("we", "our", or "the Company"), 
                            you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                            INSPIRON TECH is a technology consulting and digital automation company registered and operating in 
                            Dhaka, Bangladesh.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold uppercase tracking-widest mb-2">Services Provided</h2>
                        <p className="mb-2">INSPIRON TECH provides the following services to businesses and individuals:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>WhatsApp Business automation and messaging integration via Meta Cloud API</li>
                            <li>Facebook and Instagram Page management and content automation</li>
                            <li>ERP implementation and consulting using Manager.io cloud accounting software</li>
                            <li>Custom web application development (Next.js, React)</li>
                            <li>Business process automation and API integrations</li>
                            <li>IT consulting for small and medium-sized businesses (SMEs) in Bangladesh</li>
                        </ul>
                    </section>

                    <section className="mt-8 pt-8 border-t border-white/10">
                        <h2 className="text-white font-bold uppercase tracking-widest mb-4">Use of Meta Platform Data</h2>
                        <p className="mb-4">
                            In the course of providing WhatsApp Business and Facebook/Instagram services, INSPIRON TECH may access 
                            Meta Platform Data on behalf of our clients. This data is used exclusively to:
                        </p>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                            <li>Send automated business messages (e.g., invoices, order confirmations, service updates) to end customers on behalf of our clients</li>
                            <li>Manage and publish content to client Facebook Pages and Instagram accounts</li>
                            <li>Retrieve engagement metrics for internal reporting purposes</li>
                            <li>Route customer inquiries from social platforms to client CRM or support systems</li>
                        </ul>
                        <p>
                            Meta Platform Data is never sold, transferred, or shared with third parties outside the scope of 
                            delivering the services described above. All data handling complies with Meta's Platform Terms and 
                            Developer Policies.
                        </p>
                    </section>

                    <section className="mt-8 pt-8 border-t border-white/10">
                        <h2 className="text-white font-bold uppercase tracking-widest mb-2">Client Responsibilities</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Provide accurate business information and necessary account access credentials</li>
                            <li>Ensure their business complies with all applicable Meta, WhatsApp, and platform policies</li>
                            <li>Not use INSPIRON TECH services for spam, harassment, or any unlawful purpose</li>
                            <li>Maintain the confidentiality of API tokens and access credentials shared for service delivery</li>
                        </ul>
                    </section>

                    <section className="mt-8 pt-8 border-t border-white/10">
                        <h2 className="text-white font-bold uppercase tracking-widest mb-2">Intellectual Property</h2>
                        <p>
                            All custom code, tools, dashboards, and automation workflows developed by INSPIRON TECH remain 
                            the intellectual property of INSPIRON TECH unless explicitly transferred to the client under a 
                            separate written agreement. Clients are granted a non-exclusive license to use deliverables for 
                            their intended business purpose.
                        </p>
                    </section>

                    <section className="mt-8 pt-8 border-t border-white/10">
                        <h2 className="text-white font-bold uppercase tracking-widest mb-2">Data Privacy</h2>
                        <p>
                            INSPIRON TECH is committed to protecting personal data. Our data collection and processing practices 
                            are described in our <a href="/privacy" className="text-aqua hover:underline">Privacy Policy</a>. 
                            We comply with applicable data protection laws in Bangladesh and respect the privacy rights of 
                            end users whose data we process on behalf of clients.
                        </p>
                    </section>

                    <section className="mt-8 pt-8 border-t border-white/10">
                        <h2 className="text-white font-bold uppercase tracking-widest mb-2">Limitation of Liability</h2>
                        <p>
                            INSPIRON TECH shall not be liable for any indirect, incidental, or consequential damages arising 
                            from the use of our services. Our total liability to any client shall not exceed the amount paid 
                            for the specific service giving rise to the claim in the preceding 30 days.
                        </p>
                    </section>

                    <section className="mt-8 pt-8 border-t border-white/10">
                        <h2 className="text-white font-bold uppercase tracking-widest mb-2">Service Termination</h2>
                        <p>
                            Either party may terminate a service engagement with 7 days written notice. INSPIRON TECH reserves 
                            the right to immediately suspend services if a client violates these Terms, applicable platform 
                            policies, or engages in unlawful activity.
                        </p>
                    </section>

                    <section className="mt-8 pt-8 border-t border-white/10">
                        <h2 className="text-white font-bold uppercase tracking-widest mb-2">Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of the People's Republic of Bangladesh. Any disputes arising 
                            from these Terms shall be subject to the jurisdiction of the courts of Dhaka, Bangladesh.
                        </p>
                    </section>

                    <section className="mt-8 pt-8 border-t border-white/10">
                        <h2 className="text-white font-bold uppercase tracking-widest mb-2">Contact Us</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>Email:</strong> <span className="text-white">admin@inspiron.tech</span></li>
                            <li><strong>Website:</strong> <a href="https://www.inspiron.tech" className="text-aqua hover:underline">www.inspiron.tech</a></li>
                            <li><strong>Address:</strong> Dhaka, Bangladesh</li>
                        </ul>
                    </section>

                    <p className="pt-6 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        Controller: MD ABU HASAN | Verified March 25, 2026
                    </p>
                </div>
            </div>
        </main>
    );
}
