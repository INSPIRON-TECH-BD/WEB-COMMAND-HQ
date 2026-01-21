import type { Metadata } from "next";
import "./globals.css";
// IMPORT FROM SUBMODULE
import { RefinedLogo } from "@brand/components/Branding/RefinedLogo";

export const metadata: Metadata = {
    title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
    description: "Institutional Cloud Accounting & Business Automation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-[#010409] font-institutional text-white">
                {children}
            </body>
        </html>
    );
}
