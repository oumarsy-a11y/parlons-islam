import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ExternalLink,
  Globe2,
  Headphones,
  Mic2,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { reciters } from "@/data/reciters";

export const metadata: Metadata = {
  title: "Récitateurs du Coran",
  description:
    "Découvrez les récitateurs du Coran proposés par Parlons Islam et écoutez différentes récitations, notamment en riwāyat Ḥafṣ et Warsh.",
  alternates: {
    canonical: "/recitateurs",
  },
};

export default function RecitateursPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ec]">
      <Menu />

      {/* En-tête */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#c9a96e]/20
          bg-[#f8f5ec]
          py-20
          text-center
          md:py-24
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-48
            w-48
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#c9a96e]/10
          "
        />

        <div className="relative mx-auto max-w-4xl px-6">
          <div
            className="
              mx-auto
              mb-6
              h-px
              w-12
              bg-[#c9a96e]
            "
          />

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#8d6b35]
            "
          >
            Récitation coranique
          </p>

          <h1
            className="
              mt-4
              text-4xl
              font-semibold
              tracking-tight
              text-green-950
              md:text-5xl
            "
          >
            Les voix du Coran
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              md:text-lg
            "
          >
            Découvrez des récitations transmises selon différentes
            riwāyāt, et prenez le temps d'écouter, d'apprendre et de
            méditer la Parole d'Allah.
          </p>

          <div
            className="
              mx-auto
              mt-8
              flex
              w-fit
              flex-wrap
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#c9a96e]/20
              bg-white/70
              px-4
              py-2.5
              text-xs
              font-medium
              text-green-900
              shadow-sm
            "
          >
            <span>Hafs 'an ʿĀṣim</span>

            <span
              aria-hidden="true"
              className="text-[#c9a96e]"
            >
              ·
            </span>

            <span>Warsh 'an Nāfiʿ</span>
          </div>
        </div>
      </section>

      {/* Liste des récitateurs */}

      <section className="bg-[#f8f5ec] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#8d6b35]
                "
              >
                Récitateurs
              </p>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-green-950
                  md:text-3xl
                "
              >
                Écouter et découvrir
              </h2>
            </div>

            <span
              className="
                hidden
                rounded-full
                border
                border-[#c9a96e]/20
                bg-white/70
                px-3
                py-1.5
                text-xs
                text-gray-500
                sm:block
              "
            >
              {reciters.length} voix
            </span>
          </div>

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {reciters.map((reciter, index) => {
              const hasDirectAudio = Boolean(reciter.url);

              return (
                <article
                  key={reciter.id}
                  className="
                    group
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-[#c9a96e]/15
                    bg-white
                    shadow-[0_8px_30px_rgba(18,55,42,0.04)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#c9a96e]/35
                    hover:shadow-[0_18px_45px_rgba(18,55,42,0.08)]
                  "
                >
                  {/* Bandeau supérieur */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#c9a96e]/10
                      bg-[#fcfaf5]
                      px-6
                      py-4
                    "
                  >
                    <span
                      className="
                        text-[11px]
                        font-semibold
                        tracking-[0.18em]
                        text-[#8d6b35]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`
                        rounded-full
                        border
                        px-3
                        py-1.5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        ${
                          hasDirectAudio
                            ? "border-green-900/10 bg-green-50 text-green-900"
                            : "border-[#c9a96e]/20 bg-[#f8f5ec] text-[#8d6b35]"
                        }
                      `}
                    >
                      {hasDirectAudio
                        ? "Audio disponible"
                        : "Source externe"}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    {/* Icône */}

                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-[#c9a96e]/20
                          bg-[#f8f5ec]
                          text-green-900
                          transition-all
                          duration-300
                          group-hover:border-[#c9a96e]/40
                          group-hover:bg-white
                        "
                      >
                        <Mic2
                          size={24}
                          strokeWidth={1.5}
                        />
                      </div>

                      <span
                        className="
                          rounded-full
                          bg-green-950/[0.04]
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.12em]
                          text-green-900
                        "
                      >
                        {reciter.riwaya.startsWith("Hafs")
                          ? "Hafs"
                          : "Warsh"}
                      </span>
                    </div>

                    {/* Informations */}

                    <div className="mt-7 flex-1">
                      <h2
                        className="
                          text-xl
                          font-semibold
                          leading-snug
                          text-green-950
                        "
                      >
                        {reciter.name}
                      </h2>

                      <div className="mt-5 space-y-3">
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                            text-sm
                            text-gray-600
                          "
                        >
                          <Globe2
                            size={17}
                            strokeWidth={1.5}
                            className="shrink-0 text-[#8d6b35]"
                          />

                          <span>{reciter.country}</span>
                        </div>

                        <div
                          className="
                            flex
                            items-start
                            gap-3
                            text-sm
                            text-gray-600
                          "
                        >
                          <BookOpen
                            size={17}
                            strokeWidth={1.5}
                            className="mt-0.5 shrink-0 text-[#8d6b35]"
                          />

                          <span>{reciter.riwaya}</span>
                        </div>
                      </div>
                    </div>

                    {/* Séparateur */}

                    <div
                      className="
                        my-7
                        h-px
                        w-full
                        bg-[#c9a96e]/15
                      "
                    />

                    {/* Action */}

                    {hasDirectAudio ? (
                      <Link
                        href={`/coran/1?reciter=${encodeURIComponent(
                          reciter.id
                        )}`}
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2.5
                          rounded-full
                          bg-green-950
                          px-5
                          py-3.5
                          text-sm
                          font-medium
                          text-white
                          transition-all
                          duration-300
                          hover:bg-green-900
                        "
                      >
                        <Headphones
                          size={17}
                          strokeWidth={1.7}
                        />

                        <span>Écouter le Coran</span>
                      </Link>
                    ) : reciter.source ? (
                      <a
                        href={reciter.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2.5
                          rounded-full
                          border
                          border-green-900/15
                          bg-[#f8f5ec]
                          px-5
                          py-3.5
                          text-sm
                          font-medium
                          text-green-950
                          transition-all
                          duration-300
                          hover:border-[#c9a96e]/40
                          hover:bg-white
                        "
                      >
                        <ExternalLink
                          size={17}
                          strokeWidth={1.7}
                        />

                        <span>Découvrir la source</span>
                      </a>
                    ) : (
                      <div
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          border
                          border-gray-200
                          px-5
                          py-3.5
                          text-sm
                          text-gray-400
                        "
                      >
                        <span>Source indisponible</span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}