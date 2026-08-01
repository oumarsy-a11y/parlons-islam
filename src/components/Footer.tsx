"use client";

import { motion } from "framer-motion";
import { Moon, BookOpen, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-950 py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-3"
        >

          <div>
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Moon className="text-yellow-300" />
              Parlons Islam
            </div>

            <p className="leading-relaxed text-green-100">
              Une plateforme dédiée au savoir islamique, au Coran,
              à la Sunna, au fiqh malikite, au taṣawwuf et à la
              Tarîqa Tijāniyya.
            </p>
          </div>


          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Explorer
            </h3>

            <ul className="space-y-2 text-green-100">
              <li>Coran</li>
              <li>Hadiths</li>
              <li>Fiqh Malikite</li>
              <li>Taṣawwuf</li>
              <li>Tijāniyya</li>
            </ul>
          </div>


          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Notre vision
            </h3>

            <p className="text-green-100">
              Transmettre un savoir bénéfique et accompagner
              les cœurs vers la connaissance et la proximité
              avec Allah.
            </p>

            <div className="mt-5 flex items-center gap-3 text-yellow-300">
              <BookOpen size={22} />
              <Heart size={22} />
            </div>
          </div>

        </motion.div>


        <div className="mt-10 border-t border-green-800 pt-6 text-center text-sm text-green-200">
          © {new Date().getFullYear()} Parlons Islam — Tous droits réservés
        </div>

      </div>
    </footer>
  );
}