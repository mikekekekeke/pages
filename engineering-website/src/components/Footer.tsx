import Link from "next/link";

const navigation = [
  {
    label: "Meet FRIP",
    href: "#meet-frip",
  },
  {
    label: "How We Partner",
    href: "#partner",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            FRIP
          </Link>

          <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
            Boutique engineering consultancy helping companies move from idea
            to production.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-neutral-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-neutral-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} FRIP. All rights reserved.</p>

          <p>From Idea to Production.</p>
        </div>
      </div>
    </footer>
  );
}