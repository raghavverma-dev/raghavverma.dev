import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const defaultRecipient = "raghav.verma5@gmail.com";
const defaultFrom = "Raghav Verma <onboarding@resend.dev>";

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY environment variable." },
      { status: 500 },
    );
  }

  let payload: ContactRequest;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = asText(payload.name);
  const email = asText(payload.email);
  const subject = asText(payload.subject) || "hello from raghavverma.dev";
  const message = asText(payload.message);

  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const recipient = process.env.CONTACT_TO_EMAIL || defaultRecipient;
  const from = process.env.RESEND_FROM_EMAIL || defaultFrom;

  const text = [
    message,
    "",
    "----",
    name ? `name: ${name}` : "",
    email ? `email: ${email}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      <hr />
      ${name ? `<p><strong>name:</strong> ${escapeHtml(name)}</p>` : ""}
      ${email ? `<p><strong>email:</strong> ${escapeHtml(email)}</p>` : ""}
    </div>
  `;

  const { error } = await resend.emails.send({
    from,
    to: recipient,
    replyTo: email || undefined,
    subject,
    text,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || "Unable to send message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
