import {
  Briefcase,
  Rocket,
  Users,
  ShieldCheck,
  Cog,
  Network,
} from "lucide-react";

const engagementModels = [
  {
    icon: Briefcase,
    title: "Fractional Leadership",
    description:
      "Technical leadership, architecture guidance and engineering strategy without the commitment of a full-time executive.",
  },
  {
    icon: Rocket,
    title: "Product Delivery",
    description:
      "Design, build and launch production-ready software tailored to your business goals.",
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description:
      "Strengthen your existing engineering team with experienced specialists who integrate quickly and deliver value.",
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Senior Expertise",
    description:
      "Every engagement is led by experienced engineers with a proven track record in product development and engineering leadership.",
  },
  {
    icon: Network,
    title: "Tailored Teams",
    description:
      "We assemble the right specialists for every project, matching your technology, product and business needs.",
  },
  {
    icon: Cog,
    title: "Production Mindset",
    description:
      "We build software that is maintainable, scalable and designed for long-term success.",
  },
];

export default function HowWePartner() {
  return (
    <section
      id="partner"
      className="border-t border-neutral-900 bg-neutral-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            How We Partner
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Flexible engineering expertise,
            <br />
            built around your needs.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Whether you need technical leadership, a complete delivery team or experienced specialists, FRIP adapts to your business and works as an extension of your organization.
            <br />
            We support both long-term engineering partnerships and clearly defined fixed-scope projects, adapting our engagement model to your product, team and goals.
          </p>
        </div>

        {/* Engagement Models */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold text-white">
            How we help
          </h3>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {engagementModels.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-neutral-900 bg-neutral-900/40 p-8 transition-all duration-300 hover:border-sky-500/40 hover:bg-neutral-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    <Icon size={24} />
                  </div>

                  <h4 className="mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why FRIP */}
        <div className="mt-24">
          <h3 className="text-xl font-semibold text-white">
            Why clients choose FRIP
          </h3>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-neutral-900 bg-neutral-900/40 p-8 transition-all duration-300 hover:border-sky-500/40 hover:bg-neutral-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    <Icon size={24} />
                  </div>

                  <h4 className="mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}