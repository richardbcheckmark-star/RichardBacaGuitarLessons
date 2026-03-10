import { NextResponse } from "next/server";

import { deliverLead } from "@/lib/lead-delivery";
import { leadFormSchema, normalizeLeadFormPayload } from "@/lib/lead-schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
  try {
    const payload = await request.json();
    const parsed = leadFormSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: parsed.error.issues[0]?.message ?? "Invalid form submission."
        },
        { status: 400 }
      );
    }

    const normalized = normalizeLeadFormPayload(parsed.data);
    const deliveryResult = await deliverLead(normalized);

    if (!deliveryResult.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: deliveryResult.error
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      leadId: deliveryResult.leadId
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to process request."
      },
      { status: 500 }
    );
  }
};
