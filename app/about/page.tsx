import Image from "next/image";
import { BIO, FESTIVALS, IMAGES } from "@/lib/data";

export const metadata = { title: "About | Tyron Benoit Band" };

export default function About() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-6 pb-16 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Houma, Louisiana &rarr; New Orleans
        </p>
        <h1 className="font-display text-5xl italic text-cream md:text-6xl">The Story</h1>
        <p className="mx-auto mt-6 max-w-2xl font-body leading-relaxed text-mist">
          {BIO.short}
        </p>
      </section>

      <section className="relative mx-auto mb-20 aspect-[16/9] max-w-5xl overflow-hidden rounded-lg px-6">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image src={IMAGES.about} alt="Tyron Benoit portrait" fill className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-24 font-body leading-relaxed text-mist">
        {BIO.long.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section className="border-t border-border/60 bg-charcoal py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.3em] text-gold">
            On These Stages
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-2">
            {FESTIVALS.map((f) => (
              <p key={f} className="font-display text-xl italic text-cream">
                {f}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
