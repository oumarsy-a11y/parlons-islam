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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfa] text-gray-900">
      <Menu />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-b from-emerald-50 via-white to-[#fcfcfa]">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm">
            <Moon size={16} />
            <span>Science • Spiritualité • Transmission</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-emerald-950 md:text-7xl">
            Parlons Islam
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Une porte ouverte vers le Coran, la Sunna, le Fiqh malikite,
            le Taṣawwuf et l'héritage de la Ṭarīqa Tijāniyya.
          </p>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">
            Apprendre, comprendre et cheminer avec une approche fondée sur
            les sources de l'Islam et la transmission du savoir.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/coran"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-800 px-7 py-4 font-semibold text-white shadow-sm transition hover:bg-emerald-900"
            >
              <BookOpen size={20} />
              Explorer le Coran
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/tassawuf"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-white px-7 py-4 font-semibold text-emerald-900 transition hover:bg-emerald-50"
            >
              <Heart size={20} />
              Découvrir le Taṣawwuf
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* RECHERCHE */}
      {/* ========================================================= */}

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

      {/* ========================================================= */}
      {/* GRANDES SECTIONS */}
      {/* ========================================================= */}

      <section className="bg-[#fcfcfa] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Explorer
            </p>

            <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
              Les sciences de l'Islam
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Des espaces consacrés au Livre d'Allah, à la tradition
              prophétique, au droit musulman et à l'éducation spirituelle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* CORAN */}

            <Link
              href="/coran"
              className="group rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                du Livre d'Allah.
              </p>
            </Link>

            {/* HADITHS */}

            <Link
              href="/hadiths"
              className="group rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                Les paroles et enseignements du Messager d'Allah ﷺ, organisés
                pour faciliter l'étude.
              </p>
            </Link>

            {/* FIQH */}

            <Link
              href="/fiqh-malikite"
              className="group rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                Découvrez les fondements et les règles du madhhab de l'Imam
                Mālik رحمه الله.
              </p>
            </Link>

            {/* TASSAWUF */}

            <Link
              href="/tassawuf"
              className="group rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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

            {/* TIJANIYYA */}

            <Link
              href="/tijaniyya/histoire"
              className="group rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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

            {/* RECITATEURS */}

            <Link
              href="/recitateurs"
              className="group rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                possibilités d'écoute du Coran.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CITATION / ESPRIT DU SITE */}
      {/* ========================================================= */}

      <section className="border-y border-emerald-100 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Sparkles className="mx-auto text-emerald-700" size={30} />

          <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-emerald-950 md:text-3xl">
            « La connaissance guide les pas, et la purification du cœur
            donne au chemin sa lumière. »
          </blockquote>

          <p className="mt-5 text-sm text-gray-500">
            Une invitation à unir science, adoration et bon comportement.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NOTRE DEMARCHE */}
      {/* ========================================================= */}

      <section className="bg-[#fcfcfa] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Notre démarche
            </p>

            <h2 className="mt-3 text-3xl font-bold text-emerald-950 md:text-4xl">
              Apprendre. Comprendre. Cheminer.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
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
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA FINAL */}
      {/* ========================================================= */}

      <section className="bg-emerald-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Moon className="mx-auto text-emerald-200" size={32} />

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Que votre recherche de connaissance soit une lumière.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-100">
            Explorez les ressources de Parlons Islam et avancez pas à pas
            dans l'étude, la compréhension et la purification intérieure.
          </p>

          <div className="mt-8">
            <Link
              href="/coran"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-emerald-950 transition hover:bg-emerald-50"
            >
              Commencer l'exploration
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}