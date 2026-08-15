import { Mail, Phone, Facebook, Instagram, Youtube, Music2 } from "lucide-react";
import { SITE, SOCIALS } from "@/lib/data";

export const metadata = { title: "Contact | Tyron Benoit Band" };

export default function ContactPage() {
  return (
    <div className="flex min-h-[80vh] items-center pt-32 pb-24">
      <section className="mx-auto max-w-2xl px-6 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">Get In Touch</p>
        <h1 className="font-display text-5xl italic text-cream md:text-6xl">Contact</h1>
        <p className="mx-auto mt-6 max-w-md font-body text-mist">
          Booking, press, and general inquiries — reach out directly.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={`mailto:${SITE.bookingEmail}`}
            className="flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-body text-sm font-medium uppercase tracking-wide text-studio-black"
          >
            <Mail size={16} /> {SITE.bookingEmail}
          </a>
          <a
            href={`tel:+1${SITE.bookingPhone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 rounded-full border border-border px-7 py-3 font-body text-sm uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <Phone size={16} /> {SITE.bookingPhone}
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-6 text-mist">
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            <Facebook size={20} />
          </a>
          <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            <Instagram size={20} />
          </a>
          <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            <Youtube size={20} />
          </a>
          <a href={SOCIALS.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            <Music2 size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
