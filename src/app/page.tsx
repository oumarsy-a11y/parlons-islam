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
  Star,
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
    <main className="min-h-screen bg-[#fcfcfa] text-gray-900">
      <Menu />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative isolate overflow-hidden border-b border-[#ded7c7] bg-[#f8f6ef]">

        {/* Fond : zaouia */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/zaouia.jpeg')" }}
        />

        {/* Voile lumineux pour garder le texte lisible */}
        <div className="absolute inset-0 bg-[#f8f6ef]/80" />

        {/* Lumière centrale */}
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d8c99d]/30 blur-3xl" />

        {/* Ornements */}
        <div className="absolute right-[-120px] top-20 h-72 w-72 rounded-full border border-[#c8b77f]/30" />

        <div className="absolute bottom-[-160px] left-[-100px] h-80 w-80 rounded-full border border-[#263d35]/15" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-32">

          <Reveal>
            <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-[#d8ccb0] bg-white/70 px-5 py-2.5 text-sm font-medium text-[#6f5c35] shadow-sm backdrop-blur-sm">
              <Moon size={16} strokeWidth={1.5} />

              <span>
                Science · Spiritualité · Transmission
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-5xl font-semibold tracking-tight text-[#263d35] sm:text-6xl md:text-7xl">
              Parlons Islam
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mx-auto mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#c5ae73]" />
              <span className="text-[#a1874f]">✦</span>
              <span className="h-px w-12 bg-[#c5ae73]" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-[#4f5b56] md:text-2xl">
              Une porte ouverte vers le Coran, la Sunna, le Fiqh malikite,
              le Taṣawwuf et l&apos;héritage de la Ṭarīqa Tijāniyya.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#69736f] md:text-lg">
              Apprendre, comprendre et cheminer avec une approche fondée
              sur les sources de l&apos;Islam et la transmission du savoir.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/coran"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#263d35] px-7 py-4 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#1c3029] hover:shadow-lg"
              >
                <BookOpen size={20} strokeWidth={1.7} />
                Explorer le Coran
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/tassawuf"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#cfc4aa] bg-white/80 px-7 py-4 font-semibold text-[#344b42] shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                <Heart size={20} strokeWidth={1.7} />
                Découvrir le Taṣawwuf
              </Link>

            </div>
          </Reveal>

          <Reveal delay={0.38}>
            <p className="mt-12 text-xs font-medium uppercase tracking-[0.3em] text-[#9a8659]">
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
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <div className="mx-auto flex w-fit items-center justify-center rounded-2xl bg-emerald-50 p-3 text-emerald-800">
              <Search size={24} />
            </div>

            <h2 className="mt-5 text-3xl font-bold text-emerald-950 md:text-4xl">
              Que recherchez-vous ?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Explorez les différentes ressources de Parlons Islam à travers
              une recherche simple.
            </p>

            <div className="mx-auto mt-8 max-w-3xl">
              <SearchBar />
            </div>

          </div>
        </section>
      </Reveal>

      {/* ========================================================= */}
      {/* GRANDES SECTIONS */}
      {/* ========================================================= */}

      <section className="bg-[#fcfcfa] py-20">
        <div className="mx-auto max-w-6xl px-6">

          <Reveal>
            <div className="mb-12 text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Explorer
              </p>

              <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
                Les sciences de l&apos;Islam
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Des espaces consacrés au Livre d&apos;Allah, à la tradition
                prophétique, au droit musulman et à l&apos;éducation spirituelle.
              </p>

            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* CORAN */}

            <Reveal delay={0.05}>
              <Link
                href="/coran"
                className="group block rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center justify-between">

                  <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-800">
                    <BookOpen size={30} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-700"
                  />

                </div>

                <h3 className="mt-7 text-2xl font-bold text-emerald-950">
                  Coran
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Lecture des sourates, traductions, récitations et découverte
                  du Livre d&apos;Allah.
                </p>

              </Link>
            </Reveal>

            {/* HADITHS */}

            <Reveal delay={0.1}>
              <Link
                href="/hadiths"
                className="group block rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center justify-between">

                  <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-800">
                    <ScrollText size={30} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-700"
                  />

                </div>

                <h3 className="mt-7 text-2xl font-bold text-emerald-950">
                  Hadiths
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Les paroles et enseignements du Messager d&apos;Allah ﷺ,
                  organisés pour faciliter l&apos;étude.
                </p>

              </Link>
            </Reveal>

            {/* FIQH */}

            <Reveal delay={0.15}>
              <Link
                href="/fiqh-malikite"
                className="group block rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center justify-between">

                  <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-800">
                    <Scale size={30} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-700"
                  />

                </div>

                <h3 className="mt-7 text-2xl font-bold text-emerald-950">
                  Fiqh malikite
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Découvrez les fondements et les règles du madhhab de l&apos;Imam
                  Mālik رحمه الله.
                </p>

              </Link>
            </Reveal>

            {/* TASSAWUF */}

            <Reveal delay={0.05}>
              <Link
                href="/tassawuf"
                className="group block rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center justify-between">

                  <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-800">
                    <Heart size={30} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-700"
                  />

                </div>

                <h3 className="mt-7 text-2xl font-bold text-emerald-950">
                  Taṣawwuf
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Tazkiyat an-nafs, dhikr, adab et cheminement vers la
                  purification intérieure.
                </p>

              </Link>
            </Reveal>

            {/* TIJANIYYA */}

            <Reveal delay={0.1}>
              <Link
                href="/tijaniyya/histoire"
                className="group block rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center justify-between">

                  <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-800">
                    <Star size={30} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-700"
                  />

                </div>

                <h3 className="mt-7 text-2xl font-bold text-emerald-950">
                  Ṭarīqa Tijāniyya
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Histoire, transmission et héritage spirituel de la voie
                  Tijāniyya.
                </p>

              </Link>
            </Reveal>

            {/* RECITATEURS */}

            <Reveal delay={0.15}>
              <Link
                href="/recitateurs"
                className="group block rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center justify-between">

                  <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-800">
                    <BookMarked size={30} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-700"
                  />

                </div>

                <h3 className="mt-7 text-2xl font-bold text-emerald-950">
                  Récitateurs
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Découvrez les récitateurs et explorez les différentes
                  possibilités d&apos;écoute du Coran.
                </p>

              </Link>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CITATION */}
      {/* ========================================================= */}

      <Reveal>
        <section className="border-y border-emerald-100 bg-white py-20">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <Sparkles
              className="mx-auto text-emerald-700"
              size={30}
            />

            <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-emerald-950 md:text-3xl">
              « La connaissance guide les pas, et la purification du cœur
              donne au chemin sa lumière. »
            </blockquote>

            <p className="mt-5 text-sm text-gray-500">
              Une invitation à unir science, adoration et bon comportement.
            </p>

          </div>

        </section>
      </Reveal>

      {/* ========================================================= */}
      {/* NOTRE DEMARCHE */}
      {/* ========================================================= */}

      <section className="bg-[#fcfcfa] py-20">

        <div className="mx-auto max-w-6xl px-6">

          <Reveal>
            <div className="mb-12 text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Notre démarche
              </p>

              <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
                Apprendre. Comprendre. Cheminer.
              </h2>

            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">

            {/* SCIENCE */}

            <Reveal delay={0.05}>
              <div className="rounded-3xl bg-white p-8 text-center shadow-sm">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <BookOpen size={26} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-emerald-950">
                  Science
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Rechercher la connaissance religieuse à travers les sources
                  et les enseignements transmis.
                </p>

              </div>
            </Reveal>

            {/* COMPREHENSION */}

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-white p-8 text-center shadow-sm">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <Compass size={26} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-emerald-950">
                  Compréhension
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Donner au lecteur des explications accessibles et structurées
                  pour approfondir son étude.
                </p>

              </div>
            </Reveal>

            {/* SPIRITUALITE */}

            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-white p-8 text-center shadow-sm">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <Heart size={26} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-emerald-950">
                  Spiritualité
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
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
        <section className="bg-emerald-950 py-20 text-white">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <Moon
              className="mx-auto text-emerald-200"
              size={32}
            />

            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              Que votre recherche de connaissance soit une lumière.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-100">
              Explorez les ressources de Parlons Islam et avancez pas à pas
              dans l&apos;étude, la compréhension et la purification intérieure.
            </p>

            <div className="mt-8">

              <Link
                href="/coran"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-emerald-950 transition hover:bg-emerald-50"
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