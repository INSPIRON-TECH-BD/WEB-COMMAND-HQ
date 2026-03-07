import React from 'react';

// Redirect to the first slide
export default function PitchDeckRedirect() {
    if (typeof window !== 'undefined') {
        window.location.href = '/pitch-deck/slide-01';
    }
    return null;
}
