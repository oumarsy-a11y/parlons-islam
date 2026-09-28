"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const arabicDigits = (value: string | number) =>
  String(value).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);

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
      <div className="mx-auto h-[430px] w-full max-w-5xl animate-pulse rounded-[2rem] bg-[#263d35]/5" />
    );
  }

  const day = days[date.getDay()];
  const hijri = getHijriDate(date);

  const gregorianDay = date.getDate();
  const gregorianMonth = gregorianMonths[date.getMonth()];
  const gregorianYear = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  const hijriMonthIndex = Math.max(
    0,
    Math.min(11, hijri.month - 1)
  );

  /*
   * Rotation des aiguilles.
   *
   * L'aiguille des heures tient compte des minutes
   * pour éviter un déplacement brutal d'une heure à l'autre.
   */
  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-6 sm:py-14"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-[#d9cfb8] bg-[#fbfaf6] shadow-[0_15px_50px_rgba(38,61,53,0.06)]">

        {/* Motif décoratif */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#d9cfb8]/50" />
        <div className="pointer-events-none absolute -left-28 bottom-[-140px] h-72 w-72 rounded-full border border-[#d9cfb8]/40" />

        <div className="relative grid md:grid-cols-[1fr_1.15fr_1fr] md:items-center">

          {/* JOUR */}
          <div className="px-6 py-10 text-center sm:px-10 md:py-14">
            <p
              dir="rtl"
              lang="ar"
              className="text-4xl font-medium tracking-wide text-[#263d35] sm:text-5xl"
            >
              {day.arabic}
            </p>

            <p className="mt-3 text-sm font-medium tracking-wide text-[#9b8150]">
              {day.phonetic}
            </p>

            <div className="mx-auto mt-5 h-px w-10 bg-[#c6a967]" />

            <p className="mt-4 text-sm text-[#68746e]">
              {day.french}
            </p>
          </div>

          {/* SÉPARATEUR DESKTOP */}
          <div className="hidden h-48 w-px bg-[#ded4bd] md:block" />

          {/* DATES */}
          <div className="border-t border-[#ded4bd] px-6 py-10 text-center sm:px-10 md:border-t-0 md:py-14">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a8659]">
              Calendrier
            </p>

            <p className="mt-4 text-2xl font-semibold tracking-tight text-[#263d35] sm:text-3xl">
              {gregorianDay} {gregorianMonth}
            </p>

            <p className="mt-1 text-sm text-[#7a847f]">
              {gregorianYear}
            </p>

            <div className="mx-auto my-5 h-px w-12 bg-[#c6a967]" />

            <p
              dir="rtl"
              lang="ar"
              className="text-xl text-[#806a42] sm:text-2xl"
            >
              {arabicDigits(hijri.day)}{" "}
              {hijriMonthsArabic[hijriMonthIndex]}{" "}
              {arabicDigits(hijri.year)}
            </p>

            <p className="mt-2 text-sm text-[#7a847f]">
              {hijri.day} {hijriMonths[hijriMonthIndex]} {hijri.year}
            </p>
          </div>
        </div>

        {/* HORLOGE */}
        <div className="relative border-t border-[#ded4bd] bg-[#263d35] px-6 py-10 sm:py-12">

          <div className="flex flex-col items-center">

            {/* Cadran */}
            <div className="relative h-52 w-52 rounded-full border border-[#c6a967]/40 bg-[#223830] shadow-[0_15px_45px_rgba(0,0,0,0.18)] sm:h-60 sm:w-60">

              {/* Cercle intérieur */}
              <div className="absolute inset-3 rounded-full border border-white/10" />

              {/* Repères */}
              <div className="absolute inset-0">

                <span className="absolute left-1/2 top-4 -translate-x-1/2 text-sm text-[#e1c986]">
                  ١٢
                </span>

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#e1c986]">
                  ٣
                </span>

                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-[#e1c986]">
                  ٦
                </span>

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#e1c986]">
                  ٩
                </span>

              </div>

              {/* Aiguille des heures */}
              <div
                className="absolute left-1/2 top-1/2 h-[28%] w-[3px] origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-[#f4ead0]"
                style={{
                  transform: `translateX(-50%) translateY(-100%) rotate(${hourAngle}deg)`,
                }}
              />

              {/* Aiguille des minutes */}
              <div
                className="absolute left-1/2 top-1/2 h-[36%] w-[2px] origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-[#e1c986]"
                style={{
                  transform: `translateX(-50%) translateY(-100%) rotate(${minuteAngle}deg)`,
                }}
              />

              {/* Aiguille des secondes */}
              <div
                className="absolute left-1/2 top-1/2 h-[40%] w-px origin-bottom -translate-x-1/2 -translate-y-full bg-[#c9a96e]"
                style={{
                  transform: `translateX(-50%) translateY(-100%) rotate(${secondAngle}deg)`,
                }}
              />

              {/* Centre */}
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#263d35] bg-[#e1c986]" />

            </div>

            {/* Heure numérique */}
            <p
              dir="ltr"
              className="mt-7 font-mono text-3xl font-light tracking-[0.18em] text-[#e1c986] sm:text-4xl"
            >
              {arabicDigits(formattedHours)}:
              {arabicDigits(formattedMinutes)}:
              {arabicDigits(formattedSeconds)}
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
              Heure locale
            </p>

          </div>
        </div>

      </div>
    </motion.section>
  );
}