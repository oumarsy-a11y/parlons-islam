import Link from "next/link";
import {
  ArrowLeft,
  Heart,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { tassawuf } from "@/data/tassawuf";


interface PageProps {
  params: Promise<{
    id: string;
  }>;
}



export default async function TassawufDetailPage({
  params,
}: PageProps) {


  const { id } = await params;


  const article = tassawuf.find(
    (item) => item.id === Number(id)
  );



  if (!article) {

    return (

      <main className="min-h-screen bg-white">

        <Menu />


        <section className="py-20 text-center">


          <h1
            className="
              text-3xl
              font-bold
              text-green-900
            "
          >
            Enseignement introuvable
          </h1>



          <Link
            href="/tassawuf"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-green-700
              underline
            "
          >

            <ArrowLeft size={18} />

            Retour au Taṣawwuf

          </Link>


        </section>


        <Footer />

      </main>

    );

  }




  return (

    <main className="min-h-screen bg-white">


      <Menu />



      {/* En-tête */}

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
            max-w-4xl
            px-6
            text-center
          "
        >

          <Heart
            size={60}
            className="
              mx-auto
              text-green-900
            "
          />



          <h1
            className="
              mt-6
              text-4xl
              font-bold
              text-green-900
            "
          >

            {article.title}

          </h1>



          <p
            className="
              mt-4
              text-yellow-700
            "
          >

            {article.category}

          </p>


        </div>


      </section>





      {/* Contenu */}

      <section className="py-12">


        <div
          className="
            mx-auto
            max-w-4xl
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


            <p
              className="
                whitespace-pre-line
                text-lg
                leading-relaxed
                text-gray-700
              "
            >

              {article.content}

            </p>



          </article>




          <div
            className="
              mt-8
              rounded-3xl
              bg-green-50
              p-8
            "
          >


            <h2
              className="
                font-bold
                text-green-900
              "
            >
              Source
            </h2>


            <p className="mt-3 text-gray-700">
              {article.source}
            </p>


          </div>



        </div>


      </section>




      <Footer />


    </main>

  );

}