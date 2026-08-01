"use client";

import {
  BookOpen,
  ScrollText,
  Scale,
  Heart,
  Circle,
  Landmark,
  Library,
  PenLine,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    {
      title: "Coran",
      icon: BookOpen,
      description:
        "Lecture du Noble Coran en Warsh, traductions, transcription et tafsîr.",
    },
    {
      title: "Hadiths",
      icon: ScrollText,
      description:
        "Les paroles du Prophète ﷺ et les enseignements de la Sunna.",
    },
    {
      title: "Fiqh Malikite",
      icon: Scale,
      description:
        "L'apprentissage de la jurisprudence selon l'école de l'Imam Mâlik.",
    },
    {
      title: "Taṣawwuf",
      icon: Heart,
      description:
        "La purification de l'âme et le cheminement spirituel fondé sur le Coran et la Sunna.",
    },
    {
      title: "Tarîqa Tijāniyya",
      icon: Circle,
      description:
        "Histoire, enseignements et grandes figures de la voie tijāniyya.",
    },
    {
      title: "Histoire de l'Islam",
      icon: Landmark,
      description:
        "Des prophètes, compagnons et grandes figures de la civilisation islamique.",
    },
    {
      title: "Bibliothèque",
      icon: Library,
      description:
        "Livres, documents et ressources islamiques.",
    },
    {
      title: "Enseignements",
      icon: PenLine,
      description:
        "Articles, rappels et réflexions autour de la spiritualité islamique.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold text-green-900"
        >
          Explorer Parlons Islam
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl"
              >
                <Icon
                  size={35}
                  className="mb-4 text-green-900"
                />

                <h3 className="mb-3 text-xl font-semibold text-green-900">
                  {category.title}
                </h3>

                <p className="text-gray-600">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}