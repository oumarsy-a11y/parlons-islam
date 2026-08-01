"use client";

import { motion } from "framer-motion";
import { Compass, HeartHandshake, BookOpen } from "lucide-react";

export default function Mission() {
  const values = [
    {
      icon: BookOpen,
      title: "Transmettre le savoir",
      description:
        "Partager un enseignement authentique fondé sur le Coran, la Sunna et la tradition des savants.",
    },
    {
      icon: HeartHandshake,
      title: "Éduquer les cœurs",
      description:
        "Favoriser une spiritualité sincère, fondée sur la purification de l'âme, le bon comportement et la proximité avec Allah.",
    },
    {
      icon: Compass,
      title: "Orienter avec sagesse",
      description:
        "Offrir des repères clairs pour vivre sa foi avec équilibre, connaissance et miséricorde.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-green-900"
        >
          Notre mission
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-600"
        >
          Parlons Islam est une plateforme dédiée à la transmission d'un savoir
          bénéfique, à l'approfondissement de la foi et à l'éveil spirituel,
          dans le respect du Coran, de la Sunna et de l'héritage des savants.
        </motion.p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-green-100 bg-green-50 p-8 shadow-sm"
              >
                <Icon size={42} className="mb-5 text-green-900" />

                <h3 className="mb-3 text-xl font-semibold text-green-900">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}