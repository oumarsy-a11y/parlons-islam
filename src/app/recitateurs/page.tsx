import Image from "next/image";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { reciters } from "@/data/reciters";


export default function RecitateursPage() {

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


          <h1
            className="
              text-5xl
              font-bold
              text-green-900
            "
          >
            Nos récitateurs
          </h1>


          <p
            className="
              mt-5
              text-lg
              text-gray-600
            "
          >
            Découvrez les voix qui transmettent la Parole d'Allah ﷻ
            à travers différentes riwāyāt.
          </p>


        </div>

      </section>




      {/* Liste des récitateurs */}

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


          {reciters.map((reciter) => (


            <div
              key={reciter.id}
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


              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-green-900
                  text-3xl
                  text-white
                "
              >
                🎙️
              </div>




              <h2
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-green-900
                "
              >
                {reciter.name}
              </h2>




              <p className="mt-3 text-gray-600">
                🌍 {reciter.country}
              </p>



              <p className="mt-2 text-gray-600">
                📖 {reciter.riwaya}
              </p>




              {reciter.source && (

                <a
                  href={reciter.source}
                  target="_blank"
                  className="
                    mt-6
                    inline-block
                    rounded-full
                    bg-green-900
                    px-6
                    py-3
                    text-white
                    transition
                    hover:bg-green-800
                  "
                >
                  Voir la source
                </a>

              )}


            </div>


          ))}


        </div>


      </section>




      <Footer />


    </main>
  );
}