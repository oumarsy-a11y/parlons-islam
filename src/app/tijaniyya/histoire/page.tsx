import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { histoireTijaniyya } from "@/data/histoireTijaniyya";


export default function HistoireTijaniyyaPage() {

  return (

    <main className="min-h-screen bg-white">

      <Menu />


      <section
        className="
          bg-gradient-to-b
          from-green-50
          to-white
          py-16
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

          <h1
            className="
              text-4xl
              font-bold
              text-green-900
            "
          >
            Histoire de la Ṭarîqa Tijāniyya
          </h1>


          <p
            className="
              mt-4
              text-gray-600
            "
          >
            Les origines, les maîtres et la transmission de la voie spirituelle.
          </p>

        </div>

      </section>



      <section className="py-12">

        <div
          className="
            mx-auto
            max-w-4xl
            space-y-10
            px-6
          "
        >

          {histoireTijaniyya.map((chapitre) => (

            <article
              key={chapitre.id}
              className="
                rounded-3xl
                border
                border-green-100
                bg-white
                p-8
                shadow-sm
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                  text-green-900
                "
              >
                {chapitre.title}
              </h2>


              {chapitre.subtitle && (

                <p
                  className="
                    mt-2
                    text-yellow-700
                  "
                >
                  {chapitre.subtitle}
                </p>

              )}



              <div className="mt-6 space-y-5">

                {chapitre.content.map((paragraphe, index) => (

                  <p
                    key={index}
                    className="
                      leading-relaxed
                      text-gray-700
                    "
                  >
                    {paragraphe}
                  </p>

                ))}

              </div>



              {chapitre.source && (

                <div
                  className="
                    mt-8
                    rounded-2xl
                    bg-green-50
                    p-5
                  "
                >

                  <h3
                    className="
                      font-bold
                      text-green-900
                    "
                  >
                    Source
                  </h3>


                  <p className="mt-2 text-gray-700">
                    {chapitre.source}
                  </p>

                </div>

              )}


            </article>

          ))}

        </div>

      </section>



      <Footer />

    </main>

  );

}