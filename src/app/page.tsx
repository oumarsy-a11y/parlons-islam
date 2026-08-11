import {
  BookOpen,
  Heart,
  Moon,
  Sparkles,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";


export default function Home() {

  return (
    <main className="min-h-screen bg-white">

      <Menu />


      {/* Hero */}

      <section
        className="
          bg-gradient-to-b
          from-green-50
          to-white
          py-24
          text-center
        "
      >

        <div className="mx-auto max-w-5xl px-6">


          <h1
            className="
              text-5xl
              font-bold
              text-green-900
            "
          >
            Parlons Islam
          </h1>


          <p
            className="
              mt-6
              text-xl
              text-gray-600
            "
          >
            Coran • Sunna • Fiqh Malikite • Taṣawwuf
          </p>


          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              leading-relaxed
              text-gray-600
            "
          >
            Une plateforme dédiée à la découverte du savoir islamique,
            basée sur le Coran, la Sunna et les sciences traditionnelles.
          </p>


        </div>

      </section>




      {/* Recherche */}

      <section className="bg-white py-12">

        <div className="mx-auto max-w-5xl px-6 text-center">


          <h2
            className="
              text-3xl
              font-bold
              text-green-900
            "
          >
            Rechercher dans Parlons Islam
          </h2>


          <p className="mt-3 text-gray-600">

            Trouvez des enseignements du Coran,
            des Hadiths et des sciences islamiques.

          </p>


          <div className="mt-8">

            <SearchBar />

          </div>


        </div>

      </section>




      {/* Sections principales */}

      <section className="py-16">

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-8
            px-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >


          <div
            className="
              rounded-3xl
              border
              border-green-100
              p-8
            "
          >

            <BookOpen
              size={40}
              className="text-green-900"
            />

            <h3 className="mt-5 text-xl font-bold text-green-900">
              Coran
            </h3>

            <p className="mt-3 text-gray-600">
              Lecture, traduction et récitation.
            </p>

          </div>




          <div
            className="
              rounded-3xl
              border
              border-green-100
              p-8
            "
          >

            <Sparkles
              size={40}
              className="text-green-900"
            />

            <h3 className="mt-5 text-xl font-bold text-green-900">
              Hadiths
            </h3>

            <p className="mt-3 text-gray-600">
              Les enseignements du Prophète ﷺ.
            </p>

          </div>




          <div
            className="
              rounded-3xl
              border
              border-green-100
              p-8
            "
          >

            <Moon
              size={40}
              className="text-green-900"
            />

            <h3 className="mt-5 text-xl font-bold text-green-900">
              Taṣawwuf
            </h3>

            <p className="mt-3 text-gray-600">
              La purification du cœur.
            </p>

          </div>




          <div
            className="
              rounded-3xl
              border
              border-green-100
              p-8
            "
          >

            <Heart
              size={40}
              className="text-green-900"
            />

            <h3 className="mt-5 text-xl font-bold text-green-900">
              Tijāniyya
            </h3>

            <p className="mt-3 text-gray-600">
              Histoire et enseignements de la voie.
            </p>

          </div>


        </div>

      </section>




      <Footer />


    </main>
  );
}