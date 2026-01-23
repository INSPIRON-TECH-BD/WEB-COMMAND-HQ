import { GlobalNavigation } from '@brand/components/Navigation/GlobalHeader';
import React from 'react';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GlobalNavigation />
            <main className="pt-24">
                {children}
            </main>
        </>
    );
}
