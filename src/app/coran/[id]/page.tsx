import Link from "next/link";
import { sourates } from "@/data/quran";
import { getSourate } from "@/lib/quran-api";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SouratePage({ params }: PageProps) {
  const { id } = await params;

  const idSourate = Number(id);

  const sourateInfo = sourates.find(
    (sourate) => sourate.id === idSourate
  );

  if (!sourateInfo) {
    return (
      <main className="min-h-screen bg-green-50 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-green-900">
          Sourate introuvable
        </h1>
      </main>
    );
  }

  const sourate = await getSourate(idSourate);


  return (
    <main className="min-h-screen bg-green-50">

      {/* En-tête */}
      <section className="bg-green-900 py-16 text-center text-white">

        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-5xl font-bold">
            {sourateInfo.name}
          </h1>

          <p className="mt-5 text-4xl">
            {sourateInfo.arabicName}
          </p>

          <p className="mt-4 text-green-100">
            Sourate {sourateInfo.id} • {sourateInfo.verses} versets • {sourateInfo.revelation}
          </p>

        </div>

      </section>



      {/* Versets */}
      <section className="py-12">

        <div className="mx-auto max-w-4xl px-6">

          <div className="rounded-3xl bg-white p-8 shadow-xl">


            {sourate.ayahs.map((ayah: any) => (

              <div
                key={ayah.numberInSurah}
                className="mb-10 border-b pb-8 last:border-none"
              >

                <p className="text-right text-3xl leading-[2.5] text-green-900">
                  {ayah.text}
                </p>


                <div className="mt-5 flex justify-start">

                  <span className="rounded-full bg-green-900 px-4 py-2 text-sm text-white">
                    {ayah.numberInSurah}
                  </span>

                </div>


              </div>

            ))}


          </div>

        </div>

      </section>



      {/* Retour */}
      <div className="pb-12 text-center">

        <Link
          href="/coran"
          className="rounded-full bg-green-900 px-8 py-3 text-white hover:bg-green-800"
        >
          ← Retour aux sourates
        </Link>

      </div>


    </main>
  );
}