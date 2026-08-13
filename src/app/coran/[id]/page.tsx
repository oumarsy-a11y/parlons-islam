import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import QuranPlayer from "@/components/QuranPlayer";

import {
  getSourate,
  getSourateWithTranslation,
} from "@/services/quranService";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CoranPage({
  params,
}: PageProps) {
  const { id } = await params;
  const sourateId = Number(id);

  const sourate = await getSourate(sourateId);
  const translation = await getSourateWithTranslation(sourateId);

  if (!sourate) {
    return (
      <main className="min-h-screen bg-white">
        <Menu />

        <section className="px-6 py-24 text-center">
          <BookOpenText
            size={60}
            className="mx-auto text-green-900"
          />

          <h1 className="mt-6 text-3xl font-bold text-green-900">
            Sourate introuvable
          </h1>

          <Link
            href="/coran"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-green-900
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-green-800
            "
          >
            <ArrowLeft size={18} />
            Retour au Coran
          </Link>
        </section>

        <Footer />
      </main>
    );
  }

  const previousSurah =
    sourateId > 1 ? sourateId - 1 : null;

  const nextSurah =
    sourateId < 114 ? sourateId + 1 : null;

  return (
    <main className="min-h-screen bg-white">
      <Menu />

      {/* En-tête */}

      <section
        className="
          bg-gradient-to-b
          from-green-50
          via-green-50
          to-white
          px-6
          py-16
        "
      >
        <div className="mx-auto max-w-4xl text-center">

          <Link
            href="/coran"
            className="
              mb-10
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-200
              bg-white
              px-5
              py-2
              text-sm
              font-medium
              text-green-900
              shadow-sm
              transition
              hover:bg-green-50
            "
          >
            <ArrowLeft size={17} />
            Toutes les sourates
          </Link>

          <BookOpenText
            size={58}
            className="mx-auto text-green-900"
          />

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              text-green-900
              md:text-5xl
            "
          >
            {sourate.name}
          </h1>

          <p className="mt-3 text-xl text-gray-600">
            {sourate.englishName}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <span
              className="
                rounded-full
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-green-800
                shadow-sm
              "
            >
              {sourate.numberOfAyahs} versets
            </span>

            <span
              className="
                rounded-full
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-gray-600
                shadow-sm
              "
            >
              {sourate.revelationType}
            </span>

            <span
              className="
                rounded-full
                bg-green-900
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                shadow-sm
              "
            >
              Hafs 'an 'Asim
            </span>

          </div>
        </div>
      </section>

      {/* Lecteur */}

      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <QuranPlayer surahNumber={sourateId} />
        </div>
      </section>

      {/* Lecture */}

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-6">

          {sourate.ayahs.map(
            (ayah: any, index: number) => {
              const translated =
                translation?.ayahs[index];

              return (
                <article
                  key={ayah.number}
                  className="
                    rounded-3xl
                    border
                    border-green-100
                    bg-white
                    p-6
                    shadow-sm
                    transition
                    hover:shadow-md
                    md:p-8
                  "
                >

                  <div className="flex items-center justify-between">

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-green-900
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      {ayah.numberInSurah}
                    </span>

                    <span
                      className="
                        text-sm
                        text-gray-400
                      "
                    >
                      Verset {ayah.numberInSurah}
                    </span>

                  </div>

                  <p
                    dir="rtl"
                    lang="ar"
                    className="
                      mt-8
                      text-right
                      text-3xl
                      leading-[2.4]
                      text-green-950
                      md:text-4xl
                    "
                  >
                    {ayah.text}
                  </p>

                  {translated?.text && (
                    <div
                      className="
                        mt-8
                        border-t
                        border-green-50
                        pt-6
                      "
                    >
                      <p
                        className="
                          text-lg
                          leading-8
                          text-gray-700
                        "
                      >
                        {translated.text}
                      </p>
                    </div>
                  )}

                </article>
              );
            }
          )}

        </div>
      </section>

      {/* Navigation */}

      <section className="px-6 pb-16">
        <div
          className="
            mx-auto
            grid
            max-w-4xl
            gap-4
            sm:grid-cols-3
          "
        >

          {previousSurah ? (
            <Link
              href={`/coran/${previousSurah}`}
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-green-100
                bg-white
                p-5
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <ChevronLeft
                size={22}
                className="text-green-900"
              />

              <div>
                <p className="text-xs text-gray-500">
                  Précédente
                </p>
                <p className="font-semibold text-green-900">
                  Sourate {previousSurah}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/coran"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-green-900
              p-5
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-green-800
            "
          >
            <BookOpenText size={21} />
            Index du Coran
          </Link>

          {nextSurah ? (
            <Link
              href={`/coran/${nextSurah}`}
              className="
                flex
                items-center
                justify-end
                gap-3
                rounded-2xl
                border
                border-green-100
                bg-white
                p-5
                text-right
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <div>
                <p className="text-xs text-gray-500">
                  Suivante
                </p>
                <p className="font-semibold text-green-900">
                  Sourate {nextSurah}
                </p>
              </div>

              <ChevronRight
                size={22}
                className="text-green-900"
              />
            </Link>
          ) : (
            <div />
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
