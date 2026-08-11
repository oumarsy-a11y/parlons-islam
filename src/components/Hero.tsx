"use client";

import Image from "next/image";
import { BookOpenText, LibraryBig } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50 to-white py-24 text-center">

      <div className="mx-auto max-w-5xl px-6">

        {/* Logo animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/images/logo.png"
            alt="Logo Parlons Islam"
            width={220}
            height={220}
            priority
          />
        </motion.div>


        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-wide text-green-900 md:text-6xl"
        >
          Parlons Islam
        </motion.h1>


        {/* Sous titre */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-5 text-xl font-medium text-yellow-700 md:text-2xl"
        >
          Coran • Sunna • Taṣawwuf
        </motion.h2>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600"
        >
          Une plateforme dédiée au savoir islamique, au Coran, aux hadiths,
          au fiqh malikite, au taṣawwuf et à la Tarîqa Tijāniyya.
          Un espace de découverte, d'apprentissage et de transmission.
        </motion.p>


        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >

          <button className="flex items-center gap-2 rounded-full bg-green-900 px-8 py-3 text-white shadow-lg transition hover:bg-green-800">
            <BookOpenText size={22} />
            Explorer le savoir
          </button>


          <button className="flex items-center gap-2 rounded-full border border-green-900 px-8 py-3 text-green-900 transition hover:bg-green-50">
            <LibraryBig size={22} />
            Entrer dans la bibliothèque
          </button>

        </motion.div>

      </div>

    </section>
  );
}