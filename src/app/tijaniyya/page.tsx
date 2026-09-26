import Link from "next/link";
import {
  BookOpen,
  Compass,
  History,
  Heart,
  ArrowUpRight,
  Sparkles,
  ScrollText,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function TijaniyyaPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#263d35]">
      <Menu />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#e4ded2] bg-[#f5f1e8]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#d6c7a8]/50" />
        <div className="absolute -bottom-36 -left-24 h-80 w-80 rounded-full border border-[#d6c7a8]/40" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-24">
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b79b62]" />

            <Sparkles
              size={15}
              strokeWidth={1.3}
              className="text-[#92794a]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#92794a]">
              Science · Spiritualité · Transmission
            </span>

            <Sparkles
              size={15}
              strokeWidth={1.3}
              className="text-[#92794a]"
            />

            <span className="h-px w-10 bg-[#b79b62]" />
          </div>

          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6c7a8] bg-[#fbfaf6] shadow-[0_12px_30px_rgba(38,61,53,0.06)]">
            <Compass
              size={30}
              strokeWidth={1.35}
              className="text-[#80683e]"
            />
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-[#263d35] sm:text-5xl">
            Ṭarīqa Tijāniyya
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#73756f] sm:text-base">
            Découvrir l’histoire, les enseignements et la transmission de la
            voie spirituelle fondée par Sidi Aḥmad at-Tijānī رضي الله عنه.
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-[#d6c7a8]" />

            <span
              dir="rtl"
              lang="ar"
              className="text-lg text-[#80683e]"
            >
              الطريقة التجانية
            </span>

            <span className="h-px w-14 bg-[#d6c7a8]" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.75rem] border border-[#dcd3c3] bg-[#fffefa] p-7 shadow-[0_8px_28px_rgba(38,61,53,0.035)] sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d6c7a8] bg-[#f5f1e8]">
                <Heart
                  size={22}
                  strokeWidth={1.35}
                  className="text-[#80683e]"
                />
              </div>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
                Une voie de spiritualité
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#263d35] sm:text-3xl">
                Cheminement, éducation et transmission
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#73756f] sm:text-base">
                Cette rubrique est consacrée à la connaissance de la Ṭarīqa
                Tijāniyya, de son histoire, de ses enseignements et de sa
                transmission spirituelle. Elle a vocation à présenter les
                éléments de cette tradition avec clarté, respect des sources
                et souci de compréhension.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#d6c7a8] bg-[#f5f1e8] p-7 sm:p-9">
              <ScrollText
                size={23}
                strokeWidth={1.35}
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
      </section>

      {/* History */}
      <section className="px-5 pb-14 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/tijaniyya/histoire"
            className="group relative flex flex-col gap-6 overflow-hidden rounded-[1.75rem] border border-[#dcd3c3] bg-[#fffefa] p-7 shadow-[0_8px_28px_rgba(38,61,53,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cdbd9e] hover:shadow-[0_16px_35px_rgba(38,61,53,0.07)] sm:flex-row sm:items-center sm:p-9"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#d6c7a8]/40" />

            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#d6c7a8] bg-[#f5f1e8]">
              <History
                size={25}
                strokeWidth={1.35}
                className="text-[#80683e]"
              />
            </div>

            <div className="relative flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
                Première ressource
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[#263d35] sm:text-2xl">
                Histoire de la Ṭarīqa Tijāniyya
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#73756f]">
                Les origines, les maîtres et la transmission de la voie
                spirituelle à travers son histoire.
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

      {/* Future sections */}
      <section className="border-y border-[#e4ded2] bg-[#f5f1e8] px-5 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92794a]">
              À approfondir
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#263d35] sm:text-3xl">
              Les futurs axes de la rubrique
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#73756f]">
              La rubrique sera progressivement enrichie afin de distinguer
              l’histoire, les enseignements, les pratiques et les références.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Enseignements",
                text: "Les fondements et les principaux thèmes de la tradition tijaniyya.",
              },
              {
                icon: Heart,
                title: "Spiritualité",
                text: "Le cheminement intérieur, le dhikr et l’éducation spirituelle.",
              },
              {
                icon: ScrollText,
                title: "Pratiques",
                text: "Les principales pratiques de la voie et leur présentation documentée.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-[#ddd5c7] bg-[#fffefa] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d6c7a8] bg-[#f5f1e8]">
                    <Icon
                      size={20}
                      strokeWidth={1.35}
                      className="text-[#80683e]"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#344840]">
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

      {/* Closing */}
      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Sparkles
            size={20}
            strokeWidth={1.3}
            className="mx-auto text-[#92794a]"
          />

          <p className="mt-5 text-sm leading-7 text-[#73756f] sm:text-base">
            Une transmission authentique commence par la connaissance, se
            poursuit par la compréhension et se reflète dans le comportement.
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