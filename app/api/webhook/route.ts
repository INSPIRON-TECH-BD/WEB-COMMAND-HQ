/**
 * INSPIRON TECH - WhatsApp Hub Webhook
 * Feature: Whale Detection & Lead Qualification
 * Objective: BDT 9,000,000 Scaling Phase
 */

import { NextRequest, NextResponse } from 'next/server';

/**
 * Meta Webhook Verification (GET)
 * Used by Meta to verify the endpoint ownership.
 */
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    // WHATSAPP_VERIFY_TOKEN should be set in environment variables
    // WHATSAPP_VERIFY_TOKEN should be set in environment variables
    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'INSPIRON_TECH_STRIKE_2026';

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED');
        return new NextResponse(challenge, { status: 200 });
    } else {
        return new NextResponse('Forbidden', { status: 403 });
    }
}

/**
 * WhatsApp Message Handler (POST)
 * Processes incoming leads and applies "n-Law" filtering.
 */
/**
 * WhatsApp Message Handler (POST)
 * Processes incoming leads and applies "Whale" detection.
 */
export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();

        // 1. Precise Extraction - Handles both Production structure and Dashboard "Test" structure
        const value = payload.entry?.[0]?.changes?.[0]?.value || payload.value;
        const message = value?.messages?.[0];
        const contact = value?.contacts?.[0];

        if (message && contact) {
            const leadPhone = contact.wa_id; // e.g., "16315551181"
            const leadName = contact.profile.name; // e.g., "test user name"
            const leadText = message.text.body; // e.g., "this is a text message"

            console.log(`[INSPIRON SENTRY] Data received from ${leadName} (${leadPhone})`);

            // 2. Whale Detection Logic (BDT 100 Crore Target)
            const isWhale = leadText.toLowerCase().includes("audit") ||
                leadText.toLowerCase().includes("crore");

            if (isWhale) {
                // TRIGGER: Institutional Handshake
                await sendTemplateResponse(leadPhone, leadName);
            }
        }

        return new NextResponse("EVENT_RECEIVED", { status: 200 });
    } catch (error) {
        return new NextResponse("INTERNAL_ERROR", { status: 500 });
    }
}

async function sendTemplateResponse(to: string, name: string) {
    // Use env var or fallback to the known ID for reliability if env is missing during dev
    const phoneId = process.env.PHONE_NUMBER_ID || '917810161405498';
    const url = `https://graph.facebook.com/v21.0/${phoneId}/messages`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to: to,
            type: "template",
            template: {
                // ADD THE EXTRA UNDERSCORE HERE
                name: "welcome_message__english",
                language: { code: "en" },
                components: [{
                    type: "body",
                    parameters: [{ type: "text", text: name }]
                }]
            }
        }),
    });

    const data = await response.json();
    console.log(`[HANDSHAKE_STATUS] Sent to ${to}:`, data);
    return data;
}
