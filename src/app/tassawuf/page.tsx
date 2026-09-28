import Link from "next/link";
import {
  BookOpen,
  History,
  ArrowUpRight,
  Sparkles,
  Compass,
  GraduationCap,
  Heart,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { tassawuf } from "@/data/tassawuf";

export default function TassawufPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#263d35]">
      <Menu />

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-[#e4ded2] bg-[#f5f1e8]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#d6c7a8]/40"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-28 h-96 w-96 rounded-full border border-[#d6c7a8]/30"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full border border-[#d6c7a8]/15"
        />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-24 lg:py-28">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b79b62]" />

            <Sparkles
              size={14}
              strokeWidth={1.3}
              className="text-[#92794a]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#92794a]">
              Science · Spiritualité · Transmission
            </span>

            <Sparkles
              size={14}
              strokeWidth={1.3}
              className="text-[#92794a]"
            />

            <span className="h-px w-8 bg-[#b79b62]" />
          </div>

          <div className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-[#d6c7a8] bg-[#fbfaf6] shadow-[0_14px_35px_rgba(38,61,53,0.06)]">
            <Sparkles
              size={29}
              strokeWidth={1.25}
              className="text-[#80683e]"
            />
          </div>

          <h1 className="mt-8 text-4xl font-semibold tracking-[-0.025em] text-[#263d35] sm:text-5xl lg:text-[3.5rem]">
            Taṣawwuf
          </h1>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d6c7a8]" />

            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rotate-45 bg-[#92794a]"
            />

            <span className="h-px w-12 bg-[#d6c7a8]" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#73756f] sm:text-base sm:leading-8">
            La purification du cœur, l’excellence spirituelle et le
            cheminement vers Allah à travers l’éducation intérieure et le
            perfectionnement du comportement.
          </p>

          <p
            dir="rtl"
            lang="ar"
            className="mt-8 text-xl text-[#80683e]"
          >
            التصوف
          </p>
        </div>
      </section>

      {/* Introduction */}

      <section className="px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[#e0d9cb] bg-[#fffefa] p-6 shadow-[0_8px_28px_rgba(38,61,53,0.03)]">
              <GraduationCap
                size={21}
                strokeWidth={1.35}
                className="text-[#80683e]"
              />

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92794a]">
                Science
              </p>

              <p className="mt-2 text-sm leading-6 text-[#73756f]">
                Comprendre les fondements de la spiritualité islamique à la
                lumière des sources de la religion.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#e0d9cb] bg-[#fffefa] p-6 shadow-[0_8px_28px_rgba(38,61,53,0.03)]">
              <BookOpen
                size={21}
                strokeWidth={1.35}
                className="text-[#80683e]"
              />

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92794a]">
                Éducation
              </p>

              <p className="mt-2 text-sm leading-6 text-[#73756f]">
                Cultiver le caractère, discipliner l’âme et progresser dans la
                connaissance de soi.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#e0d9cb] bg-[#fffefa] p-6 shadow-[0_8px_28px_rgba(38,61,53,0.03)]">
              <Heart
                size={21}
                strokeWidth={1.35}
                className="text-[#80683e]"
              />

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92794a]">
                Spiritualité
              </p>

              <p className="mt-2 text-sm leading-6 text-[#73756f]">
                Rechercher l’iḥsān à travers la purification du cœur et
                l’amélioration du comportement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire */}

      <section className="px-5 pb-14 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/tassawuf/histoire"
            className="group relative flex flex-col gap-6 overflow-hidden rounded-[1.75rem] border border-[#dcd3c3] bg-[#fffefa] p-6 shadow-[0_8px_28px_rgba(38,61,53,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cdbd9e] hover:shadow-[0_18px_40px_rgba(38,61,53,0.07)] sm:flex-row sm:items-center sm:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#d6c7a8]/40 transition-transform duration-500 group-hover:scale-110"
            />

            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#d6c7a8] bg-[#f5f1e8]">
              <History
                size={24}
                strokeWidth={1.4}
                className="text-[#80683e]"
              />
            </div>

            <div className="relative flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
                Comprendre la tradition spirituelle
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[#263d35] sm:text-2xl">
                Histoire du Taṣawwuf
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#73756f]">
                Des premières expressions de l’ascèse et de la spiritualité
                islamique aux grandes traditions soufies.
              </p>
            </div>

            <ArrowUpRight
              size={20}
              strokeWidth={1.4}
              className="relative text-[#92794a] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>

      {/* Articles */}

      <section className="border-t border-[#e4ded2] bg-[#f5f1e8] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
                Approfondir
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#263d35] sm:text-3xl">
                Articles et enseignements
              </h2>
            </div>

            <span className="hidden text-xs text-[#9a917f] sm:block">
              {tassawuf.length} article
              {tassawuf.length > 1 ? "s" : ""}
            </span>
          </div>

          {tassawuf.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tassawuf.map((article) => (
                <Link
                  key={article.id}
                  href={`/tassawuf/articles/${article.slug}`}
                  className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.5rem] border border-[#ddd5c6] bg-[#fffefa] p-6 shadow-[0_8px_28px_rgba(38,61,53,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cdbd9e] hover:shadow-[0_18px_38px_rgba(38,61,53,0.07)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d6c7a8] bg-[#f5f1e8]">
                      <BookOpen
                        size={20}
                        strokeWidth={1.4}
                        className="text-[#80683e]"
                      />
                    </span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.4}
                      className="text-[#aaa294] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#92794a]"
                    />
                  </div>

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92794a]">
                    {article.category}
                  </p>

                  <h3 className="mt-3 text-lg font-semibold leading-7 text-[#344840]">
                    {article.title}
                  </h3>

                  <p className="mt-3 line-clamp-4 text-sm leading-6 text-[#73756f]">
                    {article.content}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="h-px w-10 bg-[#d6c7a8] transition-all duration-300 group-hover:w-16" />

                    <p className="mt-4 text-xs font-medium text-[#92794a]">
                      Lire l’article →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-[#ddd5c6] bg-[#fffefa] px-6 py-12 text-center">
              <BookOpen
                size={22}
                strokeWidth={1.3}
                className="mx-auto text-[#92794a]"
              />

              <p className="mt-4 text-sm text-[#73756f]">
                Les enseignements seront progressivement ajoutés à cette
                bibliothèque.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Conclusion */}

      <section className="border-t border-[#e4ded2] bg-[#fbfaf6] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Compass
            size={21}
            strokeWidth={1.35}
            className="mx-auto text-[#92794a]"
          />

          <p className="mt-5 text-sm leading-7 text-[#73756f] sm:text-base sm:leading-8">
            Le Taṣawwuf est ici abordé comme une voie de purification,
            d’éducation du caractère et de recherche de l’iḥsān, en lien avec
            la connaissance et la pratique de la religion.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6c7a8]" />

            <span
              dir="rtl"
              lang="ar"
              className="text-sm text-[#80683e]"
            >
              العلم · العمل · الإحسان
            </span>

            <span className="h-px w-10 bg-[#d6c7a8]" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}