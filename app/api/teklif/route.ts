import { env } from "cloudflare:workers";
import { company } from "@/lib/company";

// Teklif formu e-postaları Resend ile gönderilir.
// Gerekli ortam değişkenleri: RESEND_API_KEY, isteğe bağlı CONTACT_TO_EMAIL ve CONTACT_FROM_EMAIL.

const fields = ["name", "company", "email", "phone", "service", "budget", "message"] as const;
type Field = (typeof fields)[number];

const labels: Record<Field, string> = {
  name: "Ad Soyad",
  company: "Şirket",
  email: "E-posta",
  phone: "Telefon",
  service: "Hizmet",
  budget: "Bütçe",
  message: "Mesaj",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  // Bot tuzağı doluysa sessizce başarılı dön.
  if (typeof body.website === "string" && body.website.trim()) {
    return Response.json({ ok: true });
  }

  const data = Object.fromEntries(
    fields.map((field) => [field, String(body[field] ?? "").trim().slice(0, 4000)]),
  ) as Record<Field, string>;

  if (
    !data.name ||
    !data.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
    body.consent !== "on"
  ) {
    return Response.json({ error: "invalid_fields" }, { status: 422 });
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const rows = fields
    .filter((field) => data[field])
    .map(
      (field) =>
        `<tr><th align="left" style="padding:6px 16px 6px 0;vertical-align:top">${labels[field]}</th><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(data[field])}</td></tr>`,
    )
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL ?? `someplus.work <noreply@someplus.work>`,
      to: [env.CONTACT_TO_EMAIL ?? company.email],
      reply_to: data.email,
      subject: `Yeni teklif talebi: ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: `<table>${rows}</table>`,
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
