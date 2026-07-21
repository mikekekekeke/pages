import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-900 bg-neutral-950 py-28"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Ready to build something great?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          Whether you're starting a new product, scaling your engineering team
          or looking for experienced technical leadership, we'd love to hear
          about your next challenge.
        </p>

        <div className="mt-12">
          <Link
            href="mailto:hello@wefrip.net"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
          >
            Let's Talk
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-neutral-400">
          <a
            href="mailto:hello@wefrip.net"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Mail size={18} />
            hello@wefrip.net
          </a>
        </div>
      </div>
    </section>
  );
}