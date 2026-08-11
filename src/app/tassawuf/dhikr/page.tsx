import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Heart,
  Sparkles,
} from "lucide-react";

export default function DhikrPage() {
  return (
    <main className="min-h-screen bg-white">

      <Menu />

      {/* En-tête */}

      <section
        className="
          bg-gradient-to-b
          from-green-50
          to-white
          py-20
          text-center
        "
      >

        <div className="mx-auto max-w-5xl px-6">

          <Heart
            size={60}
            className="mx-auto text-green-900"
          />

          <h1
            className="
              mt-6
              text-5xl
              font-bold
              text-green-900
            "
          >
            Le Dhikr
          </h1>

          <p
            className="
              mt-5
              text-lg
              text-gray-600
            "
          >
            Le rappel d'Allah, nourriture du cœur et lumière du croyant.
          </p>

        </div>

      </section>

      {/* Définition */}

      <section className="py-12">

        <div
          className="
            mx-auto
            max-w-4xl
            space-y-8
            px-6
          "
        >

          <article
            className="
              rounded-3xl
              border
              border-green-100
              bg-white
              p-8
              shadow-sm
            "
          >

            <BookOpen
              size={40}
              className="text-green-900"
            />

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                text-green-900
              "
            >
              Qu'est-ce que le Dhikr ?
            </h2>

            <p
              className="
                mt-4
                whitespace-pre-line
                text-lg
                leading-relaxed
                text-gray-700
              "
            >
{`
Le mot "Dhikr" signifie le rappel, la mention ou la mémoration d'Allah.

Il consiste à invoquer Allah par la langue et par le cœur, en récitant les
formules enseignées dans le Coran et la Sunna, en lisant le Coran, en
prononçant les invocations authentiques et en gardant constamment la présence
d'Allah dans sa vie.

Le Dhikr n'est pas seulement une parole : il est aussi un état intérieur qui
oriente le cœur vers son Seigneur.
`}
            </p>

          </article>

          {/* Coran */}

          <article
            className="
              rounded-3xl
              bg-green-50
              p-8
            "
          >

            <Sparkles
              size={40}
              className="text-green-900"
            />

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                text-green-900
              "
            >
              Le Dhikr dans le Coran
            </h2>

            <p
              className="
                mt-4
                whitespace-pre-line
                text-lg
                leading-relaxed
                text-gray-700
              "
            >
{`
Allah dit :

"Ô vous qui croyez ! Invoquez Allah d'une invocation abondante, et glorifiez-Le
matin et soir."

(Sourate Al-Aḥzāb, 33:41-42)

Et Il dit :

"C'est par le rappel d'Allah que les cœurs trouvent la sérénité."

(Sourate Ar-Ra'd, 13:28)

Ces versets montrent que le Dhikr est un moyen d'apaiser le cœur et de
renforcer la foi.
`}
            </p>

          </article>

          {/* Spiritualité */}

          <article
            className="
              rounded-3xl
              border
              border-green-100
              bg-white
              p-8
              shadow-sm
            "
          >

            <Heart
              size={40}
              className="text-green-900"
            />

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                text-green-900
              "
            >
              Le Dhikr dans le Taṣawwuf
            </h2>

            <p
              className="
                mt-4
                whitespace-pre-line
                text-lg
                leading-relaxed
                text-gray-700
              "
            >
{`
Les maîtres du Taṣawwuf considèrent le Dhikr comme l'un des principaux moyens
de purifier le cœur.

Pratiqué avec sincérité, présence et respect des enseignements de la Sharīʿa,
il aide le croyant à lutter contre la distraction, à renforcer sa conscience
d'Allah et à cultiver les qualités spirituelles.

Les différentes voies spirituelles ont transmis des méthodes de Dhikr dans le
cadre de la tradition islamique, tout en rappelant que le fondement demeure le
Coran et la Sunna.
`}
            </p>

          </article>

        </div>

      </section>

      <Footer />

    </main>
  );
}