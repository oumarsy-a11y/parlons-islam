"use client";

import Link from "next/link";

export default function Menu() {
  const links = [
    {
      name: "Accueil",
      path: "/",
    },
    {
      name: "Coran",
      path: "/coran",
    },
    {
      name: "Hadiths",
      path: "/hadiths",
    },
    {
      name: "Fiqh Malikite",
      path: "/fiqh-malikite",
    },
    {
      name: "Taṣawwuf",
      path: "/tassawuf",
    },
    {
      name: "Tijāniyya",
      path: "/tijaniyya",
    },
    {
      name: "Histoire de l'Islam",
      path: "/histoire-islam",
    },
    {
      name: "Bibliothèque",
      path: "/bibliotheque",
    },
  ];

  return (
    <nav className="bg-green-900 p-4 text-white">
      <div className="flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="transition hover:text-yellow-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}