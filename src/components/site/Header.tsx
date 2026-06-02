import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/precise-logo.jpg.asset.json";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#why" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo.url}
            alt="Precise Masonry & Concrete logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full ring-1 ring-white/10"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-extrabold uppercase text-white text-lg tracking-wide">
              Precise
            </div>
            <div className="font-display text-[10px] uppercase tracking-[0.22em] text-brand-red">
              Masonry &amp; Concrete
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-display uppercase text-sm tracking-wider text-white/85 hover:text-brand-red transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:2272254964"
            className="hidden md:flex items-center gap-2 font-display font-bold text-white hover:text-brand-red transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="tracking-wider">227-225-4964</span>
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center bg-brand-red hover:bg-brand-red-deep transition-colors text-white font-display font-bold uppercase tracking-wider text-sm px-5 py-2.5 rounded-sm shadow-lg shadow-brand-red/30"
          >
            Free Estimate
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm bg-white/10 text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-charcoal/98 backdrop-blur">
          <nav className="flex flex-col px-4 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display uppercase text-base tracking-wider text-white/90 hover:text-brand-red py-3 border-b border-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:2272254964"
              className="mt-3 flex items-center gap-2 font-display font-bold text-white"
            >
              <Phone className="h-4 w-4" /> 227-225-4964
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}