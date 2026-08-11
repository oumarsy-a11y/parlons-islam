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
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Purification (Ṭahāra)",
    description: "Les règles relatives aux ablutions, au ghusl, au tayammum et à la purification.",
    icon: Droplets,
    path: "/fiqh-malikite/tahara",
  },
  {
    title: "La Prière (Ṣalāt)",
    description: "Les conditions, piliers, obligations et recommandations de la prière.",
    icon: Scale,
    path: "/fiqh-malikite/salat",
  },
  {
    title: "Le Jeûne (Ṣiyām)",
    description: "Les règles du jeûne de Ramadan et des jeûnes surérogatoires.",
    icon: MoonStar,
    path: "/fiqh-malikite/siyam",
  },
  {
    title: "La Zakāt",
    description: "Les règles de la zakāt, ses bénéficiaires et ses conditions.",
    icon: HandCoins,
    path: "/fiqh-malikite/zakat",
  },
  {
    title: "Le Pèlerinage (Ḥajj)",
    description: "Les rites du Hajj et de la ʿUmra selon l'école malikite.",
    icon: Landmark,
    path: "/fiqh-malikite/hajj",
  },
  {
    title: "Mariage et famille",
    description: "Mariage, divorce, droits des époux et éducation familiale.",
    icon: Users,
    path: "/fiqh-malikite/famille",
  },
  {
    title: "Transactions",
    description: "Commerce, contrats, ventes et éthique financière.",
    icon: ShoppingBag,
    path: "/fiqh-malikite/transactions",
  },
  {
    title: "Bibliothèque Malikite",
    description: "Les grands ouvrages de référence de l'école malikite.",
    icon: BookOpen,
    path: "/fiqh-malikite/bibliotheque",
  },
];

export default function FiqhMalikitePage() {
  return (
    <main className="min-h-screen bg-white">
      <Menu />

      <section className="bg-gradient-to-b from-green-50 to-white py-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <Scale className="mx-auto text-green-900" size={60} />

          <h1 className="mt-6 text-5xl font-bold text-green-900">
            Fiqh Malikite
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            Découvrez les règles juridiques selon l'école de l'Imam Mālik ibn Anas, dans le respect du Coran et de la Sunna.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">

          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <Link
                key={section.title}
                href={section.path}
                className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon size={45} className="text-green-900" />

                <h2 className="mt-5 text-2xl font-bold text-green-900">
                  {section.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {section.description}
                </p>
              </Link>
            );
          })}

        </div>
      </section>

      <Footer />
    </main>
  );
}