import { BookOpenText } from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import CoranList from "@/components/CoranList";

import { getSourates } from "@/services/quranService";

export default async function CoranPage() {
  const sourates = await getSourates();

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
        {/* Motifs décoratifs */}

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

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          {/* Icône */}

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
            <BookOpenText
              size={29}
              strokeWidth={1.45}
              className="text-[#8d6b35]"
            />
          </div>

          {/* Titre */}

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
            Le Noble Coran
          </h1>

          {/* Ligne décorative */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a96e]/30" />

            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rotate-45
                bg-[#c9a96e]
              "
            />

            <span className="h-px w-10 bg-[#c9a96e]/30" />
          </div>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-base
              leading-7
              text-gray-600
              md:text-lg
              md:leading-8
            "
          >
            Les 114 sourates du Livre d&apos;Allah ﷻ,
            <br className="hidden md:block" />
            accessibles dans une lecture simple et élégante.
          </p>
        </div>
      </section>

      {/* Liste des sourates */}

      <section className="py-14 md:py-16">
        <CoranList sourates={sourates} />
      </section>

      <Footer />
    </main>
  );
}