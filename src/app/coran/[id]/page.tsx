import Link from "next/link";
import {
  BookOpenText,
  ArrowLeft,
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

  const translation =
    await getSourateWithTranslation(sourateId);



  if (!sourate) {
    return (
      <main className="min-h-screen bg-white">

        <Menu />

        <section className="py-20 text-center">

          <h1 className="text-3xl font-bold text-green-900">
            Sourate introuvable
          </h1>


          <Link
            href="/coran"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-green-700
              underline
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



  return (
    <main className="min-h-screen bg-white">

      <Menu />


      {/* En-tête */}

      <section
        className="
          bg-gradient-to-b
          from-green-50
          to-white
          py-16
        "
      >

        <div
          className="
            mx-auto
            max-w-4xl
            px-6
            text-center
          "
        >

          <BookOpenText
            size={60}
            className="mx-auto text-green-900"
          />


          <h1
            className="
              mt-6
              text-5xl
              font-bold
              text-green-900
            "
          >
            {sourate.name}
          </h1>


          <p className="mt-4 text-gray-600">
            {sourate.numberOfAyahs} versets • {sourate.revelationType}
          </p>


        </div>

      </section>



      {/* Lecteur audio */}

      <section className="py-8">

        <div
          className="
            mx-auto
            max-w-4xl
            px-6
          "
        >

          <QuranPlayer
            surahNumber={sourateId}
          />

        </div>

      </section>



      {/* Versets */}

      <section className="pb-16">

        <div
          className="
            mx-auto
            max-w-4xl
            space-y-6
            px-6
          "
        >

          {sourate.ayahs.map(
            (ayah: any, index: number) => {

              const translated =
                translation?.ayahs[index];


              return (

                <div
                  key={ayah.number}
                  className="
                    rounded-3xl
                    border
                    border-green-100
                    bg-white
                    p-8
                    shadow-sm
                  "
                >

                  <div className="mb-5">

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-green-900
                        text-white
                      "
                    >
                      {ayah.numberInSurah}
                    </span>

                  </div>


                  <p
                    dir="rtl"
                    className="
                      text-right
                      text-4xl
                      leading-loose
                      text-green-900
                    "
                  >
                    {ayah.text}
                  </p>


                  <p
                    className="
                      mt-6
                      text-lg
                      leading-relaxed
                      text-gray-700
                    "
                  >
                    {translated?.text}
                  </p>


                </div>

              );

            }
          )}

        </div>

      </section>


      <Footer />

    </main>
  );
}