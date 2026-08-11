"use client";

import Link from "next/link";
import { motion } from "framer-motion";


interface CoranListProps {
  sourates?: any[];
}


export default function CoranList({
  sourates = [],
}: CoranListProps) {

  return (
    <div
      className="
        mx-auto
        grid
        max-w-6xl
        gap-6
        px-6
        md:grid-cols-2
        lg:grid-cols-3
      "
    >

      {sourates.length === 0 ? (

        <div className="
          col-span-full
          rounded-3xl
          bg-green-50
          p-10
          text-center
          text-gray-600
        ">
          Chargement des sourates du Coran...
        </div>

      ) : (

        sourates.map((sourate, index) => (

          <motion.div
            key={sourate.number}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.03,
            }}
            viewport={{
              once: true,
            }}
          >

            <Link
              href={`/coran/${sourate.number}`}
              className="
                block
                rounded-3xl
                border
                border-green-100
                bg-white
                p-6
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <div className="
                flex
                items-center
                justify-between
              ">

                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-green-900
                    font-bold
                    text-white
                  "
                >
                  {sourate.number}
                </span>


                <span
                  className="
                    text-2xl
                    text-green-900
                  "
                >
                  {sourate.name}
                </span>

              </div>


              <h2
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-green-900
                "
              >
                {sourate.englishName}
              </h2>


              <p
                className="
                  mt-2
                  text-gray-600
                "
              >
                {sourate.numberOfAyahs} versets • {sourate.revelationType}
              </p>


            </Link>

          </motion.div>

        ))

      )}

    </div>
  );
}