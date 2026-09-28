import Link from "next/link";
import {
  Scale,
  Droplets,
  MoonStar,
  HandCoins,
  Landmark,
  Users,
  ShoppingBag,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Purification (Ṭahāra)",
    description:
      "Les règles relatives aux ablutions, au ghusl, au tayammum et à la purification.",
    icon: Droplets,
    path: "/fiqh-malikite/tahara",
  },
  {
    title: "La Prière (Ṣalāt)",
    description:
      "Les conditions, piliers, obligations et recommandations de la prière.",
    icon: Scale,
    path: "/fiqh-malikite/salat",
  },
  {
    title: "Le Jeûne (Ṣiyām)",
    description:
      "Les règles du jeûne de Ramadan et des jeûnes surérogatoires.",
    icon: MoonStar,
    path: "/fiqh-malikite/siyam",
  },
  {
    title: "La Zakāt",
    description:
      "Les règles de la zakāt, ses bénéficiaires et ses conditions.",
    icon: HandCoins,
    path: "/fiqh-malikite/zakat",
  },
  {
    title: "Le Pèlerinage (Ḥajj)",
    description:
      "Les rites du Hajj et de la ʿUmra selon l'école malikite.",
    icon: Landmark,
    path: "/fiqh-malikite/hajj",
  },
  {
    title: "Mariage et famille",
    description:
      "Mariage, divorce, droits des époux et éducation familiale.",
    icon: Users,
    path: "/fiqh-malikite/famille",
  },
  {
    title: "Transactions",
    description:
      "Commerce, contrats, ventes et éthique financière.",
    icon: ShoppingBag,
    path: "/fiqh-malikite/transactions",
  },
  {
    title: "Bibliothèque Malikite",
    description:
      "Les grands ouvrages de référence de l'école malikite.",
    icon: BookOpen,
    path: "/fiqh-malikite/bibliotheque",
  },
];

export default function FiqhMalikitePage() {
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
            <Scale
              size={29}
              strokeWidth={1.45}
              className="text-[#8d6b35]"
            />
          </div>

          <p
            className="
              mt-7
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#8d6b35]
            "
          >
            Science · Compréhension · Pratique
          </p>

          <h1
            className="
              mt-3
              text-4xl
              font-semibold
              tracking-[-0.02em]
              text-green-950
              md:text-5xl
              lg:text-[3.4rem]
            "
          >
            Fiqh Malikite
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
            Découvrez les règles juridiques selon l'école de
            l'Imam Mālik ibn Anas, dans le respect du Coran
            et de la Sunna.
          </p>
        </div>
      </section>

      {/* Sections */}

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
              Parcourir le fiqh
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
              Les grandes matières
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
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <Link
                  key={section.title}
                  href={section.path}
                  className="
                    group
                    relative
                    flex
                    min-h-[255px]
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

                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#c9a96e]/25
                        bg-[#f8f5ec]
                      "
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.45}
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

                  <h2
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
                    {section.title}
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-gray-600
                    "
                  >
                    {section.description}
                  </p>

                  <div
                    className="
                      mt-auto
                      border-t
                      border-[#c9a96e]/10
                      pt-5
                    "
                  >
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
                      Explorer →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}