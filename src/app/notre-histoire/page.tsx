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
import Reveal from "@/components/Reveal";

const timeline = [
  {
    date: "Juin 2023",
    title: "Tout commence par une intention",
    icon: Lightbulb,
    text: "À la veille du Ramadan, quatre frères partagent une même idée : créer un espace où les enseignements islamiques pourraient être partagés, étudiés et transmis.",
  },
  {
    date: "Les débuts",
    title: "Un groupe WhatsApp",
    icon: MessageCircle,
    text: " Mamadou Koné, Seydou Eddu Diawara , Kerfala Savané et Oumar Sylla décident de commencer simplement. Un groupe WhatsApp est créé. L'ambition est modeste dans sa forme, mais profonde dans son intention.",
  },
  {
    date: "Puis viennent les adhérents",
    title: "Le partage fait grandir le cercle",
    icon: Users,
    text: "Des liens, des rappels et différents contenus sont partagés. Peu à peu, de nouvelles personnes rejoignent le groupe et l'idée initiale prend une dimension plus large.",
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
    title: "Le projet d'une ONG",
    icon: Sparkles,
    text: "L'idée de créer une ONG portant le nom de Parlons Islam commence alors à prendre forme. Mais avant de franchir cette étape, il faut prendre le temps de réfléchir, de structurer et de préparer l'avenir.",
  },
  {
    date: "Aujourd'hui",
    title: "Le site devient une nouvelle étape",
    icon: BookOpen,
    text: "Avant même la création de cette future structure, le choix est fait de construire une plateforme numérique. Le site Parlons Islam devient ainsi une nouvelle manière de poursuivre l'intention qui avait vu le jour en 2023.",
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
    <main className="min-h-screen overflow-hidden bg-[#f7f4ec] text-slate-800">

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden text-white">

        <Image
          src="/images/zaouia.jpeg"
          alt="Zāwiya marocaine"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-[3000ms] hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#14231f]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#14231f]/20 to-[#14231f]" />

        <div className="relative mx-auto flex min-h-[680px] max-w-6xl flex-col px-5 py-7 sm:px-6">

          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition-transform group-hover:-translate-x-1"
            />
            Retour à l'accueil
          </Link>

          <div className="flex flex-1 items-center justify-center text-center">

            <Reveal className="max-w-4xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d5bd82]/60 bg-black/20 shadow-2xl backdrop-blur-md">
                <Moon
                  size={30}
                  strokeWidth={1.4}
                  className="text-[#e1c986]"
                />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.35em] text-[#e1c986] sm:text-sm">
                Notre histoire
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
                Une idée née entre frères.
              </h1>

              <p className="mt-4 text-2xl font-light text-[#e0ca92] sm:text-4xl md:text-5xl">
                Un chemin de transmission.
              </p>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
                Depuis juin 2023, Parlons Islam avance entre réflexions,
                apprentissages, silences et renaissances, avec une même
                intention : partager le bien et contribuer à la transmission
                du savoir islamique.
              </p>

              <div className="mt-9 flex justify-center">
                <a
                  href="#commencement"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:bg-white/20"
                >
                  Découvrir notre histoire
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

            </Reveal>

          </div>
        </div>
      </section>

      {/* COMMENCEMENT */}
      <section id="commencement" className="bg-[#fbfaf6] py-20 sm:py-24">

        <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-6">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b8150] sm:text-sm">
            Le commencement
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#263d35] sm:text-4xl md:text-5xl">
            Avant le site, il y avait une intention.
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">

            <p>
              Parlons Islam n'est pas né d'abord comme un site internet.
              L'idée est née d'une volonté commune de partager des
              enseignements islamiques et de créer un espace où chacun
              pourrait apprendre et transmettre.
            </p>

            <p>
              À la veille du Ramadan, quatre frères décident alors de
              commencer simplement. En juin 2023, un groupe WhatsApp voit
              le jour.
            </p>

            <p>
              Ils ne savaient peut-être pas encore jusqu'où cette idée
              pourrait les conduire. Mais une première pierre venait
              d'être posée.
            </p>

          </div>

          <div className="mx-auto mt-10 h-px w-16 bg-[#c6a967]" />

        </Reveal>

      </section>

      {/* FONDATEURS */}
      <section className="bg-[#eee8da] py-20 sm:py-24">

        <div className="mx-auto max-w-6xl px-5 sm:px-6">

          <Reveal className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8d7447] sm:text-sm">
              À l'origine
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#263d35] sm:text-4xl md:text-5xl">
              Quatre frères
            </h2>

            <p className="mt-5 leading-7 text-slate-600 sm:leading-8">
              Quatre personnes, une intention commune et une première
              initiative qui allait progressivement prendre de l'ampleur.
            </p>

          </Reveal>

          <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">

            {founders.map((founder, index) => (

              <Reveal key={founder} delay={index * 0.08}>

                <div className="group h-full rounded-[2rem] border border-[#ded4bd] bg-[#fffdf8] p-7 text-center shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d5bd82] bg-[#f0eadb] text-[#806a42] transition duration-500 group-hover:rotate-3 group-hover:scale-105">
                    <Users size={30} strokeWidth={1.5} />
                  </div>

                  <p className="mt-6 text-lg font-semibold text-[#263d35] sm:text-xl">
                    {founder}
                  </p>

                  <p className="mt-2 text-sm text-[#9b8150]">
                    Co-fondateur
                  </p>

                  <div className="mx-auto mt-5 h-px w-10 bg-[#d5bd82]" />

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    L'un des quatre frères à l'origine de Parlons Islam.
                  </p>

                </div>

              </Reveal>

            ))}

          </div>
        </div>
      </section>

      {/* CHRONOLOGIE */}
      <section className="bg-[#fbfaf6] py-20 sm:py-24">

        <div className="mx-auto max-w-6xl px-5 sm:px-6">

          <Reveal className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b8150] sm:text-sm">
              Juin 2023 → aujourd'hui
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#263d35] sm:text-4xl md:text-5xl">
              Un chemin fait de saisons
            </h2>

            <p className="mt-5 leading-7 text-slate-600 sm:leading-8">
              Comme tout projet porté par des hommes, Parlons Islam a connu
              des élans, des difficultés, des pauses et de nouveaux départs.
            </p>

          </Reveal>

          <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">

            <div className="absolute bottom-0 left-5 top-0 w-px bg-[#d8ccb0] md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10 sm:space-y-12">

              {timeline.map((item, index) => {

                const Icon = item.icon;
                const right = index % 2 !== 0;

                return (

                  <Reveal key={item.title} delay={index * 0.04}>

                    <div className="relative md:grid md:grid-cols-2 md:gap-16">

                      <div className={right ? "md:col-start-2" : "md:col-start-1"}>

                        <article className="ml-10 rounded-[1.7rem] border border-[#e3dccb] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg sm:ml-0 sm:rounded-[2rem] sm:p-7">

                          <div className="flex items-start gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eee8da] text-[#806a42] sm:h-12 sm:w-12">
                              <Icon size={21} strokeWidth={1.6} />
                            </div>

                            <div>

                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b8150] sm:text-xs">
                                {item.date}
                              </p>

                              <h3 className="mt-2 text-lg font-semibold leading-snug text-[#263d35] sm:text-xl">
                                {item.title}
                              </h3>

                            </div>

                          </div>

                          <p className="mt-5 text-[15px] leading-7 text-slate-600 sm:text-base">
                            {item.text}
                          </p>

                        </article>

                      </div>

                      <div className="absolute left-5 top-7 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#fbfaf6] bg-[#b89a5d] shadow-sm md:left-1/2" />

                    </div>

                  </Reveal>

                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* SILENCE */}
      <section className="relative overflow-hidden bg-[#263d35] py-20 text-white sm:py-24">

        <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-[#d5bd82]/10" />

        <Reveal className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">

          <Clock3
            size={38}
            strokeWidth={1.3}
            className="mx-auto text-[#d5bd82]"
          />

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#d5bd82] sm:text-sm">
            Une partie de notre histoire
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Même le silence fait partie du chemin.
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">

            <p>
              Les obligations professionnelles ont progressivement rendu
              difficile le maintien du programme. Il y eut des reprises,
              puis des silences. Des tentatives pour recommencer, puis
              de nouvelles interruptions.
            </p>

            <p>
              Jusqu'à ce qu'un silence plus long s'installe après le
              dernier Ramadan.
            </p>

            <p className="text-white">
              Pourtant, l'idée n'était pas morte.
            </p>

          </div>

        </Reveal>

      </section>

      {/* RENAISSANCE */}
      <section className="bg-[#f7f4ec] py-20 sm:py-24">

        <Reveal className="mx-auto max-w-5xl px-5 sm:px-6">

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b8150] sm:text-sm">
                Une nouvelle étape
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#263d35] sm:text-4xl md:text-5xl">
                De l'idée à une vision plus large.
              </h2>

            </div>

            <div className="space-y-5 leading-7 text-slate-600 sm:leading-8">

              <p>
                Après plusieurs assises spirituelles, la réflexion s'est
                approfondie. Le désir de créer une ONG portant le nom de
                Parlons Islam a progressivement émergé.
              </p>

              <p>
                Mais avant de créer une structure, il fallait prendre
                le temps de réfléchir, de s'organiser et de définir
                clairement ce que nous voulions transmettre.
              </p>

              <p>
                Le site est ainsi devenu une première étape.
              </p>

            </div>

          </div>

        </Reveal>

      </section>

      {/* AUJOURD'HUI */}
      <section className="relative overflow-hidden bg-[#eee8da] py-20 sm:py-24">

        <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-[#d5bd82]" />

        <Reveal className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">

          <Sparkles
            size={38}
            strokeWidth={1.4}
            className="mx-auto text-[#9b8150]"
          />

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#806a42] sm:text-sm">
            Aujourd'hui
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#263d35] sm:text-4xl md:text-5xl">
            Parlons Islam commence une nouvelle page.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Cette plateforme est appelée à rassembler des ressources autour
            du Coran, de la Sunna, du fiqh malikite, du Taṣawwuf et de la
            Ṭarīqa Tijâniyya, dans un esprit d'étude, de transmission et
            de recherche du bien.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Mais ce site n'est qu'une étape. D'autres projets, d'autres
            contenus et peut-être d'autres formes de service verront le jour
            avec le temps.
          </p>

          <div className="mt-9 flex justify-center">

            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-[#263d35] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#192c26] hover:shadow-xl sm:px-7 sm:py-4 sm:text-base"
            >
              Continuer vers Parlons Islam
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

        </Reveal>

      </section>

    </main>
  );
}