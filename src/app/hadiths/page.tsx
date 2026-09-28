import Link from "next/link";
import { BookOpen, Sparkles, ArrowUpRight } from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { hadiths } from "@/data/hadiths";
import { categoriesHadiths } from "@/data/categoriesHadiths";

export default function HadithsPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf5]">
      <Menu />

      {/* Hero */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#c9a96e]/10
          bg-[#f8f5ec]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            border
            border-[#c9a96e]/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-20
            h-72
            w-72
            rounded-full
            border
            border-green-900/5
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-5xl
            px-6
            py-20
            text-center
            md:py-24
          "
        >
          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#c9a96e]/30
              bg-white/70
              shadow-sm
            "
          >
            <BookOpen
              size={29}
              strokeWidth={1.45}
              className="text-[#8d6b35]"
            />
          </div>

          <h1
            className="
              mt-7
              text-4xl
              font-semibold
              tracking-[-0.02em]
              text-green-950
              md:text-5xl
              lg:text-[3.4rem]
            "
          >
            Les Hadiths
          </h1>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a96e]/30" />

            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rotate-45 bg-[#c9a96e]"
            />

            <span className="h-px w-10 bg-[#c9a96e]/30" />
          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              md:text-lg
              md:leading-8
            "
          >
            Les enseignements du Prophète ﷺ, la sagesse de
            la Sunna et les paroles rapportées.
          </p>
        </div>
      </section>

      {/* Catégories */}

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#8d6b35]
              "
            >
              Parcourir les enseignements
            </p>

            <h2
              className="
                mt-3
                text-2xl
                font-semibold
                text-green-950
                md:text-3xl
              "
            >
              Explorer par catégorie
            </h2>
          </div>

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {categoriesHadiths.map((category) => (
              <div key={category.id}>
                <div
                  className="
                    group
                    relative
                    h-full
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
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-8
                      -top-8
                      h-24
                      w-24
                      rounded-full
                      border
                      border-[#c9a96e]/10
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#c9a96e]/25
                      bg-[#f8f5ec]
                      text-xl
                    "
                  >
                    {category.icon}
                  </div>

                  <h3
                    className="
                      relative
                      mt-5
                      text-lg
                      font-semibold
                      text-green-950
                    "
                  >
                    {category.name}
                  </h3>

                  <p
                    className="
                      relative
                      mt-3
                      text-sm
                      leading-6
                      text-gray-600
                    "
                  >
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des hadiths */}

      <section
        className="
          border-t
          border-[#c9a96e]/10
          bg-white
          py-14
          md:py-16
        "
      >
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="
              mb-10
              flex
              flex-col
              gap-3
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#8d6b35]
                "
              >
                Collection
              </p>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  text-green-950
                  md:text-3xl
                "
              >
                Paroles et enseignements
              </h2>
            </div>

            <p className="text-sm text-gray-500">
              {hadiths.length} hadith
              {hadiths.length > 1 ? "s" : ""}
            </p>
          </div>

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {hadiths.map((hadith) => (
              <div key={hadith.id}>
                <Link
                  href={`/hadiths/${hadith.id}`}
                  className="
                    group
                    flex
                    h-full
                    min-h-[260px]
                    flex-col
                    rounded-[1.75rem]
                    border
                    border-[#c9a96e]/15
                    bg-[#fcfaf5]
                    p-6
                    shadow-[0_8px_30px_rgba(18,55,42,0.035)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#c9a96e]/35
                    hover:bg-white
                    hover:shadow-[0_18px_42px_rgba(18,55,42,0.08)]
                  "
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#c9a96e]/20
                        bg-white
                      "
                    >
                      <Sparkles
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#8d6b35]"
                      />
                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="
                        text-gray-400
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#8d6b35]
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      leading-snug
                      text-green-950
                      transition-colors
                      duration-300
                      group-hover:text-green-800
                    "
                  >
                    {hadith.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.1em]
                      text-[#8d6b35]
                    "
                  >
                    {hadith.category}
                  </p>

                  <p
                    className="
                      mt-4
                      line-clamp-4
                      text-sm
                      leading-6
                      text-gray-600
                    "
                  >
                    {hadith.text}
                  </p>

                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#c9a96e]/10
                      pt-5
                    "
                  >
                    <span className="text-xs text-gray-400">
                      Hadith
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}