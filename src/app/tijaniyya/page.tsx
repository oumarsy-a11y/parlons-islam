import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  Heart,
  History,
  ScrollText,
  Sparkles,
  Users,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function TijaniyyaPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#263d35]">
      <Menu />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#e4ded2] bg-[#f5f1e8]">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[#d6c7a8]/50" />
        <div className="absolute -bottom-40 -left-28 h-96 w-96 rounded-full border border-[#d6c7a8]/40" />

        <div className="absolute right-[18%] top-20 hidden h-2 w-2 rounded-full bg-[#b79b62]/50 sm:block" />
        <div className="absolute bottom-24 left-[15%] hidden h-1.5 w-1.5 rounded-full bg-[#b79b62]/40 sm:block" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-24 lg:py-28">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b79b62] sm:w-12" />

            <Sparkles
              size={14}
              strokeWidth={1.25}
              className="text-[#92794a]"
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#92794a] sm:text-[10px] sm:tracking-[0.3em]">
              Science · Spiritualité · Transmission
            </span>

            <Sparkles
              size={14}
              strokeWidth={1.25}
              className="text-[#92794a]"
            />

            <span className="h-px w-8 bg-[#b79b62] sm:w-12" />
          </div>

          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6c7a8] bg-[#fbfaf6] shadow-[0_12px_30px_rgba(38,61,53,0.06)]">
            <Compass
              size={29}
              strokeWidth={1.25}
              className="text-[#80683e]"
            />
          </div>

          <p
            dir="rtl"
            lang="ar"
            className="mb-4 text-xl text-[#80683e] sm:text-2xl"
          >
            الطريقة التجانية
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#263d35] sm:text-5xl lg:text-6xl">
            Ṭarīqa Tijāniyya
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#73756f] sm:text-base sm:leading-8">
            Découvrir l’histoire, les enseignements et la transmission de la
            voie spirituelle fondée par Sidi Aḥmad at-Tijānī رضي الله عنه.
          </p>

          <div className="mx-auto mt-9 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d6c7a8] sm:w-16" />

            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#92794a]">
              Une voie · une transmission
            </span>

            <span className="h-px w-12 bg-[#d6c7a8] sm:w-16" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.75rem] border border-[#dcd3c3] bg-[#fffefa] p-7 shadow-[0_8px_28px_rgba(38,61,53,0.035)] sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d6c7a8] bg-[#f5f1e8]">
                <Heart
                  size={21}
                  strokeWidth={1.3}
                  className="text-[#80683e]"
                />
              </div>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
                Une voie de spiritualité
              </p>

              <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-[#263d35] sm:text-3xl">
                Cheminement, éducation et transmission
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#73756f] sm:text-base">
                Cette rubrique est consacrée à la connaissance de la Ṭarīqa
                Tijāniyya, de son histoire, de ses enseignements et de sa
                transmission spirituelle. Elle a vocation à présenter les
                éléments de cette tradition avec clarté, respect des sources
                et souci de compréhension.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d6c7a8] bg-[#f5f1e8] p-7 sm:p-9">
              <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full border border-[#d6c7a8]/50" />

              <div className="relative">
                <ScrollText
                  size={23}
                  strokeWidth={1.3}
                  className="text-[#80683e]"
                />

                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
                  Notre démarche
                </p>

                <h2 className="mt-3 text-xl font-semibold text-[#263d35]">
                  Comprendre avant de transmettre
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#73756f]">
                  Les contenus seront progressivement développés à partir des
                  sources, des enseignements transmis et des travaux consacrés
                  à la tradition tijaniyya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="px-5 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
              Commencer par les origines
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#263d35] sm:text-3xl">
              Histoire de la voie
            </h2>
          </div>

          <Link
            href="/tijaniyya/histoire"
            className="group relative flex flex-col gap-6 overflow-hidden rounded-[1.75rem] border border-[#dcd3c3] bg-[#fffefa] p-7 shadow-[0_8px_28px_rgba(38,61,53,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cdbd9e] hover:shadow-[0_16px_35px_rgba(38,61,53,0.07)] sm:flex-row sm:items-center sm:p-9"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#d6c7a8]/40" />

            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#d6c7a8] bg-[#f5f1e8]">
              <History
                size={25}
                strokeWidth={1.3}
                className="text-[#80683e]"
              />
            </div>

            <div className="relative flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
                Première ressource
              </p>

              <h3 className="mt-2 text-xl font-semibold text-[#263d35] sm:text-2xl">
                Histoire de la Ṭarīqa Tijāniyya
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#73756f]">
                Les origines, les maîtres et la transmission de la voie
                spirituelle à travers son histoire.
              </p>
            </div>

            <ArrowUpRight
              size={20}
              strokeWidth={1.35}
              className="relative text-[#92794a] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>

      {/* Axes */}
      <section className="border-y border-[#e4ded2] bg-[#f5f1e8] px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
              À approfondir
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#263d35] sm:text-3xl">
              Trois axes pour découvrir la voie
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#73756f]">
              La rubrique sera progressivement enrichie afin de distinguer
              l’histoire, les enseignements, les pratiques et les références.
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                number: "01",
                title: "Enseignements",
                text: "Les fondements et les principaux thèmes de la tradition tijaniyya.",
              },
              {
                icon: Heart,
                number: "02",
                title: "Spiritualité",
                text: "Le cheminement intérieur, le dhikr et l’éducation spirituelle.",
              },
              {
                icon: ScrollText,
                number: "03",
                title: "Pratiques",
                text: "Les principales pratiques de la voie et leur présentation documentée.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group rounded-[1.5rem] border border-[#ddd5c7] bg-[#fffefa] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#cdbd9e] hover:shadow-[0_14px_30px_rgba(38,61,53,0.055)] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d6c7a8] bg-[#f5f1e8]">
                      <Icon
                        size={20}
                        strokeWidth={1.3}
                        className="text-[#80683e]"
                      />
                    </div>

                    <span className="text-[10px] font-medium tracking-[0.2em] text-[#b19a70]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#344840]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#73756f]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transmission */}
      <section className="px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d6c7a8] bg-[#fffefa] px-7 py-10 text-center shadow-[0_10px_35px_rgba(38,61,53,0.035)] sm:px-12 sm:py-14">
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full border border-[#d6c7a8]/40" />
            <div className="absolute -bottom-24 -right-20 h-48 w-48 rounded-full border border-[#d6c7a8]/40" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d6c7a8] bg-[#f5f1e8]">
                <Users
                  size={21}
                  strokeWidth={1.3}
                  className="text-[#80683e]"
                />
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
                Transmission
              </p>

              <h2 className="mx-auto mt-3 max-w-xl text-2xl font-semibold tracking-tight text-[#263d35] sm:text-3xl">
                De la connaissance à la transmission
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#73756f] sm:text-base">
                Connaître une tradition, c’est aussi comprendre la manière
                dont ses enseignements ont été transmis, reçus et préservés à
                travers les générations.
              </p>

              <div className="mx-auto mt-8 flex items-center justify-center gap-3">
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}