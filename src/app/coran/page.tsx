import Link from "next/link";
import { sourates } from "@/data/quran";

export default function CoranPage() {
  return (
    <main className="min-h-screen bg-green-50">

      <section className="bg-green-900 py-16 text-center text-white">
        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-5xl font-bold">
            Le Noble Coran
          </h1>

          <p className="mt-5 text-lg text-green-100">
            Les 114 sourates du Livre d'Allah ﷻ
          </p>

        </div>
      </section>


      <section className="py-12">

        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">

          {sourates.map((sourate) => (

            <Link
              key={sourate.id}
              href={`/coran/${sourate.id}`}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 text-white">
                  {sourate.id}
                </span>

                <span className="text-2xl text-green-900">
                  {sourate.arabicName}
                </span>

              </div>


              <h2 className="mt-5 text-xl font-bold text-green-900">
                {sourate.name}
              </h2>


              <p className="mt-2 text-gray-600">
                {sourate.verses} versets • {sourate.revelation}
              </p>


            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}