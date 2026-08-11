"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Menu() {
  const links = [
    { name: "Accueil", path: "/" },
    { name: "Coran", path: "/coran" },
    { name: "Récitateurs", path: "/recitateurs" },
    { name: "Hadiths", path: "/hadiths" },
    { name: "Fiqh Malikite", path: "/fiqh-malikite" },
    { name: "Taṣawwuf", path: "/tassawuf" },
    { name: "Tijāniyya", path: "/tijaniyya" },
    { name: "Histoire de l'Islam", path: "/histoire-islam" },
    { name: "Bibliothèque", path: "/bibliotheque" },
  ];

  return (
    <nav className="bg-white px-6 py-4 text-green-950 shadow-md">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

        {/* Logo + identité */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <Link href="/" className="flex items-center gap-4">

            <Image
              src="/images/logo.png"
              alt="Parlons Islam"
              width={110}
              height={110}
              priority
            />


            <div>

              <h1 className="text-3xl font-bold tracking-wide text-green-900">
                Parlons Islam
              </h1>


              <p className="text-sm italic text-yellow-600">
                Coran • Sunna • Taṣawwuf
              </p>


            </div>


          </Link>


        </motion.div>





        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}

          className="
            flex
            flex-wrap
            justify-center
            gap-5
            text-sm
            md:text-base
          "
        >

          {links.map((link) => (

            <Link
              key={link.name}
              href={link.path}
              className="
                font-medium
                transition
                duration-300
                hover:text-yellow-600
              "
            >
              {link.name}
            </Link>

          ))}


        </motion.div>


      </div>


    </nav>
  );
}