"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpenText, Heart, MoonStar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-950 py-14 text-white">

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-3"
        >

          {/* Identité */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <Image
                src="/images/logo.png"
                alt="Parlons Islam"
                width={65}
                height={65}
              />

              <div>
                <h2 className="text-2xl font-bold">
                  Parlons Islam
                </h2>

                <p className="text-sm text-yellow-300">
                  Coran • Sunna • Taṣawwuf
                </p>
              </div>

            </div>


            <p className="leading-relaxed text-green-100">
              Une plateforme dédiée au savoir islamique,
              au Coran, à la Sunna, au fiqh malikite,
              au taṣawwuf et à la Tarîqa Tijāniyya.
            </p>

          </div>


          {/* Explorer */}
          <div>

            <h3 className="mb-5 text-xl font-semibold text-yellow-300">
              Explorer
            </h3>

            <ul className="space-y-3 text-green-100">

              <li className="transition hover:text-yellow-300">
                Coran
              </li>

              <li className="transition hover:text-yellow-300">
                Hadiths
              </li>

              <li className="transition hover:text-yellow-300">
                Fiqh Malikite
              </li>

              <li className="transition hover:text-yellow-300">
                Taṣawwuf
              </li>

              <li className="transition hover:text-yellow-300">
                Tijāniyya
              </li>

            </ul>

          </div>


          {/* Vision */}
          <div>

            <h3 className="mb-5 text-xl font-semibold text-yellow-300">
              Notre vision
            </h3>


            <p className="leading-relaxed text-green-100">
              Transmettre un savoir bénéfique et accompagner
              les cœurs vers la connaissance, la sagesse et
              la proximité avec Allah.
            </p>


            <div className="mt-6 flex gap-4 text-yellow-300">

              <MoonStar size={25} />
              <BookOpenText size={25} />
              <Heart size={25} />

            </div>

          </div>


        </motion.div>


        {/* Bas du footer */}
        <div className="
          mt-12
          border-t
          border-green-800
          pt-6
          text-center
          text-sm
          text-green-200
        ">
          © {new Date().getFullYear()} Parlons Islam — Tous droits réservés
        </div>


      </div>

    </footer>
  );
}