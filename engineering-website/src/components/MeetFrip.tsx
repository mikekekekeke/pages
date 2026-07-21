import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MeetFrip() {
  return (
    <section
      id="meet-frip"
      className="border-t border-neutral-900 bg-neutral-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Meet FRIP
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Boutique engineering, built on experience.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            FRIP is a boutique engineering consultancy helping startups and
            growing businesses transform ideas into reliable software products.
          </p>

          <div className="mt-10 space-y-8 text-lg leading-8 text-neutral-400">
            <p>
              We believe great engineering doesn't require unnecessary layers of management or oversized delivery teams. 
              By assembling experienced specialists around each engagement, we stay lean, flexible and focused on delivering value where it matters most.
            </p>

            <p>
              Founded by{" "}
              <span className="font-semibold text-white">
                Michail Ostryj
              </span>
              , a Software Engineering Manager with more than nine years of
              experience building distributed systems and leading engineering
              teams, FRIP is built on pragmatic engineering, long-term thinking
              and a commitment to delivering production-ready software.
            </p>
          </div>

          <Link
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 text-sky-400 transition hover:text-sky-300"
          >
            Let's build something together
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}