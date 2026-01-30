import { GlobalHeader } from '@/components/Navigation/GlobalHeader';
import React from 'react';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GlobalHeader />
            <main className="pt-24">
                {children}
            </main>
        </>
    );
}
