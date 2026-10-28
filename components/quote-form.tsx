"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/lib/company";
import { type Locale } from "@/lib/products";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

const copy = {
  tr: {
    name: "Ad Soyad",
    company: "Şirket",
    email: "E-posta",
    phone: "Telefon",
    service: "İlgilendiğiniz hizmet",
    other: "Diğer / Emin değilim",
    budget: "Tahmini bütçe",
    budgets: ["Henüz belirlemedim", "50.000 TL altı", "50.000 – 150.000 TL", "150.000 – 500.000 TL", "500.000 TL üzeri"],
    message: "Projenizden kısaca bahsedin",
    messagePlaceholder: "İhtiyacınız, hedefleriniz ve varsa zaman planınız…",
    consentLead: "",
    consentLink: "KVKK Aydınlatma Metni",
    consentTail: "’ni okudum, iletişim bilgilerimin teklif amacıyla işlenmesini kabul ediyorum.",
    consentHref: "/kvkk",
    submit: "Teklif talebini gönder",
    sending: "Gönderiliyor…",
    sent: "Talebiniz bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.",
    error: "Form şu anda gönderilemedi. Lütfen bize doğrudan e-posta ile yazın:",
    required: "zorunlu",
  },
  en: {
    name: "Full name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    service: "Service you are interested in",
    other: "Other / Not sure",
    budget: "Estimated budget",
    budgets: ["Not decided yet", "Under 50,000 TRY", "50,000 – 150,000 TRY", "150,000 – 500,000 TRY", "Over 500,000 TRY"],
    message: "Tell us briefly about your project",
    messagePlaceholder: "Your needs, goals, and timeline if you have one…",
    consentLead: "I have read the ",
    consentLink: "data protection notice",
    consentTail: " and agree to my contact details being processed to prepare a quote.",
    consentHref: "/en/data-protection",
    submit: "Send quote request",
    sending: "Sending…",
    sent: "Your request has reached us. We will get back to you shortly.",
    error: "The form could not be sent right now. Please email us directly:",
    required: "required",
  },
};

export function QuoteForm({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("/api/teklif.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(new FormData(form)),
          locale,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="quote-form quote-done" role="status">
        <span aria-hidden="true">✓</span>
        <p>{text.sent}</p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>
            {text.name} <abbr title={text.required}>*</abbr>
          </span>
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          <span>{text.company}</span>
          <input name="company" autoComplete="organization" maxLength={160} />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>
            {text.email} <abbr title={text.required}>*</abbr>
          </span>
          <input name="email" type="email" autoComplete="email" required maxLength={160} />
        </label>
        <label>
          <span>{text.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>{text.service}</span>
          <select name="service" defaultValue={services[0].title[locale]}>
            {services.map((service) => (
              <option key={service.id}>{service.title[locale]}</option>
            ))}
            <option>{text.other}</option>
          </select>
        </label>
        <label>
          <span>{text.budget}</span>
          <select name="budget" defaultValue={text.budgets[0]}>
            {text.budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>
          {text.message} <abbr title={text.required}>*</abbr>
        </span>
        <textarea
          name="message"
          rows={5}
          required
          maxLength={4000}
          placeholder={text.messagePlaceholder}
        />
      </label>
      <label className="form-trap" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="form-consent">
        <input type="checkbox" name="consent" required />
        <span>
          {text.consentLead}
          <Link href={text.consentHref} target="_blank">
            {text.consentLink}
          </Link>
          {text.consentTail}
        </span>
      </label>
      <button className="button button-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? text.sending : text.submit}
        <span aria-hidden="true">→</span>
      </button>
      {status === "error" && (
        <p className="form-error" role="alert">
          {text.error} <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      )}
    </form>
  );
}
