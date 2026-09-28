"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const explorerLinks = [
  { label: "Coran", href: "/coran" },
  { label: "Récitateurs", href: "/recitateurs" },
  { label: "Hadiths", href: "/hadiths" },
];

const knowledgeLinks = [
  { label: "Fiqh Malikite", href: "/fiqh-malikite" },
  { label: "Taṣawwuf", href: "/tassawuf" },
  { label: "Tijāniyya", href: "/tijaniyya" },
  { label: "Notre histoire", href: "/notre-histoire" },
  { label: "Nous contacter", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d3029] text-[#f8f5ec]">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* IDENTITÉ */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/images/logo.png"
                alt="Parlons Islam"
                width={52}
                height={52}
                className="h-[52px] w-[52px] object-contain"
              />

              <div>
                <p className="text-xl font-semibold tracking-tight">
                  Parlons Islam
                </p>

                <p className="mt-1 text-xs tracking-[0.12em] text-[#c9a96e]">
                  Science · Spiritualité · Transmission
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#d6ddd8]">
              Une plateforme dédiée à la connaissance islamique,
              à la compréhension et à la transmission d&apos;un
              savoir bénéfique.
            </p>

            <p
              dir="rtl"
              lang="ar"
              className="mt-6 text-sm tracking-wide text-[#c9a96e]"
            >
              العلم · العمل · الإحسان
            </p>
          </div>

          {/* EXPLORER */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a96e]">
              Explorer
            </h3>

            <ul className="mt-5 space-y-3">
              {explorerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#d6ddd8] transition-colors duration-300 hover:text-[#c9a96e]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNAISSANCE */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a96e]">
              Connaissance
            </h3>

            <ul className="mt-5 space-y-3">
              {knowledgeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#d6ddd8] transition-colors duration-300 hover:text-[#c9a96e]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* DÉMARCHE */}
        <div className="mt-12 border-t border-[#385047] pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a96e]">
                Notre démarche
              </p>

              <p className="mt-3 text-sm leading-6 text-[#d6ddd8]">
                Faire de la connaissance une lumière, de la compréhension
                une responsabilité et de la transmission un service.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm italic text-[#d6ddd8]">
              <Heart
                size={16}
                strokeWidth={1.5}
                className="text-[#c9a96e]"
              />
              <span>
                Servir Allah en servant Ses créatures.
              </span>
            </div>

          </div>
        </div>

        {/* BAS DU FOOTER */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#385047] pt-6 text-xs text-[#aebbb5] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Parlons Islam
          </p>

          <p>
            Tous droits réservés.
          </p>

        </div>

      </div>
    </footer>
  );
}