import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import {
  History,
  BookOpen,
  Heart,
} from "lucide-react";


export default function HistoireTassawufPage() {

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
        "
      >

        <div
          className="
            mx-auto
            max-w-5xl
            px-6
            text-center
          "
        >

          <History
            size={60}
            className="mx-auto text-green-900"
          />


          <h1
            className="
              mt-6
              text-4xl
              font-bold
              text-green-900
            "
          >
            Histoire du Taṣawwuf
          </h1>


          <p
            className="
              mt-5
              text-lg
              text-gray-600
            "
          >
            Des origines spirituelles de l'Islam
            aux grandes voies de cheminement vers Allah.
          </p>


        </div>

      </section>





      {/* Contenu */}

      <section className="py-12">

        <div
          className="
            mx-auto
            max-w-4xl
            space-y-10
            px-6
          "
        >



          <article className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">

            <Heart
              size={40}
              className="text-green-900"
            />

            <h2 className="mt-5 text-2xl font-bold text-green-900">
              Chapitre 1 — Les origines du Taṣawwuf
            </h2>


            <p className="mt-5 whitespace-pre-line leading-relaxed text-gray-700">
{`
Les savants de l'histoire de la pensée islamique ont divergé sur
la question des origines du Taṣawwuf.

Selon les maîtres de la spiritualité islamique, le Taṣawwuf trouve
ses racines dans le Coran et la Sunna du Prophète Muhammad ﷺ.

Il est fondé sur la purification de l'âme (Tazkiyat an-Nafs),
le rappel d'Allah (Dhikr), la sincérité, l'humilité et l'amélioration
du caractère.

Allah dit :

"Certes a réussi celui qui la purifie."
(Sourate Ash-Shams, 91:9)

Le but du chemin spirituel est de purifier le cœur afin que le
serviteur atteigne l'excellence de l'adoration (Ihsân).
`}
            </p>

          </article>






          <article className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">

            <BookOpen
              size={40}
              className="text-green-900"
            />


            <h2 className="mt-5 text-2xl font-bold text-green-900">
              Chapitre 2 — Les Ahl as-Suffa : les premiers modèles spirituels
            </h2>


            <p className="mt-5 whitespace-pre-line leading-relaxed text-gray-700">
{`
Les Ahl as-Suffa, les Gens de l'estrade, étaient des compagnons
du Prophète ﷺ qui vivaient auprès de la mosquée de Médine.

Ils avaient choisi une vie consacrée à l'adoration, à l'étude du
Coran et au rappel d'Allah.

Ils représentent pour beaucoup de maîtres spirituels un exemple
de détachement du monde (zuhd) et de recherche de la proximité
divine.
`}
            </p>


          </article>






          <article className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">


            <h2 className="text-2xl font-bold text-green-900">
              Chapitre 3 — Les premiers héritiers du chemin spirituel
            </h2>


            <p className="mt-5 whitespace-pre-line leading-relaxed text-gray-700">
{`
Après les compagnons, plusieurs générations ont conservé cet
héritage spirituel.

Des figures comme Al-Hasan al-Basrî ont insisté sur la crainte
révérencielle d'Allah, la sincérité et la lutte contre les passions
de l'âme.

La spiritualité islamique s'est progressivement organisée autour
de l'éducation intérieure et de la purification du cœur.
`}
            </p>


          </article>






          <article className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">


            <h2 className="text-2xl font-bold text-green-900">
              Chapitre 4 — Junayd de Bagdad et l'école de la sobriété
            </h2>


            <p className="mt-5 whitespace-pre-line leading-relaxed text-gray-700">
{`
L'Imam Junayd de Bagdad est considéré comme l'une des grandes
figures du Taṣawwuf classique.

Il a insisté sur l'attachement à la Sharî'a, la discipline intérieure
et l'équilibre entre la connaissance religieuse et l'expérience
spirituelle.

Pour lui, le véritable soufi est celui dont le cœur est attaché à
Allah tout en restant fidèle aux enseignements du Prophète ﷺ.
`}
            </p>


          </article>







          <article className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">


            <h2 className="text-2xl font-bold text-green-900">
              Chapitre 5 — Al-Ghazâlî : la renaissance spirituelle
            </h2>


            <p className="mt-5 whitespace-pre-line leading-relaxed text-gray-700">
{`
L'Imam Abû Hâmid Al-Ghazâlî a joué un rôle majeur dans la
réhabilitation du Taṣawwuf.

Dans son œuvre Ihyâ' Ulûm ad-Dîn, il a montré l'importance
d'unir la science religieuse, la pratique et la purification du cœur.

Il a rappelé que la voie spirituelle ne peut être séparée de la
Sharî'a.
`}
            </p>


          </article>






          <article className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">


            <h2 className="text-2xl font-bold text-green-900">
              Chapitre 6 — Les grandes ṭuruq soufies
            </h2>


            <p className="mt-5 whitespace-pre-line leading-relaxed text-gray-700">
{`
Avec le temps, l'enseignement spirituel s'est transmis à travers
des voies organisées appelées ṭuruq.

Parmi les plus connues :

- La Qâdiriyya
- La Shâdhiliyya
- La Tijāniyya

Ces voies ont pour objectif l'éducation spirituelle du disciple,
le dhikr et la recherche de la proximité d'Allah.
`}
            </p>


          </article>







          <article className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">


            <h2 className="text-2xl font-bold text-green-900">
              Chapitre 7 — Vers la Tarîqa Tijāniyya
            </h2>


            <p className="mt-5 whitespace-pre-line leading-relaxed text-gray-700">
{`
Le Taṣawwuf s'est ensuite développé au Maghreb puis en Afrique
de l'Ouest.

La Tarîqa Tijāniyya, fondée par Cheikh Ahmad at-Tijânî
(1737-1815), s'inscrit dans cette tradition de purification,
de dhikr et d'attachement au Prophète Muhammad ﷺ.

Elle deviendra l'une des grandes voies spirituelles répandues
en Afrique et dans le monde musulman.
`}
            </p>


          </article>



        </div>

      </section>




      <Footer />


    </main>

  );

}