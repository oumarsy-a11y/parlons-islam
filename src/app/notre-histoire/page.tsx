import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Heart,
  Lightbulb,
  MessageCircle,
  Moon,
  Sparkles,
  Users,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Découvrez l’histoire de Parlons Islam, une initiative née entre frères autour de la connaissance, de la spiritualité et de la transmission des enseignements islamiques.",
  alternates: {
    canonical: "/notre-histoire",
  },
};

const timeline = [
  {
    date: "Juin 2023",
    title: "Tout commence par une intention",
    icon: Lightbulb,
    text: "Quatre frères partagent une même idée : créer un espace où les enseignements islamiques pourraient être partagés, étudiés et transmis.",
  },
  {
    date: "Les débuts",
    title: "Un groupe WhatsApp",
    icon: MessageCircle,
    text: "Mamadou Koné, Seydou Eddu Diawara, Kerfala Savané et Oumar Sylla décident de commencer simplement. Un groupe WhatsApp est créé. L’ambition est modeste dans sa forme, mais profonde dans son intention.",
  },
  {
    date: "Puis viennent les adhérents",
    title: "Le partage fait grandir le cercle",
    icon: Users,
    text: "Des liens, des rappels et différents contenus sont partagés. Peu à peu, de nouvelles personnes rejoignent le groupe et l’idée initiale prend une dimension plus large.",
  },
  {
    date: "Une nouvelle organisation",
    title: "Des programmes chaque mois",
    icon: CalendarDays,
    text: "Pour mieux organiser les activités malgré les obligations professionnelles de chacun, un programme est établi puis adapté au fil des mois. Les mois de Ramadan bénéficient de programmes particuliers.",
  },
  {
    date: "Le temps passe",
    title: "Des silences et des reprises",
    icon: Clock3,
    text: "La réalité de la vie professionnelle finit cependant par rendre le suivi difficile. Le groupe connaît des périodes de silence, puis des reprises. Et parfois, après une reprise, un nouveau silence.",
  },
  {
    date: "Une réflexion plus profonde",
    title: "Les assises spirituelles",
    icon: Heart,
    text: "Après plusieurs assises spirituelles et de nombreuses discussions, une question demeure : comment donner à cette idée une structure capable de durer et de servir réellement ?",
  },
  {
    date: "Une ambition nouvelle",
    title: "Le projet d’une ONG",
    icon: Sparkles,
    text: "L’idée de créer une ONG portant le nom de Parlons Islam commence alors à prendre forme. Mais avant de franchir cette étape, il faut prendre le temps de réfléchir, de structurer et de préparer l’avenir.",
  },
  {
    date: "Aujourd’hui",
    title: "Le site devient une nouvelle étape",
    icon: BookOpen,
    text: "Avant même la création de cette future structure, le choix est fait de construire une plateforme numérique. Le site Parlons Islam devient ainsi une nouvelle manière de poursuivre l’intention qui avait vu le jour en 2023.",
  },
];

const founders = [
  "Mamadou Koné",
  "Seydou Eddu Diawara",
  "Kerfala Savané",
  "Oumar Sylla",
];

export default function NotreHistoirePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#263d35]">
      <Menu />

      {/* HERO */}
      <section className="relative min-h-[650px] overflow-hidden text-white sm:min-h-[700px]">
        <Image
          src="/images/zaouia.jpeg"
          alt="Zāwiya marocaine"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#14231f]/68" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#14231f]/25 to-[#14231f]" />

        <div className="relative mx-auto flex min-h-[650px] max-w-6xl flex-col px-5 py-6 sm:min-h-[700px] sm:px-6 sm:py-7">
          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.5}
              className="transition-transform group-hover:-translate-x-1"
            />
            Retour à l’accueil
          </Link>

          <div className="flex flex-1 items-center justify-center py-14 text-center sm:py-20">
            <Reveal className="max-w-4xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6c7a8]/60 bg-black/20 shadow-2xl backdrop-blur-md">
                <Moon
                  size={29}
                  strokeWidth={1.3}
                  className="text-[#e1c986]"
                />
              </div>

              <div className="mt-7 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#d6c7a8]/70 sm:w-10" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1c986] sm:text-xs">
                  Notre histoire
                </p>

                <span className="h-px w-8 bg-[#d6c7a8]/70 sm:w-10" />
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                Une idée née entre frères.
              </h1>

              <p className="mt-4 text-2xl font-light leading-tight text-[#e0ca92] sm:text-4xl md:text-5xl">
                Un chemin de transmission.
              </p>

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/78 sm:text-base sm:leading-8 md:text-lg">
                Depuis 2023, Parlons Islam avance entre réflexions,
                apprentissages, silences et renaissances, avec une même
                intention : partager le bien et contribuer à la transmission
                du savoir islamique.
              </p>

              <div className="mt-9 flex justify-center">
                <a
                  href="#commencement"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:border-white/40 hover:bg-white/15"
                >
                  Découvrir notre histoire

                  <ArrowRight
                    size={17}
                    strokeWidth={1.4}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        id="commencement"
        className="bg-[#fbfaf6] px-5 py-20 sm:px-6 sm:py-24"
      >
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6c7a8]" />

            <Sparkles
              size={15}
              strokeWidth={1.3}
              className="text-[#92794a]"
            />

            <span className="h-px w-10 bg-[#d6c7a8]" />
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#92794a] sm:text-xs">
            Le commencement
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#263d35] sm:text-4xl md:text-5xl">
            Avant le site, il y avait une intention.
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-sm leading-7 text-[#73756f] sm:text-base sm:leading-8">
            <p>
              Parlons Islam n’est pas né d’abord comme un site internet.
              L’idée est née d’une volonté commune de partager des
              enseignements islamiques et de créer un espace où chacun
              pourrait apprendre et transmettre.
            </p>

            <p>
              En juin 2023, quatre frères décident alors de commencer
              simplement. Un groupe WhatsApp voit le jour.
            </p>

            <p>
              Ils ne savaient peut-être pas encore jusqu’où cette idée
              pourrait les conduire. Mais une première pierre venait
              d’être posée.
            </p>
          </div>

          <div className="mx-auto mt-10 h-px w-14 bg-[#b79b62]" />
        </Reveal>
      </section>

      {/* FONDATEURS */}
      <section className="border-y border-[#e2dacb] bg-[#f5f1e8] px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#92794a] sm:text-xs">
              À l’origine
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#263d35] sm:text-4xl md:text-5xl">
              Quatre frères
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#73756f] sm:text-base sm:leading-8">
              Quatre personnes, une intention commune et une première
              initiative qui allait progressivement prendre de l’ampleur.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder, index) => (
              <Reveal key={founder} delay={index * 0.06}>
                <article className="group h-full rounded-[1.75rem] border border-[#ddd3bf] bg-[#fffefa] p-7 text-center shadow-[0_8px_28px_rgba(38,61,53,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cdbd9e] hover:shadow-[0_16px_35px_rgba(38,61,53,0.07)] sm:p-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6c7a8] bg-[#f5f1e8] text-[#80683e] transition duration-300 group-hover:scale-105">
                    <Users size={25} strokeWidth={1.35} />
                  </div>

                  <p className="mt-6 text-lg font-semibold text-[#263d35] sm:text-xl">
                    {founder}
                  </p>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#92794a]">
                    Co-fondateur
                  </p>

                  <div className="mx-auto mt-5 h-px w-9 bg-[#d6c7a8] transition-all duration-300 group-hover:w-14" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHRONOLOGIE */}
      <section className="bg-[#fbfaf6] px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#92794a] sm:text-xs">
              Juin 2023 → aujourd’hui
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#263d35] sm:text-4xl md:text-5xl">
              Un chemin fait de saisons
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#73756f] sm:text-base sm:leading-8">
              Comme tout projet porté par des hommes, Parlons Islam a connu
              des élans, des difficultés, des pauses et de nouveaux départs.
            </p>
          </Reveal>

          <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[#d6c7a8] md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8 sm:space-y-10">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const right = index % 2 !== 0;

                return (
                  <Reveal key={item.title} delay={index * 0.035}>
                    <div className="relative md:grid md:grid-cols-2 md:gap-16">
                      <div
                        className={
                          right
                            ? "md:col-start-2"
                            : "md:col-start-1"
                        }
                      >
                        <article className="ml-6 rounded-[1.5rem] border border-[#e0d9cb] bg-[#fffefa] p-6 shadow-[0_8px_28px_rgba(38,61,53,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cdbd9e] hover:shadow-[0_16px_35px_rgba(38,61,53,0.07)] sm:ml-0 sm:rounded-[1.75rem] sm:p-7">
                          <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d6c7a8] bg-[#f5f1e8] text-[#80683e] sm:h-12 sm:w-12">
                              <Icon size={20} strokeWidth={1.4} />
                            </div>

                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92794a] sm:text-xs">
                                {item.date}
                              </p>

                              <h3 className="mt-2 text-lg font-semibold leading-snug text-[#263d35] sm:text-xl">
                                {item.title}
                              </h3>
                            </div>
                          </div>

                          <p className="mt-5 text-sm leading-7 text-[#73756f] sm:text-base">
                            {item.text}
                          </p>
                        </article>
                      </div>

                      <div className="absolute left-[7px] top-7 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#fbfaf6] bg-[#b79b62] shadow-sm md:left-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SILENCE */}
      <section className="relative overflow-hidden bg-[#263d35] px-5 py-20 text-white sm:px-6 sm:py-24">
        <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-[#d6c7a8]/10" />

        <Reveal className="relative mx-auto max-w-4xl text-center">
          <Clock3
            size={36}
            strokeWidth={1.25}
            className="mx-auto text-[#d6c7a8]"
          />

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d6c7a8] sm:text-xs">
            Une partie de notre histoire
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Même le silence fait partie du chemin.
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
            <p>
              Les obligations professionnelles ont progressivement rendu
              difficile le maintien du programme. Il y eut des reprises,
              puis des silences. Des tentatives pour recommencer, puis
              de nouvelles interruptions.
            </p>

            <p>
              Jusqu’à ce qu’un silence plus long s’installe après le
              dernier Ramadan.
            </p>

            <p className="text-white">
              Pourtant, l’idée n’était pas morte.
            </p>
          </div>
        </Reveal>
      </section>

      {/* RENAISSANCE */}
      <section className="bg-[#f5f1e8] px-5 py-20 sm:px-6 sm:py-24">
        <Reveal className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#92794a] sm:text-xs">
                Une nouvelle étape
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#263d35] sm:text-4xl md:text-5xl">
                De l’idée à une vision plus large.
              </h2>

              <div className="mt-7 h-px w-14 bg-[#b79b62]" />
            </div>

            <div className="space-y-5 text-sm leading-7 text-[#73756f] sm:text-base sm:leading-8">
              <p>
                Après plusieurs assises spirituelles, la réflexion s’est
                approfondie. Le désir de créer une ONG portant le nom de
                Parlons Islam a progressivement émergé.
              </p>

              <p>
                Mais avant de créer une structure, il fallait prendre
                le temps de réfléchir, de s’organiser et de définir
                clairement ce que nous voulions transmettre.
              </p>

              <p className="font-medium text-[#344840]">
                Le site est ainsi devenu une première étape.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* AUJOURD’HUI */}
      <section className="relative overflow-hidden border-t border-[#ddd3bf] bg-[#fbfaf6] px-5 py-20 sm:px-6 sm:py-24">
        <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-[#b79b62]" />

        <Reveal className="relative mx-auto max-w-4xl text-center">
          <Sparkles
            size={34}
            strokeWidth={1.3}
            className="mx-auto text-[#92794a]"
          />

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#92794a] sm:text-xs">
            Aujourd’hui
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#263d35] sm:text-4xl md:text-5xl">
            Parlons Islam commence une nouvelle page.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-[#73756f] sm:text-base sm:leading-8">
            Cette plateforme est appelée à rassembler des ressources autour
            du Coran, de la Sunna, du fiqh malikite, du Taṣawwuf et de la
            Ṭarīqa Tijāniyya, dans un esprit d’étude, de transmission et
            de recherche du bien.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#73756f] sm:text-base sm:leading-8">
            Mais ce site n’est qu’une étape. D’autres projets, d’autres
            contenus et peut-être d’autres formes de service verront le jour
            avec le temps.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-[#263d35] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(38,61,53,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#192c26] hover:shadow-[0_16px_32px_rgba(38,61,53,0.16)] sm:px-7 sm:py-4 sm:text-base"
            >
              Continuer vers Parlons Islam

              <ArrowRight
                size={18}
                strokeWidth={1.4}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
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
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}