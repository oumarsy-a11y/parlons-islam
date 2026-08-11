import { getSourate } from "@/services/quranService";

export default async function TestQuran() {

  const sourate = await getSourate(1);

  return (
    <main className="min-h-screen bg-green-50 p-10">

      <h1 className="text-4xl font-bold text-green-900">
        Test Coran
      </h1>

      <h2 className="mt-6 text-3xl">
        {sourate.name}
      </h2>

      <p className="mt-3 text-gray-600">
        Nombre de versets : {sourate.numberOfAyahs}
      </p>

      <div className="mt-8 space-y-6">

        {sourate.ayahs.slice(0, 3).map((ayah: any) => (

          <div
            key={ayah.number}
            className="rounded-xl bg-white p-5 shadow"
          >

            <p
              dir="rtl"
              className="text-right text-3xl text-green-900"
            >
              {ayah.text}
            </p>

          </div>

        ))}

      </div>

    </main>
  );
}