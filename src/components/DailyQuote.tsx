"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function DailyQuote() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-24">

      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            border border-yellow-200
            bg-white
            p-10
            text-center
            shadow-lg
          "
        >

          {/* Icône */}
          <div className="mb-6 flex justify-center">
            <div className="
              flex h-16 w-16
              items-center justify-center
              rounded-full
              bg-green-900
            ">
              <Quote
                size={35}
                className="text-yellow-300"
              />
            </div>
          </div>


          {/* Citation */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="
              text-2xl
              italic
              leading-relaxed
              text-green-900
              md:text-3xl
            "
          >
            « Certes, c'est par l'évocation d'Allah que les cœurs se tranquillisent. »
          </motion.p>


          {/* Référence */}
          <p className="
            mt-6
            text-lg
            font-medium
            text-yellow-700
          ">
            — Sourate Ar-Ra'd, verset 28
          </p>


        </motion.div>

      </div>

    </section>
  );
}