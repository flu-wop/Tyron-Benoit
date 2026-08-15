import { Mail, Phone } from "lucide-react";
import { PRESS_QUOTES, SITE } from "@/lib/data";

export const metadata = { title: "Press / EPK | Tyron Benoit Band" };

export default function PressPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Electronic Press Kit
        </p>
        <h1 className="font-display text-5xl italic text-cream md:text-6xl">Press &amp; EPK</h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-mist">
          For venues, festival buyers, and production managers.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-4xl space-y-6 px-6">
        {PRESS_QUOTES.map((q) => (
          <blockquote
            key={q.source}
            className="border-l-2 border-gold bg-card p-6 font-display text-xl italic leading-relaxed text-cream"
          >
            &ldquo;{q.quote}&rdquo;
            <footer className="mt-3 font-mono text-xs uppercase tracking-wide text-gold not-italic">
              &mdash; {q.source}
            </footer>
          </blockquote>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-2xl rounded-lg border border-border bg-charcoal p-8 px-6 text-center">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Booking Contact
        </p>
        <p className="font-display text-2xl italic text-cream">{SITE.bookingContact}</p>
        <div className="mt-6 flex flex-col items-center gap-3 font-body text-sm text-mist">
          <a href={`tel:+1${SITE.bookingPhone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-gold">
            <Phone size={16} /> {SITE.bookingPhone}
          </a>
          <a href={`mailto:${SITE.bookingEmail}`} className="flex items-center gap-2 hover:text-gold">
            <Mail size={16} /> {SITE.bookingEmail}
          </a>
        </div>
        <p className="mt-6 font-mono text-[11px] text-mist">
          Full stage plot and input list available on request.
        </p>
      </section>
    </div>
  );
}
