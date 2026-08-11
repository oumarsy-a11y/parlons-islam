import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
} from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import { hadiths } from "@/data/hadiths";


interface PageProps {
  params: Promise<{
    id: string;
  }>;
}


export default async function HadithPage({
  params,
}: PageProps) {

  const { id } = await params;

  const hadithId = Number(id);


  const hadith = hadiths.find(
    (item) => item.id === hadithId
  );


  if (!hadith) {

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
            Hadith introuvable
          </h1>


          <Link
            href="/hadiths"
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

            Retour aux Hadiths

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

          <BookOpen
            size={55}
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
            {hadith.title}
          </h1>


          <p
            className="
              mt-4
              text-yellow-700
            "
          >
            {hadith.source}
          </p>


        </div>


      </section>



      {/* Contenu */}

      <section className="py-12">


        <div
          className="
            mx-auto
            max-w-4xl
            space-y-8
            px-6
          "
        >


          {/* Arabe */}

          <div
            className="
              rounded-3xl
              bg-green-50
              p-8
              text-center
            "
          >

            <p
              dir="rtl"
              className="
                text-4xl
                leading-loose
                text-green-900
              "
            >
              {hadith.arabic}
            </p>

          </div>



          {/* Texte */}

          <div
            className="
              rounded-3xl
              border
              border-green-100
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
              Le hadith
            </h2>


            <p
              className="
                mt-5
                text-lg
                leading-relaxed
                text-gray-700
              "
            >
              {hadith.text}
            </p>


          </div>




          {/* Explication */}

          <div
            className="
              rounded-3xl
              bg-yellow-50
              p-8
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-green-900
              "
            >
              Explication
            </h2>


            <p
              className="
                mt-5
                leading-relaxed
                text-gray-700
              "
            >
              {hadith.explanation}
            </p>


          </div>


        </div>


      </section>



      <Footer />


    </main>

  );

}