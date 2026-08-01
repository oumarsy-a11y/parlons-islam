"use client";

import { BookOpen, Library } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 text-center">
      <div className="mx-auto max-w-4xl px-6">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-green-900"
        >
          Parlons Islam
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-2xl font-semibold text-gray-700"
        >
          Servir Allah en servant Ses créatures
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600"
        >
          Une plateforme dédiée au savoir islamique, au Coran, à la Sunna,
          au fiqh malikite, au taṣawwuf et à la Tarîqa Tijāniyya.
          Un espace de découverte, d'apprentissage et de transmission.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="flex items-center gap-2 rounded-full bg-green-900 px-8 py-3 text-white transition hover:bg-green-800">
            <BookOpen size={20} />
            Découvrir les enseignements
          </button>

          <button className="flex items-center gap-2 rounded-full border border-green-900 px-8 py-3 text-green-900 transition hover:bg-green-50">
            <Library size={20} />
            Explorer la bibliothèque
          </button>
        </motion.div>

      </div>
    </section>
  );
}