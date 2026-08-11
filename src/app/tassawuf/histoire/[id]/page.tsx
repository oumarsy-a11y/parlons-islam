import { notFound } from "next/navigation";
import Link from "next/link";

import { histoireTassawuf } from "@/data/histoireTassawuf";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function HistoireTassawufPage({
  params,
}: PageProps) {
  const { id } = await params;

  const chapitre = histoireTassawuf.find(
    (item) => item.id === id
  );

  if (!chapitre) {
    notFound();
  }

  return (
    <>
      <Menu />

      <main className="min-h-screen bg-white">
        <article className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/tassawuf/histoire"
            className="mb-8 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900"
          >
            ← Retour à l'histoire du Taṣawwuf
          </Link>

          <header className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Histoire du Taṣawwuf
            </p>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              {chapitre.title}
            </h1>

            {chapitre.subtitle && (
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {chapitre.subtitle}
              </p>
            )}
          </header>

          <div className="space-y-6">
            {chapitre.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-gray-700"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {chapitre.source && (
            <div className="mt-12 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
                Sources
              </h2>

              <p className="text-sm leading-6 text-gray-700">
                {chapitre.source}
              </p>
            </div>
          )}

          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link
              href="/tassawuf/histoire"
              className="inline-flex rounded-xl bg-emerald-700 px-5 py-3 font-medium text-white transition hover:bg-emerald-800"
            >
              Voir tous les chapitres
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}