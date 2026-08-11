import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import {
  Heart,
  BookOpen,
  Sparkles,
} from "lucide-react";


export default function DefinitionTassawufPage() {


  return (

    <main className="min-h-screen bg-white">


      <Menu />



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
            Qu'est-ce que le Taṣawwuf ?
          </h1>



          <p
            className="
              mt-5
              text-lg
              text-gray-600
            "
          >
            La science de la purification du cœur et de l'excellence spirituelle.
          </p>


        </div>


      </section>





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
              Le Taṣawwuf et l'Iḥsān
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
Le Taṣawwuf correspond à la dimension intérieure de l'Islam.

Il cherche à réaliser le degré de l'Iḥsān mentionné dans le célèbre Hadith de
Jibrīl عليه السلام :

"Que tu adores Allah comme si tu Le voyais, et si tu ne Le vois pas, sache
qu'Il te voit."

Son objectif est de purifier le cœur afin que les actes du croyant soient
accomplis avec sincérité, présence et amour d'Allah.
`}
            </p>


          </article>





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
              Le but du cheminement spirituel
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
Le chemin du Taṣawwuf vise à débarrasser l'âme de ses défauts et à développer
les nobles qualités.

Le disciple cherche à délaisser l'orgueil, l'envie et l'attachement excessif
au monde pour développer l'humilité, la patience, la gratitude et la sincérité.

La purification intérieure accompagne donc l'application de la Sharīʿa.
`}
            </p>


          </article>





          <article
            className="
              rounded-3xl
              border
              border-green-100
              p-8
            "
          >


            <h2
              className="
                text-3xl
                font-bold
                text-green-900
              "
            >
              Taṣawwuf, Sharīʿa et Fiqh
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
Dans la tradition du Taṣawwuf sunnite, la spiritualité ne s'oppose pas à la
science religieuse.

La Sharīʿa représente le chemin extérieur de l'obéissance, tandis que le
Taṣawwuf travaille l'état intérieur du serviteur.

Les maîtres ont toujours insisté sur l'union entre la connaissance, la
pratique et la purification du cœur.
`}
            </p>


          </article>



        </div>


      </section>




      <Footer />


    </main>

  );

}