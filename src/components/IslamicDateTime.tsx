"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const days = [
  { arabic: "الأحد", phonetic: "Al-Aḥad", french: "Dimanche" },
  { arabic: "الإثنين", phonetic: "Al-Ithnayn", french: "Lundi" },
  { arabic: "الثلاثاء", phonetic: "Ath-Thulāthāʾ", french: "Mardi" },
  { arabic: "الأربعاء", phonetic: "Al-Arbiʿāʾ", french: "Mercredi" },
  { arabic: "الخميس", phonetic: "Al-Khamīs", french: "Jeudi" },
  { arabic: "الجمعة", phonetic: "Al-Jumuʿah", french: "Vendredi" },
  { arabic: "السبت", phonetic: "As-Sabt", french: "Samedi" },
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

const arabicDigits = (value: string | number) =>
  String(value).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);

function getHijriDate(date: Date) {
  try {
    const formatter = new Intl.DateTimeFormat(
      "en-TN-u-ca-islamic-umalqura",
      {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }
    );

    const parts = formatter.formatToParts(date);

    const day = Number(
      parts.find((part) => part.type === "day")?.value ?? 1
    );

    const month = Number(
      parts.find((part) => part.type === "month")?.value ?? 1
    );

    const year = Number(
      parts.find((part) => part.type === "year")?.value ?? 1447
    );

    return { day, month, year };
  } catch {
    return { day: 1, month: 1, year: 1447 };
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
      <div className="mx-auto h-64 w-full max-w-5xl animate-pulse rounded-[2rem] bg-[#263d35]/5" />
    );
  }

  const day = days[date.getDay()];
  const hijri = getHijriDate(date);

  const gregorianDay = date.getDate();
  const gregorianMonth = gregorianMonths[date.getMonth()];
  const gregorianYear = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const hijriMonthIndex = Math.max(
    0,
    Math.min(11, hijri.month - 1)
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-6 sm:py-14"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-[#d9cfb8] bg-[#fbfaf6]">
        {/* MOTIF DÉCORATIF DISCRET */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#c6a967]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full border border-[#c6a967]/15"
        />

        {/* CONTENU */}
        <div className="relative px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14">
          {/* JOUR */}
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              dir="rtl"
              className="text-4xl font-medium tracking-wide text-[#263d35] sm:text-5xl"
            >
              {day.arabic}
            </motion.p>

            <p className="mt-3 text-sm font-medium tracking-[0.12em] text-[#9b8150]">
              {day.phonetic}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {day.french}
            </p>
          </div>

          {/* SÉPARATEUR */}
          <div className="mx-auto my-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d9cfb8]" />

            <span className="h-1.5 w-1.5 rotate-45 bg-[#c6a967]" />

            <span className="h-px w-12 bg-[#d9cfb8]" />
          </div>

          {/* HORLOGE */}
          <div className="text-center">
            <motion.p
              key={`${hours}:${minutes}`}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              dir="ltr"
              className="font-mono text-5xl font-light tracking-[0.12em] text-[#263d35] sm:text-6xl md:text-7xl"
            >
              {hours}:{minutes}
            </motion.p>

            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#9b8150]">
              Heure locale
            </p>
          </div>

          {/* DATES */}
          <div className="mt-10 grid gap-7 border-t border-[#ded4bd] pt-8 md:grid-cols-2 md:gap-0">
            {/* GRÉGORIEN */}
            <div className="text-center md:border-r md:border-[#ded4bd] md:pr-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
                Calendrier grégorien
              </p>

              <p className="mt-3 text-xl font-medium text-[#263d35] sm:text-2xl">
                {gregorianDay} {gregorianMonth} {gregorianYear}
              </p>
            </div>

            {/* HIJRI */}
            <div className="text-center md:pl-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
                Calendrier islamique
              </p>

              <p
                dir="rtl"
                className="mt-3 text-xl text-[#806a42] sm:text-2xl"
              >
                {arabicDigits(hijri.day)}{" "}
                {hijriMonthsArabic[hijriMonthIndex]}{" "}
                {arabicDigits(hijri.year)}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {hijri.day} {hijriMonths[hijriMonthIndex]} {hijri.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}