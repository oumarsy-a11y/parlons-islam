import Link from "next/link";
import { sourates } from "@/data/quran";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CoranPage({ params }: PageProps) {
  const { id } = await params;

  const sourate = sourates.find(
    (item) => item.id === Number(id)
  );

  if (!sourate) {
    return (
      <main className="min-h-screen bg-green-50 p-10">
        <h1 className="text-3xl font-bold text-green-900">
          Sourate introuvable
        </h1>

        <Link
          href="/coran"
          className="mt-5 inline-block text-green-700 underline"
        >
          Retour au Coran
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-green-50 p-8">

      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">

        <h1 className="text-center text-4xl font-bold text-green-900">
          {sourate.arabicName}
        </h1>

        <h2 className="mt-4 text-center text-2xl font-semibold">
          {sourate.name}
        </h2>

        <p className="mt-4 text-center text-gray-600">
          {sourate.verses} versets • {sourate.revelation}
        </p>

        <div className="mt-10">
          <p className="text-lg text-gray-700">
            La lecture complète de cette sourate sera intégrée
            avec la récitation Warsh, la traduction et les
            explications.
          </p>
        </div>

      </div>

    </main>
  );
}