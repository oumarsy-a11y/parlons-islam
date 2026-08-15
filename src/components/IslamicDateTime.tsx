"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const arabicDigits = (value: string | number) =>
  String(value).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);

const days = [
  {
    arabic: "الأحد",
    phonetic: "Al-Aḥad",
    french: "Dimanche",
  },
  {
    arabic: "الإثنين",
    phonetic: "Al-Ithnayn",
    french: "Lundi",
  },
  {
    arabic: "الثلاثاء",
    phonetic: "Ath-Thulāthāʾ",
    french: "Mardi",
  },
  {
    arabic: "الأربعاء",
    phonetic: "Al-Arbiʿāʾ",
    french: "Mercredi",
  },
  {
    arabic: "الخميس",
    phonetic: "Al-Khamīs",
    french: "Jeudi",
  },
  {
    arabic: "الجمعة",
    phonetic: "Al-Jumuʿah",
    french: "Vendredi",
  },
  {
    arabic: "السبت",
    phonetic: "As-Sabt",
    french: "Samedi",
  },
];

const gregorianMonths = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const hijriMonths = [
  "Muḥarram",
  "Ṣafar",
  "Rabīʿ al-Awwal",
  "Rabīʿ ath-Thānī",
  "Jumādā al-Awwal",
  "Jumādā ath-Thāniyah",
  "Rajab",
  "Shaʿbān",
  "Ramaḍān",
  "Shawwāl",
  "Dhū al-Qaʿdah",
  "Dhū al-Ḥijjah",
];

const hijriMonthsArabic = [
  "مُحَرَّم",
  "صَفَر",
  "رَبِيع الأَوَّل",
  "رَبِيع الثَّانِي",
  "جُمَادَى الأُولَى",
  "جُمَادَى الثَّانِيَة",
  "رَجَب",
  "شَعْبَان",
  "رَمَضَان",
  "شَوَّال",
  "ذُو القَعْدَة",
  "ذُو الحِجَّة",
];

function getHijriDate(date: Date) {
  try {
    const formatter = new Intl.DateTimeFormat("en-TN-u-ca-islamic-umalqura", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    const parts = formatter.formatToParts(date);

    const day = Number(parts.find((p) => p.type === "day")?.value ?? 1);
    const month = Number(
      parts.find((p) => p.type === "month")?.value ?? 1,
    );
    const year = Number(
      parts.find((p) => p.type === "year")?.value ?? 1447,
    );

    return {
      day,
      month,
      year,
    };
  } catch {
    return {
      day: 1,
      month: 1,
      year: 1447,
    };
  }
}

export default function IslamicDateTime() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setDate(new Date());

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!date) {
    return (
      <div className="h-48 w-full animate-pulse rounded-[2rem] bg-[#263d35]/5" />
    );
  }

  const day = days[date.getDay()];
  const hijri = getHijriDate(date);

  const gregorianDay = date.getDate();
  const gregorianMonth = gregorianMonths[date.getMonth()];
  const gregorianYear = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const hijriMonthIndex = Math.max(0, Math.min(11, hijri.month - 1));

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-6 sm:py-14"
    >
      <div className="overflow-hidden rounded-[2rem] border border-[#d9cfb8] bg-[#fbfaf6] shadow-sm">

        <div className="grid md:grid-cols-[1fr_auto_1fr] md:items-center">

          {/* JOUR */}
          <div className="px-6 py-8 text-center sm:px-10 md:py-10">
            <p className="text-3xl font-semibold text-[#263d35] sm:text-4xl">
              {day.arabic}
            </p>

            <p className="mt-2 text-sm font-medium text-[#9b8150]">
              {day.phonetic}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {day.french}
            </p>
          </div>

          <div className="hidden h-20 w-px bg-[#ded4bd] md:block" />

          {/* DATE */}
          <div className="border-t border-[#ded4bd] px-6 py-8 text-center sm:px-10 md:border-t-0 md:py-10">

            <p className="text-2xl font-semibold text-[#263d35] sm:text-3xl">
              {arabicDigits(gregorianDay)} {gregorianMonth}{" "}
              {arabicDigits(gregorianYear)}
            </p>

            <div className="mx-auto mt-4 h-px w-12 bg-[#c6a967]" />

            <p
              dir="rtl"
              className="mt-4 text-xl text-[#806a42] sm:text-2xl"
            >
              {arabicDigits(hijri.day)}{" "}
              {hijriMonthsArabic[hijriMonthIndex]}{" "}
              {arabicDigits(hijri.year)}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {arabicDigits(hijri.day)} {hijriMonths[hijriMonthIndex]}{" "}
              {arabicDigits(hijri.year)}
            </p>

          </div>

        </div>

        {/* HORLOGE */}
        <div className="border-t border-[#ded4bd] bg-[#263d35] px-6 py-6 text-center">

          <p
            dir="ltr"
            className="font-mono text-4xl font-light tracking-[0.15em] text-[#e1c986] sm:text-5xl"
          >
            {arabicDigits(hours)}:{arabicDigits(minutes)}:
            {arabicDigits(seconds)}
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/50">
            Heure locale
          </p>

        </div>

      </div>
    </motion.section>
  );
}
