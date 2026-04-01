import { NextRequest, NextResponse } from 'next/server';

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN!;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN!;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID!; // 917810161405498

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('[WhatsApp Webhook] ✅ Verified – BSUID-safe (CORE-05)');
    return new NextResponse(challenge, { status: 200 });
  }
  return new NextResponse('Forbidden', { status: 403 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('[WhatsApp Webhook] 📥 Payload:', JSON.stringify(body, null, 2)); // n-Law 04 Persistent Audit

    const entry = body.entry?.[0];
    const change = entry?.changes?.[0]?.value;

    // Display name / username / system events
    if (change?.event === 'phone_number_name_update') {
      console.log(`[Display Name/Username Update] Decision: ${change.decision}`);
    }

    // BSUID-safe message handling (2026 format)
    if (change?.messages) {
      for (const msg of change.messages) {
        const from = msg.from;                    // BSUID or phone
        const userId = msg.user_id || from;       // BSUID primary
        const text = msg.text?.body || msg.interactive?.button_reply?.title || '';

        console.log(`[Message] BSUID/From: ${from} | UserID: ${userId} | Text: ${text}`);

        // Manager.io CRM schema mapping
        // contact_bsuid = userId (primary key)
        // contact_username = extracted if present in message
        // TODO: upsert to Manager.io with contact_bsuid and contact_username
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[WhatsApp Webhook] ❌ Error:', error);
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}
