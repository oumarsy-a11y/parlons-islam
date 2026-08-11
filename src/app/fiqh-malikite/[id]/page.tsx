import Link from "next/link";
import {
  Scale,
  BookOpen,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { fiqh } from "@/data/fiqh";


export default function FiqhMalikitePage() {

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

          <Scale
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
            Fiqh Malikite
          </h1>


          <p
            className="
              mt-5
              text-lg
              text-gray-600
            "
          >
            Les règles de la jurisprudence islamique selon l'école de l'Imam Mālik ibn Anas.
          </p>

        </div>

      </section>




      {/* Liste des chapitres */}

      <section className="py-16">


        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-8
            px-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >


          {fiqh.map((article) => (


            <Link

              key={article.id}

              href={`/fiqh-malikite/${article.id}`}

              className="
                rounded-3xl
                border
                border-green-100
                bg-white
                p-8
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
              "

            >


              <BookOpen
                size={45}
                className="text-green-900"
              />



              <h2
                className="
                  mt-5
                  text-2xl
                  font-bold
                  text-green-900
                "
              >

                {article.title}

              </h2>



              <p
                className="
                  mt-3
                  text-sm
                  text-yellow-700
                "
              >

                {article.category}

              </p>



              <p
                className="
                  mt-4
                  text-gray-600
                "
              >

                {article.content}

              </p>



            </Link>


          ))}


        </div>


      </section>


      <Footer />


    </main>
  );
}