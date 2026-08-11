import { BookOpenText } from "lucide-react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import CoranList from "@/components/CoranList";

import { getSourates } from "@/services/quranService";


export default async function CoranPage() {

  const sourates = await getSourates();


  return (
    <main className="min-h-screen bg-white">

      <Menu />


      <section className="
        bg-gradient-to-b
        from-green-50
        to-white
        py-20
        text-center
      ">

        <div className="mx-auto max-w-5xl px-6">

          <BookOpenText
            className="mx-auto mb-6 text-green-900"
            size={60}
          />


          <h1 className="
            text-5xl
            font-bold
            text-green-900
          ">
            Le Noble Coran
          </h1>


          <p className="
            mt-5
            text-lg
            text-gray-600
          ">
            Les 114 sourates du Livre d'Allah ﷻ
          </p>

        </div>

      </section>


      <section className="py-14">

        <CoranList sourates={sourates} />

      </section>


      <Footer />

    </main>
  );
}