"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, BookOpenText } from "lucide-react";
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

  return (
    <div className="mx-auto max-w-6xl px-6">

      {/* Recherche */}

      <div className="mx-auto mb-12 max-w-2xl">

        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-green-100
            bg-white
            px-5
            py-4
            shadow-sm
            focus-within:border-green-400
            focus-within:ring-2
            focus-within:ring-green-100
          "
        >
          <Search
            size={22}
            className="shrink-0 text-green-800"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Rechercher une sourate..."
            className="
              w-full
              bg-transparent
              text-gray-800
              outline-none
              placeholder:text-gray-400
            "
          />

        </div>

        {search && (
          <p className="mt-3 text-center text-sm text-gray-500">
            {filteredSourates.length} sourate
            {filteredSourates.length > 1 ? "s" : ""} trouvée
            {filteredSourates.length > 1 ? "s" : ""}
          </p>
        )}

      </div>


      {/* Liste */}

      {sourates.length === 0 ? (

        <div
          className="
            rounded-3xl
            bg-green-50
            p-10
            text-center
            text-gray-600
          "
        >
          Chargement des sourates du Coran...
        </div>

      ) : filteredSourates.length === 0 ? (

        <div
          className="
            rounded-3xl
            bg-green-50
            p-10
            text-center
            text-gray-600
          "
        >
          <BookOpenText
            size={40}
            className="mx-auto mb-4 text-green-800"
          />

          <p className="font-semibold">
            Aucune sourate trouvée.
          </p>

          <p className="mt-2 text-sm">
            Essayez avec un autre nom ou numéro.
          </p>
        </div>

      ) : (

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {filteredSourates.map((sourate, index) => (

            <motion.div
              key={sourate.number}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.025, 0.3),
              }}
              viewport={{
                once: true,
              }}
            >

              <Link
                href={`/coran/${sourate.number}`}
                className="
                  group
                  block
                  rounded-3xl
                  border
                  border-green-100
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-200
                  hover:shadow-lg
                "
              >

                <div className="flex items-center justify-between gap-4">

                  <span
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-green-900
                      font-bold
                      text-white
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    {sourate.number}
                  </span>

                  <span
                    dir="rtl"
                    className="
                      text-right
                      text-2xl
                      font-semibold
                      text-green-900
                    "
                  >
                    {sourate.name}
                  </span>

                </div>


                <h2
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-green-900
                    transition-colors
                    group-hover:text-green-700
                  "
                >
                  {sourate.englishName}
                </h2>


                <div className="mt-3 flex flex-wrap gap-2">

                  <span
                    className="
                      rounded-full
                      bg-green-50
                      px-3
                      py-1
                      text-sm
                      text-green-800
                    "
                  >
                    {sourate.numberOfAyahs} versets
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-gray-50
                      px-3
                      py-1
                      text-sm
                      text-gray-600
                    "
                  >
                    {sourate.revelationType}
                  </span>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      )}

    </div>
  );
}
