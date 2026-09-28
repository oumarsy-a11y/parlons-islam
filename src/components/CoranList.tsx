"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpenText,
  Search,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

interface Sourate {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface CoranListProps {
  sourates?: Sourate[];
}

export default function CoranList({
  sourates = [],
}: CoranListProps) {
  const [search, setSearch] = useState("");

  const filteredSourates = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return sourates;

    return sourates.filter((sourate) =>
      [
        sourate.number.toString(),
        sourate.name,
        sourate.englishName,
        sourate.revelationType,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [search, sourates]);

  const hasSearch = search.trim().length > 0;

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Barre de recherche */}

      <div className="mx-auto max-w-3xl">
        <div
          className="
            rounded-[1.75rem]
            border
            border-[#c9a96e]/20
            bg-[#fcfaf5]
            p-2
            shadow-[0_10px_35px_rgba(18,55,42,0.05)]
            transition-all
            duration-300
            focus-within:border-[#c9a96e]/45
            focus-within:shadow-[0_14px_40px_rgba(18,55,42,0.08)]
          "
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <Search
              size={20}
              strokeWidth={1.7}
              className="shrink-0 text-[#8d6b35]"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher une sourate ou un numéro..."
              aria-label="Rechercher une sourate"
              className="
                min-w-0
                flex-1
                bg-transparent
                text-sm
                text-green-950
                outline-none
                placeholder:text-gray-400
                md:text-base
              "
            />

            {hasSearch && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Effacer la recherche"
                className="
                  rounded-full
                  px-2.5
                  py-1
                  text-xs
                  font-medium
                  text-gray-400
                  transition-colors
                  hover:bg-[#f8f5ec]
                  hover:text-green-900
                "
              >
                Effacer
              </button>
            )}
          </div>
        </div>

        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            justify-between
            gap-3
            px-1
          "
        >
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <BookOpenText
              size={15}
              strokeWidth={1.6}
              className="text-[#8d6b35]"
            />

            <span>
              {hasSearch
                ? `${filteredSourates.length} sourate${
                    filteredSourates.length > 1 ? "s" : ""
                  } trouvée${
                    filteredSourates.length > 1 ? "s" : ""
                  }`
                : `${sourates.length || 114} sourates`}
            </span>
          </div>

          {!hasSearch && (
            <div
              className="
                flex
                items-center
                gap-2
                text-xs
                text-green-900/70
              "
            >
              <Sparkles
                size={14}
                strokeWidth={1.6}
                className="text-[#8d6b35]"
              />

              <span>Le Livre d'Allah ﷻ</span>
            </div>
          )}
        </div>
      </div>

      {/* Liste */}

      <div className="mt-10">
        {sourates.length === 0 ? (
          <div
            className="
              rounded-[2rem]
              border
              border-[#c9a96e]/15
              bg-[#fcfaf5]
              p-12
              text-center
              shadow-sm
            "
          >
            <BookOpenText
              size={42}
              strokeWidth={1.4}
              className="mx-auto text-[#8d6b35]"
            />

            <p className="mt-5 font-medium text-green-950">
              Chargement des sourates du Coran...
            </p>
          </div>
        ) : filteredSourates.length === 0 ? (
          <div
            className="
              rounded-[2rem]
              border
              border-[#c9a96e]/15
              bg-[#fcfaf5]
              p-12
              text-center
              shadow-sm
            "
          >
            <BookOpenText
              size={42}
              strokeWidth={1.4}
              className="mx-auto text-[#8d6b35]"
            />

            <p className="mt-5 font-semibold text-green-950">
              Aucune sourate trouvée
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Essayez avec un autre nom ou numéro.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="
                mt-6
                rounded-full
                border
                border-green-900/15
                bg-white
                px-5
                py-2.5
                text-sm
                font-medium
                text-green-950
                transition-all
                hover:border-[#c9a96e]/40
                hover:bg-[#f8f5ec]
              "
            >
              Afficher les sourates
            </button>
          </div>
        ) : (
          <div
            className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredSourates.map((sourate, index) => (
              <motion.div
                key={sourate.number}
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.018, 0.22),
                }}
                viewport={{
                  once: true,
                  margin: "0px 0px -40px 0px",
                }}
              >
                <Link
                  href={`/coran/${sourate.number}`}
                  className="
                    group
                    relative
                    flex
                    min-h-[210px]
                    flex-col
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-[#c9a96e]/15
                    bg-white
                    p-6
                    shadow-[0_8px_30px_rgba(18,55,42,0.035)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#c9a96e]/35
                    hover:shadow-[0_18px_42px_rgba(18,55,42,0.08)]
                  "
                >
                  {/* Motif décoratif */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-28
                      w-28
                      rounded-full
                      border
                      border-[#c9a96e]/10
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    {/* Numéro */}

                    <span
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#c9a96e]/30
                        bg-[#f8f5ec]
                        text-sm
                        font-semibold
                        tabular-nums
                        text-green-950
                        transition-all
                        duration-300
                        group-hover:border-[#c9a96e]/60
                        group-hover:bg-white
                      "
                    >
                      {sourate.number}
                    </span>

                    {/* Type de révélation */}

                    <span
                      className="
                        rounded-full
                        border
                        border-green-900/10
                        bg-green-50/70
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.1em]
                        text-green-900/70
                      "
                    >
                      {sourate.revelationType}
                    </span>
                  </div>

                  {/* Noms */}

                  <div className="relative mt-7 flex-1">
                    <p
                      dir="rtl"
                      lang="ar"
                      className="
                        text-right
                        text-[1.7rem]
                        font-medium
                        leading-relaxed
                        text-green-950
                        transition-colors
                        duration-300
                        group-hover:text-green-900
                      "
                    >
                      {sourate.name}
                    </p>

                    <h2
                      className="
                        mt-3
                        text-lg
                        font-semibold
                        leading-snug
                        text-green-950
                        transition-colors
                        duration-300
                        group-hover:text-green-800
                      "
                    >
                      {sourate.englishName}
                    </h2>
                  </div>

                  {/* Pied de carte */}

                  <div
                    className="
                      relative
                      mt-6
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#c9a96e]/10
                      pt-4
                    "
                  >
                    <span className="text-xs text-gray-500">
                      {sourate.numberOfAyahs} verset
                      {sourate.numberOfAyahs > 1 ? "s" : ""}
                    </span>

                    <span
                      className="
                        text-xs
                        font-medium
                        text-[#8d6b35]
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    >
                      Lire →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}