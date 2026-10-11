import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Scale } from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { fiqh } from "@/data/fiqh";

const sections = {
  tahara: {
    title: "Purification (Ṭahāra)",
    description:
      "Les règles relatives aux ablutions, au ghusl, au tayammum et à la purification.",
    content:
      "La purification occupe une place essentielle dans la pratique musulmane. Cette rubrique est destinée à présenter progressivement les règles de purification selon l'école malikite, en distinguant les conditions, les obligations et les situations particulières.",
  },
  salat: {
    title: "La Prière (Ṣalāt)",
    description:
      "Les conditions, piliers, obligations et recommandations de la prière.",
    content:
      "La prière est un pilier majeur de l'Islam. Cette rubrique abordera ses conditions de validité, ses obligations et ses modalités selon l'école malikite.",
  },
  siyam: {
    title: "Le Jeûne (Ṣiyām)",
    description:
      "Les règles du jeûne de Ramadan et des jeûnes surérogatoires.",
    content:
      "Cette rubrique est consacrée aux règles du jeûne, notamment celles du Ramadan, à ses conditions, aux actes qui l'invalident et aux situations particulières.",
  },
  zakat: {
    title: "La Zakāt",
    description:
      "Les règles de la zakāt, ses bénéficiaires et ses conditions.",
    content:
      "La zakāt est une obligation financière en Islam. Cette rubrique présentera ses conditions, les biens concernés et les catégories de bénéficiaires, selon les références de l'école malikite.",
  },
  hajj: {
    title: "Le Pèlerinage (Ḥajj)",
    description:
      "Les rites du Hajj et de la ʿUmra selon l'école malikite.",
    content:
      "Le pèlerinage comporte des règles et des rites précis. Cette rubrique présentera progressivement les conditions du Hajj et de la ʿUmra ainsi que leurs principales étapes.",
  },
  famille: {
    title: "Mariage et famille",
    description:
      "Mariage, divorce, droits des époux et éducation familiale.",
    content:
      "Cette rubrique abordera les questions liées au mariage et à la vie familiale à partir de références juridiques fiables, en tenant compte des sujets qui demandent une consultation qualifiée.",
  },
  transactions: {
    title: "Les transactions",
    description:
      "Commerce, contrats, ventes et éthique financière.",
    content:
      "Les transactions en Islam sont encadrées par des principes de justice, de consentement et d'honnêteté. Cette rubrique présentera les notions essentielles du commerce et des contrats selon le fiqh malikite.",
  },
  bibliotheque: {
    title: "Bibliothèque malikite",
    description:
      "Les grands ouvrages de référence de l'école malikite.",
    content:
      "Cette bibliothèque a vocation à présenter les ouvrages majeurs de l'école malikite, leurs auteurs et leur place dans la transmission du droit musulman. Les références précises seront indiquées au fil de leur vérification.",
  },
} as const;

type SectionId = keyof typeof sections;

type PageProps = {
  params: Promise<{ id: string }>;
};

function getSection(id: string) {
  return Object.prototype.hasOwnProperty.call(sections, id)
    ? sections[id as SectionId]
    : null;
}

export async function generateStaticParams() {
  return Object.keys(sections).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const section = getSection(id);

  if (!section) {
    return {
      title: "Rubrique introuvable | Fiqh malikite",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${section.title} | Fiqh malikite`,
    description: section.description,
    alternates: {
      canonical: `/fiqh-malikite/${id}`,
    },
  };
}

export default async function FiqhMalikiteDetailPage({
  params,
}: PageProps) {
  const { id } = await params;
  const section = getSection(id);

  if (!section) {
    notFound();
  }

  const relatedArticles =
    id === "tahara"
      ? fiqh.filter((article) => article.id === 1)
      : id === "salat"
        ? fiqh.filter((article) => article.id === 2)
        : id === "siyam"
          ? fiqh.filter((article) => article.id === 3)
          : id === "zakat"
            ? fiqh.filter((article) => article.id === 4)
            : [];

  return (
    <main className="min-h-screen bg-[#fcfaf5]">
      <Menu />

      <section className="border-b border-[#c9a96e]/10 bg-[#f8f5ec]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <Link
            href="/fiqh-malikite"
            className="inline-flex items-center gap-2 text-sm text-[#8d6b35] transition hover:text-green-900"
          >
            <ArrowLeft size={16} />
            Retour au fiqh malikite
          </Link>

          <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a96e]/30 bg-white/70">
            <Scale size={26} strokeWidth={1.4} className="text-[#8d6b35]" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6b35]">
            Fiqh malikite
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-green-950 md:text-5xl">
            {section.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            {section.description}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <article className="rounded-3xl border border-[#c9a96e]/15 bg-white p-6 shadow-sm md:p-10">
            <div className="flex items-center gap-3">
              <BookOpen size={22} className="text-[#8d6b35]" />
              <h2 className="text-xl font-semibold text-green-950">
                Présentation de la rubrique
              </h2>
            </div>

            <p className="mt-5 leading-8 text-gray-700">
              {section.content}
            </p>

            {relatedArticles.length > 0 && (
              <div className="mt-8 border-t border-[#c9a96e]/15 pt-6">
                <h2 className="text-lg font-semibold text-green-950">
                  Article associé
                </h2>

                {relatedArticles.map((article) => (
                  <div key={article.id} className="mt-4">
                    <h3 className="font-medium text-green-900">
                      {article.title}
                    </h3>
                    <p className="mt-2 leading-7 text-gray-600">
                      {article.content}
                    </p>
                    <p className="mt-3 text-xs text-gray-500">
                      Référence indiquée dans les données du site :{" "}
                      {article.source}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <p className="mt-8 border-t border-[#c9a96e]/15 pt-5 text-sm leading-6 text-gray-500">
              Les contenus détaillés seront enrichis progressivement à partir
              de références vérifiées de l'école malikite. Pour une situation
              personnelle complexe, adressez-vous à une personne qualifiée.
            </p>
          </article>

          <div className="mt-8">
            <Link
              href="/fiqh-malikite"
              className="inline-flex items-center gap-2 text-sm font-medium text-green-900 transition hover:text-[#8d6b35]"
            >
              <ArrowLeft size={16} />
              Explorer les autres matières
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
