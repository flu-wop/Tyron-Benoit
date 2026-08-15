import { ExternalLink } from "lucide-react";
import { RELEASES, SOCIALS } from "@/lib/data";

export const metadata = { title: "Music | Tyron Benoit Band" };

export default function MusicPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">Discography</p>
        <h1 className="font-display text-5xl italic text-cream md:text-6xl">Music</h1>
      </section>

      <section className="mx-auto mt-16 max-w-3xl space-y-6 px-6">
        {RELEASES.map((r) => (
          <div
            key={r.title}
            className={`card-lift flex items-center justify-between rounded-lg border p-6 ${
              r.featured ? "border-gold bg-card" : "border-border bg-card"
            }`}
          >
            <div>
              <p className="font-display text-2xl italic text-cream">{r.title}</p>
              <p className="mt-1 font-body text-sm text-mist">
                {r.year} &middot; {r.note}
              </p>
            </div>
            {r.featured && (
              <span className="rounded-full bg-gold px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-studio-black">
                New
              </span>
            )}
          </div>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-3xl px-6 text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Stream Everywhere
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={SOCIALS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-medium uppercase tracking-wide text-studio-black"
          >
            Spotify <ExternalLink size={14} />
          </a>
          <a
            href={SOCIALS.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 font-body text-sm uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Apple Music <ExternalLink size={14} />
          </a>
          <a
            href={SOCIALS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 font-body text-sm uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
          >
            YouTube <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
