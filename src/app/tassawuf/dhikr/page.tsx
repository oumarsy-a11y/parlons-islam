import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Heart,
  Sparkles,
  Compass,
  MessageCircle,
  CircleHelp,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Dhikr : rappel d’Allah, Coran et spiritualité — Parlons Islam",
  description:
    "Comprendre le dhikr en islam : ses fondements coraniques, ses formes, ses mérites selon la Sunna et sa place dans le taṣawwuf.",
  alternates: {
    canonical: "/tassawuf/dhikr",
  },
  openGraph: {
    title: "Le Dhikr : le rappel d’Allah",
    description:
      "Une introduction au rappel d’Allah à travers le Coran, la Sunna et la spiritualité islamique.",
    url: "/tassawuf/dhikr",
    type: "article",
  },
};

const cardClass =
  "rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8";
const headingClass = "mt-4 text-2xl font-bold text-green-900 sm:text-3xl";
const paragraphClass = "mt-4 leading-8 text-gray-700";

export default function DhikrPage() {
  return (
    <main className="min-h-screen bg-white">
      <Menu />

      <header className="bg-gradient-to-b from-green-50 via-green-50/60 to-white py-16 text-center sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Heart
            size={54}
            strokeWidth={1.5}
            className="mx-auto text-green-900"
            aria-hidden="true"
          />
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-green-800">
            Science · Spiritualité · Transmission
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-green-950 sm:text-6xl">
            Le Dhikr
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Le rappel d’Allah, nourriture du cœur et présence du croyant au
            milieu des occupations de la vie.
          </p>
        </div>
      </header>

      <nav
        aria-label="Sommaire de la page"
        className="mx-auto max-w-4xl px-6 py-6"
      >
        <div className="rounded-2xl border border-green-100 bg-green-50/70 p-5">
          <p className="font-semibold text-green-950">Dans cet article</p>
          <ul className="mt-3 grid gap-2 text-sm text-green-900 sm:grid-cols-2">
            <li><a className="underline decoration-green-300 underline-offset-4" href="#definition">Définition du dhikr</a></li>
            <li><a className="underline decoration-green-300 underline-offset-4" href="#coran">Le dhikr dans le Coran</a></li>
            <li><a className="underline decoration-green-300 underline-offset-4" href="#formes">Les formes du rappel</a></li>
            <li><a className="underline decoration-green-300 underline-offset-4" href="#sunna">Le dhikr dans la Sunna</a></li>
            <li><a className="underline decoration-green-300 underline-offset-4" href="#tassawuf">Le dhikr et le taṣawwuf</a></li>
            <li><a className="underline decoration-green-300 underline-offset-4" href="#pratique">Comment le pratiquer</a></li>
            <li><a className="underline decoration-green-300 underline-offset-4" href="#faq">Questions fréquentes</a></li>
          </ul>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl space-y-8 px-6 pb-12">
        <section id="definition" aria-labelledby="definition-title" className={cardClass}>
          <BookOpen size={36} className="text-green-900" aria-hidden="true" />
          <h2 id="definition-title" className={headingClass}>
            Qu’est-ce que le dhikr ?
          </h2>
          <p className={paragraphClass}>
            Le mot arabe <em>dhikr</em> (ذكر) signifie notamment le rappel, la
            mention ou la remémoration. Dans le langage religieux, il désigne
            le fait de se souvenir d’Allah, de Le mentionner et de tourner son
            attention vers Lui par les paroles, la récitation, l’invocation et
            l’obéissance.
          </p>
          <p className={paragraphClass}>
            Le dhikr ne se réduit pas à la répétition mécanique d’une formule.
            La langue peut prononcer une parole de rappel tandis que le cœur
            s’efforce d’en comprendre le sens. L’idéal est de réunir, autant
            que possible, la parole, la compréhension, la sincérité et les
            effets de ce rappel dans la conduite quotidienne.
          </p>
          <p className={paragraphClass}>
            Se rappeler Allah, c’est aussi se souvenir de Ses bienfaits, de Ses
            commandements et de notre responsabilité devant Lui. Un rappel
            bénéfique doit nourrir l’humilité, la gratitude, la patience et le
            bon comportement envers les créatures.
          </p>
        </section>

        <section
          id="coran"
          aria-labelledby="coran-title"
          className="rounded-3xl bg-green-50 p-6 sm:p-8"
        >
          <Sparkles size={36} className="text-green-900" aria-hidden="true" />
          <h2 id="coran-title" className={headingClass}>
            Le dhikr dans le Coran
          </h2>
          <p className={paragraphClass}>
            Le rappel d’Allah occupe une place importante dans le Coran. Il est
            associé à la sérénité du cœur, à la gratitude et à la persévérance
            dans la foi.
          </p>

          <blockquote className="mt-6 border-l-4 border-green-800 pl-5">
            <p className="text-lg leading-8 text-green-950">
              « Ô vous qui croyez ! Évoquez Allah d’une façon abondante et
              glorifiez-Le à la pointe et au déclin du jour. »
            </p>
            <footer className="mt-3 text-sm font-medium text-green-800">
              Coran, sourate Al-Aḥzāb, 33:41-42 — traduction rapprochée du sens
            </footer>
          </blockquote>

          <blockquote className="mt-6 border-l-4 border-green-800 pl-5">
            <p className="text-lg leading-8 text-green-950">
              « N’est-ce point par l’évocation d’Allah que les cœurs se
              tranquillisent ? »
            </p>
            <footer className="mt-3 text-sm font-medium text-green-800">
              Coran, sourate Ar-Raʿd, 13:28 — traduction rapprochée du sens
            </footer>
          </blockquote>

          <p className={paragraphClass}>
            Ces versets encouragent le croyant à maintenir le rappel dans sa
            vie. La sérénité évoquée ne signifie pas que toute difficulté
            disparaît immédiatement : elle invite à rechercher auprès d’Allah
            une stabilité intérieure, même lorsque les épreuves demeurent.
          </p>
        </section>

        <section id="formes" aria-labelledby="formes-title" className={cardClass}>
          <Compass size={36} className="text-green-900" aria-hidden="true" />
          <h2 id="formes-title" className={headingClass}>
            Les différentes formes du dhikr
          </h2>
          <p className={paragraphClass}>
            Le rappel d’Allah peut prendre plusieurs formes complémentaires.
            Elles ne s’opposent pas : chacune peut contribuer à nourrir la foi
            lorsqu’elle est pratiquée avec sincérité et conformément aux
            enseignements de l’islam.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-green-100 p-5">
              <h3 className="text-lg font-semibold text-green-900">
                1. Le rappel par la langue
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Il comprend la glorification d’Allah, la louange, la demande
                de pardon, les invocations et les formules de rappel
                authentiquement transmises.
              </p>
            </article>
            <article className="rounded-2xl border border-green-100 p-5">
              <h3 className="text-lg font-semibold text-green-900">
                2. Le rappel par le cœur
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Il consiste à se souvenir d’Allah, à méditer Ses signes, à
                reconnaître Ses bienfaits et à cultiver la conscience de Sa
                présence et de notre responsabilité devant Lui.
              </p>
            </article>
            <article className="rounded-2xl border border-green-100 p-5">
              <h3 className="text-lg font-semibold text-green-900">
                3. Le rappel par le Coran
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Lire le Livre d’Allah, écouter sa récitation et méditer ses
                enseignements permettent de renouveler son rappel et d’orienter
                ses actes.
              </p>
            </article>
            <article className="rounded-2xl border border-green-100 p-5">
              <h3 className="text-lg font-semibold text-green-900">
                4. Le rappel par les actes
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Obéir à Allah, agir avec justice, respecter les engagements,
                aider autrui et s’éloigner de l’injustice sont des manières de
                traduire concrètement la conscience de Dieu.
              </p>
            </article>
          </div>
        </section>

        <section id="sunna" aria-labelledby="sunna-title" className={cardClass}>
          <BookOpen size={36} className="text-green-900" aria-hidden="true" />
          <h2 id="sunna-title" className={headingClass}>
            Le dhikr dans la Sunna
          </h2>
          <p className={paragraphClass}>
            La Sunna du Prophète Muḥammad ﷺ accorde une grande importance au
            rappel d’Allah. Les recueils de hadiths rapportent plusieurs
            enseignements encourageant cette pratique.
          </p>

          <blockquote className="mt-6 rounded-2xl bg-green-50 p-5 sm:p-6">
            <p className="leading-8 text-green-950">
              Le Prophète ﷺ rapporte, dans un hadith qudsī, qu’Allah dit :
              « Je suis avec Mon serviteur lorsqu’il se souvient de Moi. »
            </p>
            <footer className="mt-3 text-sm font-medium text-green-800">
              Ṣaḥīḥ al-Bukhārī, no 7405 — référence à vérifier selon l’édition
            </footer>
          </blockquote>

          <blockquote className="mt-5 rounded-2xl bg-green-50 p-5 sm:p-6">
            <p className="leading-8 text-green-950">
              Le Prophète ﷺ a enseigné que les expressions « Subḥān Allāh »
              et « Al-ḥamdu li-Llāh » comptent parmi les paroles aimées
              d’Allah.
            </p>
            <footer className="mt-3 text-sm font-medium text-green-800">
              Voir Ṣaḥīḥ Muslim, no 2731 — numérotation susceptible de varier
            </footer>
          </blockquote>

          <p className={paragraphClass}>
            Ces références invitent à apprendre les formules de rappel avec
            leur sens, à les pratiquer régulièrement et à éviter d’attribuer
            au Prophète ﷺ une formule, un nombre ou une récompense sans preuve
            suffisamment établie.
          </p>
        </section>

        <section id="tassawuf" aria-labelledby="tassawuf-title" className={cardClass}>
          <Heart size={36} className="text-green-900" aria-hidden="true" />
          <h2 id="tassawuf-title" className={headingClass}>
            Le dhikr dans le taṣawwuf
          </h2>
          <p className={paragraphClass}>
            Le taṣawwuf, dans sa dimension de purification intérieure,
            accorde une place importante au rappel d’Allah. Celui-ci aide le
            croyant à lutter contre la distraction, à examiner ses intentions
            et à travailler les maladies du cœur telles que l’orgueil,
            l’ostentation, l’envie et l’attachement excessif aux biens
            matériels.
          </p>
          <p className={paragraphClass}>
            Les voies spirituelles musulmanes ont transmis des pratiques
            individuelles ou collectives de dhikr. Les modalités, les formules
            et les règles peuvent varier selon les traditions et les
            enseignements reçus. Ces différences doivent être étudiées avec
            connaissance, respect et discernement.
          </p>
          <p className={paragraphClass}>
            Dans l’approche sunnite malikite, le rappel demeure lié à la
            sincérité, à l’observance des obligations et au respect de la
            Sharīʿa. Le cheminement spirituel ne remplace ni la prière, ni les
            devoirs envers autrui, ni l’étude des enseignements religieux.
          </p>
          <p className={paragraphClass}>
            La Tijāniyya, comme d’autres voies, possède des pratiques
            particulières de rappel et de transmission. Pour les comprendre,
            il convient de consulter leurs sources propres et de distinguer
            les textes fondateurs, les commentaires des maîtres et les
            habitudes culturelles.
          </p>
          <a
            href="/tijaniyya"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-green-900 underline decoration-green-300 underline-offset-4 hover:decoration-green-900"
          >
            Découvrir la Ṭarīqa Tijāniyya
          </a>
        </section>

        <section id="pratique" aria-labelledby="pratique-title" className="rounded-3xl bg-green-50 p-6 sm:p-8">
          <Sparkles size={36} className="text-green-900" aria-hidden="true" />
          <h2 id="pratique-title" className={headingClass}>
            Comment intégrer le dhikr à son quotidien ?
          </h2>
          <p className={paragraphClass}>
            Il est possible de commencer simplement, sans chercher à accomplir
            immédiatement de longues séances. La régularité, la compréhension
            du sens et la sincérité sont essentielles.
          </p>
          <ol className="mt-6 space-y-4">
            <li className="flex gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-900 text-sm font-semibold text-white">1</span>
              <div>
                <h3 className="font-semibold text-green-950">Choisir un moment adapté</h3>
                <p className="mt-1 leading-7 text-gray-700">
                  Réserver quelques minutes après une prière, le matin ou le
                  soir, en tenant compte de ses obligations.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-900 text-sm font-semibold text-white">2</span>
              <div>
                <h3 className="font-semibold text-green-950">Comprendre les paroles</h3>
                <p className="mt-1 leading-7 text-gray-700">
                  Apprendre le sens de formules telles que Subḥān Allāh,
                  Al-ḥamdu li-Llāh, Lā ilāha illa-Llāh et Astaghfiru-Llāh.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-900 text-sm font-semibold text-white">3</span>
              <div>
                <h3 className="font-semibold text-green-950">Privilégier la constance</h3>
                <p className="mt-1 leading-7 text-gray-700">
                  Commencer par une pratique raisonnable et régulière, sans
                  négliger le sommeil, la famille, le travail ou les devoirs
                  religieux.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-900 text-sm font-semibold text-white">4</span>
              <div>
                <h3 className="font-semibold text-green-950">Observer les fruits spirituels</h3>
                <p className="mt-1 leading-7 text-gray-700">
                  Examiner si cette pratique favorise l’humilité, la patience,
                  la gratitude et un meilleur comportement envers les autres.
                </p>
              </div>
            </li>
          </ol>
          <p className="mt-6 rounded-2xl border border-green-200 bg-white p-5 leading-7 text-gray-700">
            <strong>À retenir :</strong> il n’est pas nécessaire de rechercher
            des sensations particulières pour considérer son dhikr comme
            bénéfique. La sincérité et la persévérance comptent davantage que
            la recherche d’expériences extraordinaires.
          </p>
        </section>

        <section id="faq" aria-labelledby="faq-title" className={cardClass}>
          <CircleHelp size={36} className="text-green-900" aria-hidden="true" />
          <h2 id="faq-title" className={headingClass}>
            Questions fréquentes sur le dhikr
          </h2>

          <div className="mt-6 space-y-6">
            <article>
              <h3 className="text-lg font-semibold text-green-900">
                Peut-on faire le dhikr sans parler à voix haute ?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Le rappel intérieur et la méditation ont leur place. Certaines
                formes de dhikr se font à voix basse ou à voix audible selon
                les textes et les circonstances. Il convient de distinguer
                les pratiques établies par les textes des modalités discutées
                par les savants.
              </p>
            </article>

            <article>
              <h3 className="text-lg font-semibold text-green-900">
                Faut-il obligatoirement utiliser un chapelet ?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Non. Le croyant peut compter sur ses doigts ou utiliser un
                moyen de comptage. Les savants ont discuté de l’usage du
                chapelet ; il faut éviter de présenter une seule modalité
                comme unanimement imposée.
              </p>
            </article>

            <article>
              <h3 className="text-lg font-semibold text-green-900">
                Le dhikr remplace-t-il les obligations religieuses ?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Non. Le rappel d’Allah ne dispense pas de la prière obligatoire,
                du respect des droits d’autrui ou des autres obligations
                religieuses. Il doit soutenir la pratique de la foi, et non
                servir de prétexte pour l’abandonner.
              </p>
            </article>

            <article>
              <h3 className="text-lg font-semibold text-green-900">
                Doit-on toujours ressentir une sérénité pendant le dhikr ?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Non. Les émotions varient. L’absence d’une sensation
                particulière ne prouve pas l’absence de sincérité ou de
                bénéfice. Il est préférable de poursuivre avec patience et
                équilibre.
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="sources-title" className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <MessageCircle size={32} className="text-green-900" aria-hidden="true" />
          <h2 id="sources-title" className="mt-4 text-xl font-bold text-green-950">
            Sources et approfondissement
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 leading-7 text-gray-700">
            <li>Le Coran : sourates Al-Aḥzāb, 33:41-42, et Ar-Raʿd, 13:28.</li>
            <li>Ṣaḥīḥ al-Bukhārī : hadith no 7405, selon une numérotation courante.</li>
            <li>Ṣaḥīḥ Muslim : recueils de traditions consacrées au dhikr et aux invocations.</li>
          </ul>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Les numérotations peuvent varier selon les éditions. Pour une étude
            approfondie, consulter le texte arabe, le contexte du hadith et
            les commentaires reconnus. Les traductions françaises rendent le
            sens des textes sans remplacer leur étude.
          </p>
        </section>

        <section aria-labelledby="approfondir-title" className="pb-4">
          <h2 id="approfondir-title" className="mb-5 text-2xl font-bold text-green-900">
            Poursuivre la lecture
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/tassawuf/definition"
              className="rounded-2xl border border-green-100 bg-white p-5 transition hover:border-green-800"
            >
              <h3 className="font-semibold text-green-900">Comprendre le taṣawwuf</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Découvrir les fondements de la purification du cœur.
              </p>
            </a>
            <a
              href="/tassawuf/histoire"
              className="rounded-2xl border border-green-100 bg-white p-5 transition hover:border-green-800"
            >
              <h3 className="font-semibold text-green-900">Son histoire</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Replacer le cheminement spirituel dans son histoire.
              </p>
            </a>
            <a
              href="/tijaniyya"
              className="rounded-2xl border border-green-100 bg-white p-5 transition hover:border-green-800"
            >
              <h3 className="font-semibold text-green-900">La Tijāniyya</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Découvrir cette voie spirituelle musulmane.
              </p>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
