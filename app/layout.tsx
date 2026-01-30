import type { Metadata } from "next";
import "./globals.css";
import { GlobalHeader } from "@/components/Navigation/GlobalHeader";

export const metadata: Metadata = {
    title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
    description: "Institutional Cloud Accounting & Business Automation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-deep-navy-black font-institutional text-institutional-white" suppressHydrationWarning>
                <GlobalHeader />
                {children}
            </body>
        </html>
    );
}

