"use client";

import { useState } from "react";

type QuranSearchProps = {
  onSearch: (value: string) => void;
};

export default function QuranSearch({
  onSearch,
}: QuranSearchProps) {

  const [search, setSearch] = useState("");


  function handleChange(value: string) {
    setSearch(value);
    onSearch(value);
  }


  return (
    <div className="mx-auto mb-10 max-w-xl">

      <input
        type="text"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Rechercher une sourate..."
        className="w-full rounded-full border border-green-200 bg-white px-6 py-4 text-gray-700 shadow-md outline-none transition focus:border-green-900"
      />

    </div>
  );
}