import {
  BookOpen,
  Heart,
  Moon,
  Sparkles,
  ArrowRight,
  Search,
  ScrollText,
  Scale,
  Compass,
  BookMarked,
} from "lucide-react";

import Link from "next/link";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import IslamicDateTime from "@/components/IslamicDateTime";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfcfa] text-gray-900">
      <Menu />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative isolate overflow-hidden border-b border-[#ded7c7] bg-[#f8f6ef]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/zaouia.jpeg')" }}
        />

        <div className="absolute inset-0 bg-[#f8f6ef]/68" />

        <div className="absolute left-1/2 top-[-150px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#d8c99d]/30 blur-3xl sm:top-[-180px] sm:h-[420px] sm:w-[420px]" />

        <div className="absolute right-[-120px] top-20 h-72 w-72 rounded-full border border-[#c8b77f]/30" />

        <div className="absolute bottom-[-160px] left-[-100px] h-80 w-80 rounded-full border border-[#263d35]/15" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center sm:px-6 sm:py-24 md:py-32">
          <Reveal>
            <div className="mx-auto mb-6 flex w-fit max-w-full items-center gap-2 rounded-full border border-[#d8ccb0] bg-white/70 px-4 py-2 text-xs font-medium text-[#6f5c35] shadow-sm backdrop-blur-sm sm:mb-8 sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm">
              <Moon size={15} strokeWidth={1.5} />
              <span>Science · Spiritualité · Transmission</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-4xl font-semibold tracking-tight text-[#263d35] sm:text-5xl md:text-6xl lg:text-7xl">
              Parlons Islam
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mx-auto mt-5 flex items-center justify-center gap-3 sm:mt-7">
              <span className="h-px w-8 bg-[#c5ae73] sm:w-12" />
              <span className="text-sm text-[#a1874f] sm:text-base">✦</span>
              <span className="h-px w-8 bg-[#c5ae73] sm:w-12" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#4f5b56] sm:mt-7 sm:text-xl sm:leading-relaxed md:text-2xl">
              Une porte ouverte vers le Coran, la Sunna, le Fiqh malikite,
              le Taṣawwuf et l&apos;héritage de la Ṭarīqa Tijāniyya.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#69736f] sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
              Apprendre, comprendre et cheminer avec une approche fondée
              sur les sources de l&apos;Islam et la transmission du savoir.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="/coran"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#263d35] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#1c3029] hover:shadow-lg sm:w-auto sm:px-7 sm:py-4 sm:text-base"
              >
                <BookOpen size={19} strokeWidth={1.7} />
                Explorer le Coran
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/tassawuf"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#cfc4aa] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#344b42] shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:w-auto sm:px-7 sm:py-4 sm:text-base"
              >
                <Heart size={19} strokeWidth={1.7} />
                Découvrir le Taṣawwuf
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.38}>
            <p className="mt-9 text-[10px] font-medium uppercase tracking-[0.22em] text-[#9a8659] sm:mt-12 sm:text-xs sm:tracking-[0.3em]">
              العلم · العمل · الإحسان
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DATE & HEURE */}
      {/* ========================================================= */}

      <IslamicDateTime />

      {/* ========================================================= */}
      {/* RECHERCHE */}
      {/* ========================================================= */}

      <Reveal>
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 sm:h-14 sm:w-14">
              <Search size={22} />
            </div>

            <h2 className="mt-4 text-2xl font-bold text-emerald-950 sm:mt-5 sm:text-3xl md:text-4xl">
              Que recherchez-vous ?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Explorez les différentes ressources de Parlons Islam à travers
              une recherche simple.
            </p>

            <div className="mx-auto mt-6 max-w-3xl sm:mt-8">
              <SearchBar />
            </div>
          </div>
        </section>
      </Reveal>

      {/* ========================================================= */}
      {/* GRANDES SECTIONS */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#fcfcfa] py-16 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full border border-[#c5ae73]/10" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full border border-[#263d35]/10" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-7 bg-[#c5ae73] sm:w-10" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9a8659] sm:text-xs sm:tracking-[0.3em]">
                  Explorer
                </span>

                <span className="h-px w-7 bg-[#c5ae73] sm:w-10" />
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[#263d35] sm:text-4xl md:text-5xl">
                Les sciences de l&apos;Islam
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#69736f] sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
                Du Livre d&apos;Allah à la purification du cœur,
                explorez les différentes dimensions du savoir islamique.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

            {/* CORAN */}
            <Reveal delay={0.05}>
              <Link
                href="/coran"
                className="group relative block overflow-hidden rounded-[1.5rem] border border-[#ddd7c8] bg-white p-6 shadow-[0_8px_30px_rgba(38,61,53,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5ae73]/50 hover:shadow-[0_20px_45px_rgba(38,61,53,0.10)] sm:rounded-[2rem] sm:p-7"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#f8f6ef] transition-transform duration-500 group-hover:scale-125 sm:h-24 sm:w-24" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dfe9e4] bg-[#f1f6f3] text-[#263d35] transition-all duration-500 group-hover:border-[#c5ae73]/40 group-hover:bg-[#f8f6ef] group-hover:text-[#8d7544] sm:h-14 sm:w-14">
                    <BookOpen size={24} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-[#b4aa91]">
                    01
                  </span>
                </div>

                <div className="relative mt-6 sm:mt-7">
                  <div className="mb-3 h-px w-8 bg-[#c5ae73] transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-lg font-semibold text-[#263d35] sm:text-xl">
                    Coran
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#69736f]">
                    Lecture des sourates, traductions, récitations et découverte
                    du Livre d&apos;Allah.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#8d7544] sm:mt-6">
                    Explorer
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* HADITHS */}
            <Reveal delay={0.1}>
              <Link
                href="/hadiths"
                className="group relative block overflow-hidden rounded-[1.5rem] border border-[#ddd7c8] bg-white p-6 shadow-[0_8px_30px_rgba(38,61,53,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5ae73]/50 hover:shadow-[0_20px_45px_rgba(38,61,53,0.10)] sm:rounded-[2rem] sm:p-7"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#f8f6ef] transition-transform duration-500 group-hover:scale-125 sm:h-24 sm:w-24" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dfe9e4] bg-[#f1f6f3] text-[#263d35] transition-all duration-500 group-hover:border-[#c5ae73]/40 group-hover:bg-[#f8f6ef] group-hover:text-[#8d7544] sm:h-14 sm:w-14">
                    <ScrollText size={24} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-[#b4aa91]">
                    02
                  </span>
                </div>

                <div className="relative mt-6 sm:mt-7">
                  <div className="mb-3 h-px w-8 bg-[#c5ae73] transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-lg font-semibold text-[#263d35] sm:text-xl">
                    Hadiths
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#69736f]">
                    Les paroles et enseignements du Messager d&apos;Allah ﷺ,
                    organisés pour faciliter l&apos;étude.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#8d7544] sm:mt-6">
                    Explorer
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* FIQH */}
            <Reveal delay={0.15}>
              <Link
                href="/fiqh-malikite"
                className="group relative block overflow-hidden rounded-[1.5rem] border border-[#ddd7c8] bg-white p-6 shadow-[0_8px_30px_rgba(38,61,53,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5ae73]/50 hover:shadow-[0_20px_45px_rgba(38,61,53,0.10)] sm:rounded-[2rem] sm:p-7"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#f8f6ef] transition-transform duration-500 group-hover:scale-125 sm:h-24 sm:w-24" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dfe9e4] bg-[#f1f6f3] text-[#263d35] transition-all duration-500 group-hover:border-[#c5ae73]/40 group-hover:bg-[#f8f6ef] group-hover:text-[#8d7544] sm:h-14 sm:w-14">
                    <Scale size={24} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-[#b4aa91]">
                    03
                  </span>
                </div>

                <div className="relative mt-6 sm:mt-7">
                  <div className="mb-3 h-px w-8 bg-[#c5ae73] transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-lg font-semibold text-[#263d35] sm:text-xl">
                    Fiqh malikite
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#69736f]">
                    Découvrez les fondements et les règles du madhhab de
                    l&apos;Imam Mālik رحمه الله.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#8d7544] sm:mt-6">
                    Explorer
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* TASSAWUF */}
            <Reveal delay={0.2}>
              <Link
                href="/tassawuf"
                className="group relative block overflow-hidden rounded-[1.5rem] border border-[#ddd7c8] bg-white p-6 shadow-[0_8px_30px_rgba(38,61,53,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5ae73]/50 hover:shadow-[0_20px_45px_rgba(38,61,53,0.10)] sm:rounded-[2rem] sm:p-7"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#f8f6ef] transition-transform duration-500 group-hover:scale-125 sm:h-24 sm:w-24" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dfe9e4] bg-[#f1f6f3] text-[#263d35] transition-all duration-500 group-hover:border-[#c5ae73]/40 group-hover:bg-[#f8f6ef] group-hover:text-[#8d7544] sm:h-14 sm:w-14">
                    <Heart size={24} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-[#b4aa91]">
                    04
                  </span>
                </div>

                <div className="relative mt-6 sm:mt-7">
                  <div className="mb-3 h-px w-8 bg-[#c5ae73] transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-lg font-semibold text-[#263d35] sm:text-xl">
                    Taṣawwuf
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#69736f]">
                    Tazkiyat an-nafs, dhikr, adab et cheminement vers la
                    purification intérieure.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#8d7544] sm:mt-6">
                    Explorer
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* TIJANIYYA */}
            <Reveal delay={0.25}>
              <Link
                href="/tijaniyya/histoire"
                className="group relative block overflow-hidden rounded-[1.5rem] border border-[#ddd7c8] bg-white p-6 shadow-[0_8px_30px_rgba(38,61,53,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5ae73]/50 hover:shadow-[0_20px_45px_rgba(38,61,53,0.10)] sm:rounded-[2rem] sm:p-7"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#f8f6ef] transition-transform duration-500 group-hover:scale-125 sm:h-24 sm:w-24" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dfe9e4] bg-[#f1f6f3] text-[#263d35] transition-all duration-500 group-hover:border-[#c5ae73]/40 group-hover:bg-[#f8f6ef] group-hover:text-[#8d7544] sm:h-14 sm:w-14">
                    <Moon size={24} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-[#b4aa91]">
                    05
                  </span>
                </div>

                <div className="relative mt-6 sm:mt-7">
                  <div className="mb-3 h-px w-8 bg-[#c5ae73] transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-lg font-semibold text-[#263d35] sm:text-xl">
                    Ṭarīqa Tijāniyya
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#69736f]">
                    Histoire, transmission et héritage spirituel de la voie
                    Tijāniyya.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#8d7544] sm:mt-6">
                    Explorer
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* RECITATEURS */}
            <Reveal delay={0.3}>
              <Link
                href="/recitateurs"
                className="group relative block overflow-hidden rounded-[1.5rem] border border-[#ddd7c8] bg-white p-6 shadow-[0_8px_30px_rgba(38,61,53,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5ae73]/50 hover:shadow-[0_20px_45px_rgba(38,61,53,0.10)] sm:rounded-[2rem] sm:p-7"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#f8f6ef] transition-transform duration-500 group-hover:scale-125 sm:h-24 sm:w-24" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#dfe9e4] bg-[#f1f6f3] text-[#263d35] transition-all duration-500 group-hover:border-[#c5ae73]/40 group-hover:bg-[#f8f6ef] group-hover:text-[#8d7544] sm:h-14 sm:w-14">
                    <BookMarked size={24} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-[#b4aa91]">
                    06
                  </span>
                </div>

                <div className="relative mt-6 sm:mt-7">
                  <div className="mb-3 h-px w-8 bg-[#c5ae73] transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-lg font-semibold text-[#263d35] sm:text-xl">
                    Récitateurs
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#69736f]">
                    Découvrez les récitateurs et explorez les différentes
                    possibilités d&apos;écoute du Coran.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#8d7544] sm:mt-6">
                    Explorer
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CITATION */}
      {/* ========================================================= */}

      <Reveal>
        <section className="border-y border-emerald-100 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <Sparkles
              className="mx-auto text-emerald-700"
              size={27}
            />

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 sm:mt-5 sm:text-sm">
              Notre conviction
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-xl font-medium leading-8 text-emerald-950 sm:mt-5 sm:text-2xl sm:leading-relaxed md:text-3xl">
              La connaissance guide les pas, et la purification du cœur
              donne au chemin sa lumière.
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-500 sm:mt-5">
              Une invitation à unir science, adoration et bon comportement.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ========================================================= */}
      {/* NOTRE DEMARCHE */}
      {/* ========================================================= */}

      <section className="bg-[#fcfcfa] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <div className="mb-10 text-center sm:mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 sm:text-sm">
                Notre démarche
              </p>

              <h2 className="mt-3 text-2xl font-bold text-emerald-950 sm:text-3xl md:text-4xl">
                Apprendre. Comprendre. Cheminer.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3 md:gap-8">
            {/* SCIENCE */}
            <Reveal delay={0.05}>
              <div className="rounded-3xl bg-white p-6 text-center shadow-sm sm:p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 sm:h-14 sm:w-14">
                  <BookOpen size={24} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-emerald-950 sm:mt-5 sm:text-xl">
                  Science
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  Rechercher la connaissance religieuse à travers les sources
                  et les enseignements transmis.
                </p>
              </div>
            </Reveal>

            {/* COMPREHENSION */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-white p-6 text-center shadow-sm sm:p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 sm:h-14 sm:w-14">
                  <Compass size={24} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-emerald-950 sm:mt-5 sm:text-xl">
                  Compréhension
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  Comprendre les enseignements de l’Islam, leur sens et leur portée pour mieux les vivre au quotidien.
                </p>
              </div>
            </Reveal>

            {/* SPIRITUALITE */}
            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-white p-6 text-center shadow-sm sm:p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 sm:h-14 sm:w-14">
                  <Heart size={24} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-emerald-950 sm:mt-5 sm:text-xl">
                  Spiritualité
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  Cultiver la sincérité, le dhikr, le bon comportement et la
                  purification du cœur.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA FINAL */}
      {/* ========================================================= */}

      <Reveal>
        <section className="bg-emerald-950 py-14 text-white sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <Moon
              className="mx-auto text-emerald-200"
              size={29}
            />

            <h2 className="mt-5 text-2xl font-bold leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
              Que votre quête de connaissance devienne une lumière.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-emerald-100 sm:mt-5 sm:text-base sm:leading-7">
              Explorez les ressources de Parlons Islam et avancez pas à pas
              dans la connaissance, la compréhension et le cheminement spirituel.
            </p>

            <div className="mt-7 sm:mt-8">
              <Link
                href="/coran"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
              >
                Commencer l&apos;exploration
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </main>
  );
}
