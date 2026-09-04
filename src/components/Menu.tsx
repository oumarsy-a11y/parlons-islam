"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", path: "/" },
    { name: "Coran", path: "/coran" },
    { name: "Récitateurs", path: "/recitateurs" },
    { name: "Hadiths", path: "/hadiths" },
    { name: "Fiqh Malikite", path: "/fiqh-malikite" },
    { name: "Taṣawwuf", path: "/tassawuf" },
    { name: "Tijāniyya", path: "/tijaniyya/histoire" },
    { name: "Notre histoire", path: "/notre-histoire" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e2d3] bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-[76px] items-center justify-between">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/images/logo.png"
                alt="Parlons Islam"
                width={62}
                height={62}
                priority
                className="h-[58px] w-[58px] object-contain sm:h-[64px] sm:w-[64px]"
              />

              <div className="leading-none">
                <h1 className="text-[18px] font-bold tracking-tight text-[#243b34] sm:text-xl">
                  Parlons Islam
                </h1>

                <p className="mt-1 text-[9px] font-medium tracking-wide text-[#9a8050] sm:text-[10px]">
                  Coran · Sunna · Taṣawwuf
                </p>
              </div>
            </Link>
          </motion.div>

          {/* NAVIGATION DESKTOP */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden items-center gap-5 lg:flex"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-[13px] font-medium text-[#33483f] transition-colors duration-200 hover:text-[#9a8050]"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* BOUTON MOBILE */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e4dccb] bg-[#fbfaf6] text-[#243b34] transition hover:bg-[#f3eee4] lg:hidden"
          >
            {isOpen ? (
              <X size={22} strokeWidth={1.8} />
            ) : (
              <MenuIcon size={22} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* MENU MOBILE */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-[#eee7d9] pb-5 pt-3">
                <div className="flex flex-col gap-1">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: index * 0.03,
                      }}
                    >
                      <Link
                        href={link.path}
                        onClick={closeMenu}
                        className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-[#33483f] transition-colors hover:bg-[#f5f1e8] hover:text-[#9a8050]"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
