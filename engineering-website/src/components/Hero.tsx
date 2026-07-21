import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-neutral-950" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_45%)]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-20 text-center">
        {/* Badge */}
        <div className="mb-8 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-300">
          Boutique Engineering Consultancy
        </div>

        {/* Headline */}
        <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white md:text-7xl">
          Engineering teams
          <br />
          that turn ideas
          <br />
          into production.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 md:text-xl">
          FRIP helps startups and growing businesses design, build and scale
          modern software products. From engineering leadership to tailored
          delivery teams, we bring together the right expertise for every stage
          of your product.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
          >
            Let's Talk
            <ArrowRight size={18} />
          </Link>

          <Link
            href="#engagement"
            className="inline-flex items-center justify-center rounded-full border border-neutral-800 px-6 py-3 text-sm font-medium text-neutral-300 transition hover:border-neutral-700 hover:bg-neutral-900 hover:text-white"
          >
            How We Help
          </Link>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-8 border-t border-neutral-900 pt-10 text-left md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-semibold text-white">9+</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Years of engineering and leadership experience.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-white">Senior</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Experienced specialists assembled for each engagement.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-white">End-to-End</h3>
            <p className="mt-2 text-sm text-neutral-400">
              From strategy and architecture to production delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}