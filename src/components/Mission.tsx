"use client";

import { motion } from "framer-motion";
import { Compass, HeartHandshake, BookOpenText } from "lucide-react";

export default function Mission() {
  const values = [
    {
      icon: BookOpenText,
      title: "Transmettre le savoir",
      description:
        "Partager un enseignement bénéfique fondé sur le Coran, la Sunna et l'héritage des savants.",
    },
    {
      icon: HeartHandshake,
      title: "Éduquer les cœurs",
      description:
        "Cultiver une spiritualité sincère à travers la purification de l'âme, le bon comportement et la proximité avec Allah.",
    },
    {
      icon: Compass,
      title: "Orienter avec sagesse",
      description:
        "Donner des repères clairs pour cheminer avec équilibre, connaissance et miséricorde.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-24">

      <div className="mx-auto max-w-6xl px-6">

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-green-900 md:text-5xl"
        >
          Notre mission
        </motion.h2>


        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-600"
        >
          Parlons Islam est une plateforme dédiée à la transmission d'un
          savoir bénéfique, à l'approfondissement de la foi et à l'éducation
          spirituelle, dans le respect du Coran, de la Sunna et de l'héritage
          des savants.
        </motion.p>


        {/* Valeurs */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {values.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="
                  rounded-3xl
                  border border-green-100
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  hover:shadow-xl
                "
              >

                {/* Icône */}
                <div className="
                  mb-6 flex h-16 w-16
                  items-center justify-center
                  rounded-full
                  bg-green-50
                ">
                  <Icon
                    size={36}
                    className="text-green-900"
                  />
                </div>


                <h3 className="
                  mb-3
                  text-2xl
                  font-bold
                  text-green-900
                ">
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