import Link from "next/link";
import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";
import { SITE, SOCIALS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-charcoal py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <p className="font-display text-2xl tracking-wide text-cream">
          Tyron Benoit <span className="text-gold-gradient italic">Band</span>
        </p>
        <p className="max-w-md font-body text-sm text-mist">{SITE.tagline}</p>

        <div className="flex gap-5 text-mist">
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-gold">
            <Facebook size={18} />
          </a>
          <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-gold">
            <Instagram size={18} />
          </a>
          <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors hover:text-gold">
            <Youtube size={18} />
          </a>
          <a href={SOCIALS.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="transition-colors hover:text-gold">
            <Music2 size={18} />
          </a>
        </div>

        <div className="flex gap-6 font-body text-xs uppercase tracking-[0.15em] text-mist">
          <Link href="/contact" className="hover:text-gold">Booking</Link>
          <a href={`mailto:${SITE.bookingEmail}`} className="hover:text-gold">{SITE.bookingEmail}</a>
        </div>

        <p className="font-mono text-[11px] text-border">
          &copy; {new Date().getFullYear()} Tyron Benoit Band. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
