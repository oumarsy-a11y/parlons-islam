"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { searchContent } from "@/services/searchService";


export default function SearchBar() {

  const [query, setQuery] = useState("");

  const results = searchContent(query);



  return (
    <div className="relative mx-auto w-full max-w-2xl">


      {/* Barre de recherche */}

      <div
        className="
          flex
          items-center
          rounded-2xl
          border
          border-green-200
          bg-white
          px-5
          py-3
          shadow-sm
        "
      >

        <Search
          size={22}
          className="text-green-900"
        />


        <input
          type="text"
          placeholder="Rechercher dans Parlons Islam..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            ml-3
            w-full
            outline-none
            text-gray-700
          "
        />

      </div>




      {/* Résultats */}

      {query && results.length > 0 && (

        <div
          className="
            absolute
            z-50
            mt-3
            w-full
            rounded-2xl
            border
            border-green-100
            bg-white
            p-4
            shadow-xl
          "
        >

          {results.map((result) => (

            <Link
              key={`${result.type}-${result.id}`}
              href={result.path}
              className="
                block
                rounded-xl
                p-4
                transition
                hover:bg-green-50
              "
            >

              <p
                className="
                  text-sm
                  font-semibold
                  text-yellow-700
                "
              >
                {result.type}
              </p>


              <h3
                className="
                  font-bold
                  text-green-900
                "
              >
                {result.title}
              </h3>


              <p
                className="
                  mt-1
                  text-sm
                  text-gray-600
                "
              >
                {result.description}
              </p>


            </Link>

          ))}

        </div>

      )}



      {query && results.length === 0 && (

        <div
          className="
            absolute
            z-50
            mt-3
            w-full
            rounded-2xl
            bg-white
            p-5
            text-center
            text-gray-600
            shadow-xl
          "
        >
          Aucun résultat trouvé.
        </div>

      )}


    </div>
  );
}