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
    text: "Oumar Sylla, Mamadou Koné, Seydou Eddu Diawara et Kerfala Savané décident de commencer simplement. Un groupe WhatsApp est créé. L'ambition est modeste dans sa forme, mais profonde dans son intention.",
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
  {
    name: "Oumar Sylla",
    role: "Co-fondateur",
  },
  {
    name: "Mamadou Koné",
    role: "Co-fondateur",
  },
  {
    name: "Seydou Eddu Diawara",
    role: "Co-fondateur",
  },
  {
    name: "Kerfala Savané",
    role: "Co-fondateur",
  },
];

export default function NotreHistoirePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ec] text-slate-800">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative min-h-[650px] overflow-hidden text-white">

        <Image
         src="/images/zaouia.jpeg"
          alt="Zāwiya marocaine"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#14231f]/75" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#14231f]" />

        <div className="relative mx-auto flex min-h-[650px] max-w-6xl flex-col px-6 py-8">

          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Retour à l'accueil
          </Link>

          <div className="mx-auto flex flex-1 max-w-4xl items-center justify-center text-center">

            <div>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d5bd82]/50 bg-black/20 backdrop-blur-sm">
                <Moon
                  size={30}
                  strokeWidth={1.5}
                  className="text-[#d5bd82]"
                />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.35em] text-[#e0ca92]">
                Notre histoire
              </p>

              <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
                Une idée née entre frères.
              </h1>

              <p className="mt-4 text-3xl font-light text-[#e0ca92] md:text-5xl">
                Un chemin de transmission.
              </p>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                Depuis juin 2023, Parlons Islam avance entre réflexions,
                apprentissages, silences et renaissances, avec une même
                intention : partager le bien et contribuer à la transmission
                du savoir islamique.
              </p>

              <div className="mt-10 flex justify-center">
                <a
                  href="#commencement"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-sm transition hover:bg-white/20"
                >
                  Découvrir notre histoire
                  <ArrowRight size={17} />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* COMMENCEMENT */}
      {/* ========================================================= */}

      <section
        id="commencement"
        className="bg-[#fbfaf6] py-24"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9b8150]">
            Le commencement
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#263d35] md:text-5xl">
            Avant le site, il y avait une intention.
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-600">

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

        </div>
      </section>

      {/* ========================================================= */}
      {/* FONDATEURS */}
      {/* ========================================================= */}

      <section className="bg-[#eee8da] py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8d7447]">
              À l'origine
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#263d35] md:text-5xl">
              Quatre frères
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Quatre personnes, une intention commune et une première
              initiative qui allait progressivement prendre de l'ampleur.
            </p>

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className="group rounded-[2rem] border border-[#ded4bd] bg-[#fffdf8] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d5bd82] bg-[#f0eadb] text-[#806a42] transition group-hover:scale-105">
                  <Users size={30} strokeWidth={1.5} />
                </div>

                <p className="mt-6 text-xl font-semibold text-[#263d35]">
                  {founder.name}
                </p>

                <p className="mt-2 text-sm text-[#9b8150]">
                  {founder.role}
                </p>

                <div className="mx-auto mt-5 h-px w-10 bg-[#d5bd82]" />

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  L'un des quatre frères à l'origine de Parlons Islam.
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CHRONOLOGIE */}
      {/* ========================================================= */}

      <section className="bg-[#fbfaf6] py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9b8150]">
              Juin 2023 → aujourd'hui
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#263d35] md:text-5xl">
              Un chemin fait de saisons
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Comme tout projet porté par des hommes, Parlons Islam a connu
              des élans, des difficultés, des pauses et de nouveaux départs.
            </p>

          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">

            <div className="absolute bottom-0 left-6 top-0 w-px bg-[#d8ccb0] md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">

              {timeline.map((item, index) => {

                const Icon = item.icon;
                const right = index % 2 !== 0;

                return (
                  <div
                    key={item.title}
                    className="relative md:grid md:grid-cols-2 md:gap-16"
                  >

                    <div
                      className={
                        right
                          ? "md:col-start-2"
                          : "md:col-start-1"
                      }
                    >

                      <article className="ml-12 rounded-[2rem] border border-[#e3dccb] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:ml-0">

                        <div className="flex items-start gap-4">

                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eee8da] text-[#806a42]">
                            <Icon size={22} strokeWidth={1.6} />
                          </div>

                          <div>

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b8150]">
                              {item.date}
                            </p>

                            <h3 className="mt-2 text-xl font-semibold text-[#263d35]">
                              {item.title}
                            </h3>

                          </div>

                        </div>

                        <p className="mt-5 leading-7 text-slate-600">
                          {item.text}
                        </p>

                      </article>

                    </div>

                    <div className="absolute left-6 top-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#fbfaf6] bg-[#b89a5d] md:left-1/2" />

                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* LES SILENCES */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#263d35] py-24 text-white">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[#d5bd82]/10" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <Clock3
            size={38}
            strokeWidth={1.3}
            className="mx-auto text-[#d5bd82]"
          />

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-[#d5bd82]">
            Une partie de notre histoire
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Même le silence fait partie du chemin.
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-8 text-white/70">

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

        </div>
      </section>

      {/* ========================================================= */}
      {/* RENAISSANCE */}
      {/* ========================================================= */}

      <section className="bg-[#f7f4ec] py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9b8150]">
                Une nouvelle étape
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#263d35] md:text-5xl">
                De l'idée à une vision plus large.
              </h2>

            </div>

            <div className="space-y-5 leading-8 text-slate-600">

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
        </div>
      </section>

      {/* ========================================================= */}
      {/* AUJOURD'HUI */}
      {/* ========================================================= */}

      <section className="bg-[#eee8da] py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <Sparkles
            size={38}
            strokeWidth={1.4}
            className="mx-auto text-[#9b8150]"
          />

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-[#806a42]">
            Aujourd'hui
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#263d35] md:text-5xl">
            Parlons Islam commence une nouvelle page.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Cette plateforme est appelée à rassembler des ressources autour
            du Coran, de la Sunna, du fiqh malikite, du Taṣawwuf et de la
            Ṭarīqa Tijâniyya, dans un esprit d'étude, de transmission et
            de recherche du bien.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Mais ce site n'est qu'une étape. D'autres projets, d'autres
            contenus et peut-être d'autres formes de service verront le jour
            avec le temps.
          </p>

          <div className="mt-10 flex justify-center">

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#263d35] px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-[#192c26]"
            >
              Continuer vers Parlons Islam
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}