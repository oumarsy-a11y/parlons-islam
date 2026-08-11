import Link from "next/link";
import {
  BookOpen,
  Sparkles,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { hadiths } from "@/data/hadiths";
import { categoriesHadiths } from "@/data/categoriesHadiths";


export default function HadithsPage() {

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

          <BookOpen
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
            Les Hadiths
          </h1>


          <p
            className="
              mt-5
              text-lg
              text-gray-600
            "
          >
            Les enseignements du Prophète ﷺ,
            la sagesse de la Sunna et les paroles rapportées.
          </p>

        </div>

      </section>




      {/* Catégories */}

      <section className="py-12">

        <div
          className="
            mx-auto
            max-w-6xl
            px-6
          "
        >

          <h2
            className="
              mb-8
              text-center
              text-3xl
              font-bold
              text-green-900
            "
          >
            Explorer par catégorie
          </h2>


          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {categoriesHadiths.map((category) => (

              <div
                key={category.id}
                className="
                  rounded-3xl
                  border
                  border-green-100
                  bg-green-50
                  p-6
                  transition
                  hover:-translate-y-2
                  hover:shadow-lg
                "
              >

                <div className="text-4xl">
                  {category.icon}
                </div>


                <h3
                  className="
                    mt-4
                    text-xl
                    font-bold
                    text-green-900
                  "
                >
                  {category.name}
                </h3>


                <p
                  className="
                    mt-3
                    text-gray-600
                  "
                >
                  {category.description}
                </p>


              </div>

            ))}

          </div>

        </div>

      </section>




      {/* Liste des Hadiths */}

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

          {hadiths.map((hadith) => (

            <Link
              key={hadith.id}
              href={`/hadiths/${hadith.id}`}
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

              <Sparkles
                size={35}
                className="text-green-900"
              />


              <h2
                className="
                  mt-5
                  text-xl
                  font-bold
                  text-green-900
                "
              >
                {hadith.title}
              </h2>


              <p
                className="
                  mt-3
                  text-sm
                  text-yellow-700
                "
              >
                {hadith.category}
              </p>


              <p
                className="
                  mt-4
                  text-gray-600
                "
              >
                {hadith.text}
              </p>


            </Link>

          ))}

        </div>

      </section>



      <Footer />


    </main>
  );
}