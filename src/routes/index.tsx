import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Hammer,
  Layers,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Mail,
  Flame,
  Droplets,
  HardHat,
  Mountain,
  Square,
  Footprints,
  Hammer as HammerIcon,
  Grid3x3 as BrickIcon,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { BrushAccent } from "@/components/site/BrushAccent";
import logo from "@/assets/precise-logo.jpg.asset.json";
import heroImg from "@/assets/hero-patio.jpg";
import imgBrick from "@/assets/project-brick.jpg";
import imgRetaining from "@/assets/project-retaining-wall.jpg";
import imgFireplace from "@/assets/project-fireplace.jpg";
import imgVeneer from "@/assets/project-stone-veneer.jpg";
import imgWalkway from "@/assets/project-walkway.jpg";
import imgRestoration from "@/assets/project-restoration.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Precise Masonry & Concrete | Built Right. Built Precise. — Frederick, MD" },
      {
        name: "description",
        content:
          "Professional masonry, concrete, hardscape, and repair services for MD, PA, DC, Northern VA & Northern WV. 20+ years experience. Free estimates — call 227-225-4964.",
      },
      { property: "og:title", content: "Precise Masonry & Concrete | Built Right. Built Precise." },
      {
        property: "og:description",
        content:
          "Brick, block, stone, concrete & hardscape contractor based in Frederick, MD. Patios, retaining walls, fireplaces, restoration & more.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { icon: BrickIcon, title: "Brick Work", desc: "New construction, repairs, and structural brick walls done by hand." },
  { icon: Layers, title: "Block Work", desc: "CMU foundations, structural walls and rough-in block built to spec." },
  { icon: Square, title: "Concrete Work", desc: "Sidewalks, slabs, pads and footers poured clean and level." },
  { icon: Mountain, title: "Stone Veneer", desc: "Natural and manufactured stone exteriors with crisp coursing." },
  { icon: Shield, title: "Retaining Walls", desc: "Engineered, drained, and built to hold for the long haul." },
  { icon: Footprints, title: "Patios & Sidewalks", desc: "Paver, stamped and broom-finish surfaces for everyday use." },
  { icon: HardHat, title: "Driveways & Steps", desc: "Durable driveways, steps and stoops built for daily traffic." },
  { icon: Wrench, title: "Masonry Repairs", desc: "Cracked brick, loose stone, failing mortar — repaired right." },
  { icon: Droplets, title: "Waterproofing", desc: "Foundation and wall waterproofing to keep moisture out." },
  { icon: HammerIcon, title: "Parging & Tuckpointing", desc: "Sharp mortar joints and clean parge coats that last." },
  { icon: Flame, title: "Fire Pits & Fireplaces", desc: "Outdoor fireplaces, fire pits and chimneys built to enjoy." },
  { icon: Sparkles, title: "Custom Masonry", desc: "One-off hardscape and architectural detail work, built to spec." },
];

const FEATURED = [
  { title: "Patios", img: heroImg, span: "lg:col-span-2 lg:row-span-2" },
  { title: "Retaining Walls", img: imgRetaining, span: "" },
  { title: "Fire Pits & Fireplaces", img: imgFireplace, span: "" },
  { title: "Stone Veneer", img: imgVeneer, span: "" },
  { title: "Concrete Walkways", img: imgWalkway, span: "" },
  { title: "Masonry Restoration", img: imgRestoration, span: "lg:col-span-2" },
];

const TRUST = [
  { icon: Award, label: "Over 20 Years Experience" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Hammer, label: "Quality Work Built to Last" },
  { icon: Clock, label: "Reliable & Punctual" },
];

const AREAS = [
  "Maryland",
  "Pennsylvania",
  "Washington, DC",
  "Northern Virginia",
  "Northern West Virginia",
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ServiceStrip />
      <Services />
      <Featured />
      <WhyChoose />
      <Gallery />
      <ServiceArea />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative isolate min-h-[100vh] flex items-center pt-28 pb-20 overflow-hidden">
      <img
        src={heroImg}
        alt="Custom stone patio with fire pit and outdoor fireplace at dusk"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-black/60" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-red/15 border border-brand-red/40 px-3 py-1.5 rounded-sm mb-6">
            <Star className="h-3.5 w-3.5 text-brand-gold fill-brand-gold" />
            <span className="font-display uppercase text-xs tracking-[0.2em] text-white/90">
              Frederick, MD · Serving MD · PA · DC · VA · WV
            </span>
          </div>

          <h1 className="font-display font-black uppercase text-white leading-[0.88] text-5xl sm:text-7xl lg:text-8xl">
            Built Right.
            <br />
            <span className="text-brand-red">Built Precise.</span>
          </h1>

          <div className="relative w-72 h-6 mt-4 text-brand-red">
            <BrushAccent className="absolute inset-0 w-full h-full" />
          </div>

          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            Professional masonry, concrete, hardscape, and repair services for homeowners
            across Maryland, Pennsylvania, DC, Northern Virginia, and Northern West Virginia.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-deep text-white font-display font-bold uppercase tracking-wider px-7 py-4 rounded-sm text-sm sm:text-base shadow-xl shadow-brand-red/30 transition-all hover:shadow-2xl hover:-translate-y-0.5"
            >
              Schedule Your Free Estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/25 hover:bg-white/10 text-white font-display font-bold uppercase tracking-wider px-7 py-4 rounded-sm text-sm sm:text-base backdrop-blur transition-colors"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {TRUST.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-3 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 text-brand-red flex-shrink-0" />
                <span className="font-display uppercase text-xs leading-tight tracking-wider text-white/90">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-3 diag-stripes opacity-90" />
    </section>
  );
}

/* ---------------- SERVICE STRIP ---------------- */
function ServiceStrip() {
  const items = ["Brick", "Block", "Stone", "Concrete", "Repairs", "Restoration", "Hardscape"];
  return (
    <div className="bg-brand-red text-white py-3 border-y-2 border-black">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        {items.map((it, i) => (
          <span key={it} className="flex items-center gap-3">
            <span className="font-display font-bold uppercase tracking-[0.18em] text-sm">
              {it}
            </span>
            {i < items.length - 1 && (
              <Star className="h-3 w-3 text-brand-gold fill-brand-gold" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <section id="services" className="relative py-24 bg-charcoal">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          kicker="What We Do"
          title="Full-Service Masonry & Concrete"
          subtitle="Over 20 years of hands-on craftsmanship — every job done right the first time."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-charcoal-2 border border-white/10 hover:border-brand-red/60 transition-all p-6 rounded-sm overflow-hidden"
            >
              <div className="h-12 w-12 rounded-sm bg-brand-red/15 border border-brand-red/40 flex items-center justify-center mb-4 group-hover:bg-brand-red transition-colors">
                <Icon className="h-6 w-6 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold uppercase text-xl text-white tracking-wide">
                {title}
              </h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED PROJECTS ---------------- */
function Featured() {
  return (
    <section className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          kicker="Project Types"
          title="Built To Last. Built To Impress."
          subtitle="From everyday concrete to custom outdoor living — see the work we do."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[640px]">
          {FEATURED.map((f) => (
            <a
              key={f.title}
              href="#gallery"
              className={`group relative overflow-hidden rounded-sm bg-charcoal border border-white/10 ${f.span} min-h-[220px]`}
            >
              <img
                src={f.img}
                alt={f.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute left-0 right-0 bottom-0 p-5 flex items-end justify-between">
                <div>
                  <div className="font-display uppercase text-[10px] tracking-[0.25em] text-brand-red mb-1">
                    Precise Build
                  </div>
                  <div className="font-display font-extrabold uppercase text-2xl text-white tracking-wide">
                    {f.title}
                  </div>
                </div>
                <div className="h-9 w-9 rounded-sm bg-brand-red flex items-center justify-center group-hover:bg-white transition-colors">
                  <ArrowRight className="h-4 w-4 text-white group-hover:text-brand-red transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
function WhyChoose() {
  const points = [
    {
      n: "01",
      title: "20+ Years On The Tools",
      desc: "Over two decades of hands-on masonry and concrete experience on every job.",
    },
    {
      n: "02",
      title: "Clear Communication",
      desc: "Straight answers from estimate to completion — no run-around, no surprises.",
    },
    {
      n: "03",
      title: "Built For Real Weather",
      desc: "Durable work designed to stand up to Mid-Atlantic seasons and daily use.",
    },
    {
      n: "04",
      title: "Clean & Dependable",
      desc: "Professional jobsite cleanup, reliable scheduling, and trustworthy crews.",
    },
  ];

  return (
    <section id="why" className="relative py-24 bg-charcoal-2 overflow-hidden">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-brand-red to-transparent opacity-40 hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="font-display uppercase text-xs tracking-[0.3em] text-brand-red mb-3">
              Why Precise
            </div>
            <h2 className="font-display font-black uppercase text-white text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
              Honest Pricing.
              <br />
              <span className="text-brand-red">Real Craftsmanship.</span>
            </h2>
            <div className="mt-4 h-1 w-32 bg-brand-red" />
            <p className="mt-6 text-white/70 leading-relaxed">
              We're a Frederick, MD-based contractor that lives and breathes brick, block,
              stone and concrete. When we show up, we get it done — clean, level, and
              built to last.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              <Stat value="20+" label="Years Experience" />
              <Stat value="100%" label="Fully Insured" />
              <Stat value="5★" label="Honest Service" />
              <Stat value="Free" label="Estimates" />
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div
                key={p.n}
                className="relative bg-charcoal border border-white/10 p-6 rounded-sm hover:border-brand-red/60 transition-colors"
              >
                <div className="font-display font-black text-6xl text-brand-red/20 leading-none">
                  {p.n}
                </div>
                <h3 className="font-display font-bold uppercase text-xl text-white mt-2 tracking-wide">
                  {p.title}
                </h3>
                <div className="my-3 h-px w-12 bg-brand-red" />
                <p className="text-sm text-white/65 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-black/40 border border-white/10 px-4 py-3 rounded-sm">
      <div className="font-display font-black text-3xl text-white leading-none">
        {value}
      </div>
      <div className="font-display uppercase text-[10px] tracking-[0.18em] text-white/55 mt-1">
        {label}
      </div>
    </div>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const items = [
    { img: heroImg, label: "Outdoor Living" },
    { img: imgFireplace, label: "Stone Fireplace" },
    { img: imgRetaining, label: "Retaining Wall" },
    { img: imgBrick, label: "Brick Work" },
    { img: imgVeneer, label: "Stone Veneer" },
    { img: imgWalkway, label: "Concrete Walkway" },
    { img: imgRestoration, label: "Restoration" },
    { img: imgFireplace, label: "Fire Feature" },
  ];
  return (
    <section id="gallery" className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          kicker="Recent Work"
          title="Job Site Gallery"
          subtitle="A look at recent patios, walls, fireplaces, restorations and more."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-sm border border-white/10"
            >
              <img
                src={it.img}
                alt={it.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-display uppercase font-bold text-white text-sm tracking-wider">
                  {it.label}
                </div>
                <div className="h-0.5 w-8 bg-brand-red mt-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-deep text-white font-display font-bold uppercase tracking-wider px-7 py-4 rounded-sm shadow-lg shadow-brand-red/30 transition-all hover:-translate-y-0.5"
          >
            See More Completed Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICE AREA ---------------- */
function ServiceArea() {
  return (
    <section id="areas" className="relative py-24 bg-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="font-display uppercase text-xs tracking-[0.3em] text-brand-red mb-3">
            Where We Work
          </div>
          <h2 className="font-display font-black uppercase text-white text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Proudly Serving The Mid-Atlantic
          </h2>
          <div className="mt-4 h-1 w-32 bg-brand-red" />
          <p className="mt-6 text-white/75 leading-relaxed text-lg">
            Headquartered in <span className="text-white font-semibold">Frederick, MD</span>,
            we travel throughout the region for residential and light commercial masonry
            and concrete work.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-2">
            {AREAS.map((a) => (
              <li
                key={a}
                className="flex items-center gap-3 bg-charcoal-2 border border-white/10 px-4 py-3 rounded-sm"
              >
                <MapPin className="h-4 w-4 text-brand-red" />
                <span className="font-display uppercase tracking-wider text-white text-sm">
                  {a}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="tel:2272254964"
            className="mt-8 inline-flex items-center gap-3 text-white hover:text-brand-red transition-colors"
          >
            <div className="h-12 w-12 rounded-sm bg-brand-red flex items-center justify-center">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-display uppercase text-[10px] tracking-[0.22em] text-white/55">
                Call Today
              </div>
              <div className="font-display font-bold text-2xl tracking-wider">
                227-225-4964
              </div>
            </div>
          </a>
        </div>

        <div className="relative">
          <div className="aspect-square max-w-[520px] mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-red/20 to-transparent blur-3xl" />
            <div className="relative h-full w-full rounded-sm bg-charcoal-2 border border-white/10 p-8 flex items-center justify-center overflow-hidden">
              {/* Stylized map */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.3" opacity="0.15" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" />
                {/* Abstract states shape */}
                <path
                  d="M60 180 L120 150 L180 130 L240 120 L310 140 L340 180 L320 230 L260 250 L200 260 L140 250 L80 230 Z"
                  fill="oklch(0.18 0.005 0)"
                  stroke="oklch(0.55 0.22 27)"
                  strokeWidth="2"
                />
                <path
                  d="M120 250 L170 270 L220 280 L260 270 L290 290 L240 320 L180 310 L130 290 Z"
                  fill="oklch(0.16 0.005 0)"
                  stroke="oklch(0.55 0.22 27)"
                  strokeWidth="2"
                />
                {/* Frederick MD pin */}
                <circle cx="215" cy="195" r="14" fill="oklch(0.55 0.22 27)" />
                <circle cx="215" cy="195" r="6" fill="white" />
                <circle cx="215" cy="195" r="24" fill="none" stroke="oklch(0.55 0.22 27)" strokeWidth="1" opacity="0.5">
                  <animate attributeName="r" from="14" to="40" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="215" y="170" textAnchor="middle" fill="white" fontFamily="Barlow Condensed" fontSize="14" fontWeight="700" letterSpacing="2">
                  FREDERICK, MD
                </text>
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-brand-red text-white px-5 py-3 rounded-sm shadow-xl shadow-brand-red/40 font-display uppercase font-bold tracking-wider text-sm">
              Home Base
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="relative py-24 bg-charcoal-2 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src={imgBrick} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-2 via-charcoal-2/90 to-black/95" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-stretch">
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="font-display uppercase text-xs tracking-[0.3em] text-brand-red mb-3">
                Free Estimate
              </div>
              <h2 className="font-display font-black uppercase text-white text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
                Ready To Start
                <br />
                <span className="text-brand-red">Your Project?</span>
              </h2>
              <div className="mt-4 h-1 w-32 bg-brand-red" />
              <p className="mt-6 text-white/75 leading-relaxed">
                Tell us about the work. We'll come take a look, talk it through, and
                send a clear, honest estimate — no pressure.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="tel:2272254964"
                className="flex items-center gap-4 bg-brand-red hover:bg-brand-red-deep transition-colors px-5 py-4 rounded-sm group"
              >
                <Phone className="h-6 w-6 text-white" />
                <div>
                  <div className="font-display uppercase text-[10px] tracking-[0.22em] text-white/80">
                    Call Now
                  </div>
                  <div className="font-display font-bold text-2xl text-white tracking-wider">
                    227-225-4964
                  </div>
                </div>
              </a>
              <a
                href="mailto:dan@precisemasonryandconcrete.com"
                className="flex items-center gap-4 bg-charcoal border border-white/10 hover:border-brand-red/60 px-5 py-4 rounded-sm transition-colors"
              >
                <Mail className="h-5 w-5 text-brand-red" />
                <div>
                  <div className="font-display uppercase text-[10px] tracking-[0.22em] text-white/55">
                    Email
                  </div>
                  <div className="text-white text-sm">dan@precisemasonryandconcrete.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-charcoal border border-white/10 px-5 py-4 rounded-sm">
                <MapPin className="h-5 w-5 text-brand-red" />
                <div>
                  <div className="font-display uppercase text-[10px] tracking-[0.22em] text-white/55">
                    Based In
                  </div>
                  <div className="text-white text-sm">Frederick, MD</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="lg:col-span-3 bg-background border border-white/10 p-7 lg:p-10 rounded-sm shadow-2xl shadow-black/50 relative"
          >
            <div className="absolute -top-3 left-7 bg-brand-red text-white font-display uppercase text-xs tracking-[0.22em] px-3 py-1 rounded-sm">
              Request Estimate
            </div>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-brand-red/15 border border-brand-red flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="mt-6 font-display font-bold uppercase text-2xl text-white">
                  Thanks — We'll Be In Touch
                </h3>
                <p className="mt-2 text-white/70">
                  We typically respond within one business day. For a faster reply,
                  call <a href="tel:2272254964" className="text-brand-red font-bold">227-225-4964</a>.
                </p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
                  <div className="sm:col-span-2">
                    <Label>Project Type</Label>
                    <select
                      name="project"
                      required
                      className="mt-2 w-full bg-charcoal border border-white/15 focus:border-brand-red text-white rounded-sm px-4 py-3 outline-none transition-colors"
                    >
                      <option value="">Select a project type…</option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Tell us about the job</Label>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={1000}
                      className="mt-2 w-full bg-charcoal border border-white/15 focus:border-brand-red text-white rounded-sm px-4 py-3 outline-none transition-colors resize-none"
                      placeholder="Patio dimensions, location, timeline, anything we should know…"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-deep transition-all text-white font-display font-bold uppercase tracking-wider px-6 py-4 rounded-sm shadow-lg shadow-brand-red/30 hover:-translate-y-0.5"
                >
                  Request My Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-white/45 text-xs">
                  We respect your time and never share your information.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display uppercase text-[10px] tracking-[0.22em] text-white/60">
      {children}
    </span>
  );
}
function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="mt-2 w-full bg-charcoal border border-white/15 focus:border-brand-red text-white rounded-sm px-4 py-3 outline-none transition-colors"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Precise Masonry & Concrete" className="h-14 w-14 rounded-full" />
            <div>
              <div className="font-display font-extrabold uppercase text-white text-lg leading-tight">
                Precise
              </div>
              <div className="font-display uppercase text-[10px] tracking-[0.22em] text-brand-red">
                Masonry &amp; Concrete
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/55 max-w-xs">
            Built Right. Built Precise. Family-run masonry &amp; concrete contractor
            serving the Mid-Atlantic.
          </p>
        </div>

        <div>
          <div className="font-display uppercase text-xs tracking-[0.22em] text-brand-red mb-4">
            Services
          </div>
          <ul className="space-y-2 text-sm text-white/70">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.title}>
                <a href="#services" className="hover:text-brand-red transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display uppercase text-xs tracking-[0.22em] text-brand-red mb-4">
            Service Areas
          </div>
          <ul className="space-y-2 text-sm text-white/70">
            {AREAS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display uppercase text-xs tracking-[0.22em] text-brand-red mb-4">
            Contact
          </div>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-red" /> 227-225-4964
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-red" />
              <a href="mailto:dan@precisemasonryandconcrete.com" className="hover:text-brand-red break-all">
                dan@precisemasonryandconcrete.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-red" /> Frederick, MD
            </li>
          </ul>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-deep text-white font-display font-bold uppercase tracking-wider px-5 py-3 rounded-sm text-sm"
          >
            Free Estimate <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Precise Masonry & Concrete, LLC. All rights reserved.</div>
          <div className="font-display uppercase tracking-[0.22em]">
            Built Right. <span className="text-brand-red">Built Precise.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="font-display uppercase text-xs tracking-[0.3em] text-brand-red mb-3">
        {kicker}
      </div>
      <h2 className="font-display font-black uppercase text-white text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
        {title}
      </h2>
      <div className="mt-4 h-1 w-32 bg-brand-red" />
      {subtitle && (
        <p className="mt-5 text-white/70 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
