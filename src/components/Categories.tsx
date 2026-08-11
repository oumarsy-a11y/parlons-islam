"use client";

import {
  BookOpen,
  ScrollText,
  Scale,
  Heart,
  MoonStar,
  Landmark,
  LibraryBig,
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
        "La jurisprudence selon l'école de l'Imam Mâlik رضي الله عنه.",
    },
    {
      title: "Taṣawwuf",
      icon: Heart,
      description:
        "La purification du cœur et le cheminement spirituel fondé sur le Coran et la Sunna.",
    },
    {
      title: "Tarîqa Tijāniyya",
      icon: MoonStar,
      description:
        "Histoire, enseignements et grandes figures de la voie tijāniyya.",
    },
    {
      title: "Histoire de l'Islam",
      icon: Landmark,
      description:
        "Prophètes, compagnons, savants et grandes étapes de la civilisation islamique.",
    },
    {
      title: "Bibliothèque",
      icon: LibraryBig,
      description:
        "Livres, documents et ressources pour approfondir ses connaissances.",
    },
    {
      title: "Enseignements",
      icon: PenLine,
      description:
        "Articles, rappels et réflexions autour de la spiritualité islamique.",
    },
  ];

  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-6xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-4xl font-bold text-green-900"
        >
          Explorer Parlons Islam
        </motion.h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Découvrez les différentes dimensions du savoir islamique,
          de la révélation à la purification du cœur.
        </p>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category, index) => {

            const Icon = category.icon;

            return (

              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group rounded-3xl
                  border border-green-100
                  bg-white p-7
                  shadow-sm
                  transition-all
                  hover:shadow-xl
                "
              >

                <div className="
                  mb-5 flex h-14 w-14
                  items-center justify-center
                  rounded-full
                  bg-green-50
                  transition
                  group-hover:bg-yellow-50
                ">
                  <Icon
                    size={30}
                    className="text-green-900 transition group-hover:text-yellow-600"
                  />
                </div>


                <h3 className="
                  mb-3
                  text-xl
                  font-bold
                  text-green-900
                ">
                  {category.title}
                </h3>


                <p className="leading-relaxed text-gray-600">
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