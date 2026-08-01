"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function DailyQuote() {
  return (
    <section className="bg-green-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Quote className="mx-auto mb-6 text-yellow-300" size={45} />

          <p className="text-2xl italic leading-relaxed">
            « Certes, c'est par l'évocation d'Allah que les cœurs se tranquillisent. »
          </p>

          <p className="mt-5 text-lg text-green-100">
            — Sourate Ar-Ra'd, verset 28
          </p>
        </motion.div>

      </div>
    </section>
  );
}