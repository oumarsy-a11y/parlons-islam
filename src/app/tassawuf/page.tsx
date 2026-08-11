import Link from "next/link";

import {
  Heart,
  BookOpen,
  History,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { tassawuf } from "@/data/tassawuf";


export default function TassawufPage() {

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
            Taṣawwuf
          </h1>


          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              text-gray-600
            "
          >
            La purification du cœur, l'excellence spirituelle
            et le cheminement vers Allah.
          </p>


        </div>

      </section>




      {/* Histoire du Taṣawwuf */}

      <section className="py-8">


        <div className="mx-auto max-w-6xl px-6">


          <Link
            href="/tassawuf/histoire"
            className="
              flex
              items-center
              gap-4
              rounded-3xl
              bg-green-50
              p-8
              transition
              hover:shadow-lg
            "
          >

            <History
              size={45}
              className="text-green-900"
            />


            <div>

              <h2
                className="
                  text-2xl
                  font-bold
                  text-green-900
                "
              >
                Histoire du Taṣawwuf
              </h2>


              <p className="mt-2 text-gray-600">
                Des origines spirituelles de l'Islam
                aux grandes voies soufies.
              </p>

            </div>


          </Link>


        </div>


      </section>





      {/* Articles */}

      <section className="py-12">


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


          {tassawuf.map((article) => (

            <Link

              key={article.id}

              href={`/tassawuf/articles/${article.slug}`}

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
                  line-clamp-4
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