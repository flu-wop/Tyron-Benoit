import Image from "next/image";
import Link from "next/link";
import { PlayCircle, Calendar } from "lucide-react";
import { SITE, PRESS_QUOTES, IMAGES, SOCIALS } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="vignette grain relative flex min-h-[92vh] items-end overflow-hidden pb-20 pt-32">
        <Image
          src={IMAGES.hero}
          alt="Tyron Benoit Band"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">
            New Single &middot; Out Now
          </p>
          <h1 className="font-display text-6xl italic leading-[1.05] text-cream md:text-8xl">
            Hope You Find <span className="text-gold-gradient">Heaven</span>
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-mist md:text-xl">
            {SITE.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={SOCIALS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-body text-sm font-medium uppercase tracking-wide text-studio-black"
            >
              <PlayCircle size={18} /> Listen Now
            </a>
            <Link
              href="/press"
              className="flex items-center gap-2 rounded-full border border-border px-7 py-3 font-body text-sm uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Press &amp; EPK
            </Link>
          </div>
        </div>
      </section>

      {/* Press quotes */}
      <section className="border-t border-border/60 bg-charcoal py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-12 text-center font-mono text-xs uppercase tracking-[0.3em] text-gold">
            As Heard By
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {PRESS_QUOTES.map((q) => (
              <div key={q.source} className="card-lift rounded-lg border border-border bg-card p-6">
                <p className="font-display text-lg italic leading-snug text-cream">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-4 font-mono text-xs uppercase tracking-wide text-gold">
                  {q.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio teaser */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src={IMAGES.about} alt="Tyron Benoit" fill className="object-cover" />
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-gold">
              Bayou to Backline
            </p>
            <h2 className="font-display text-4xl italic text-cream md:text-5xl">
              A Marine, a songwriter, a Louisiana original.
            </h2>
            <p className="mt-6 font-body leading-relaxed text-mist">
              Younger brother of blues guitar great Tab Benoit, Tyron built his sound on the road
              before bringing it home to New Orleans — where his accordion, growling guitars, and
              unstoppable rhythm section have packed dance floors at 30+ major festivals.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block border-b border-gold font-body text-sm uppercase tracking-wide text-gold transition-opacity hover:opacity-70"
            >
              Read the full story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-border/60 bg-charcoal py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <Calendar className="text-gold" size={28} />
          <h3 className="font-display text-3xl italic text-cream">
            On the road across Louisiana, Texas &amp; Mississippi.
          </h3>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-full border border-border px-7 py-3 font-body text-sm uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
          >
            See Tour Dates
          </a>
        </div>
      </section>
    </>
  );
}
