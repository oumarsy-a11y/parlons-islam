"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  Heart,
  History,
  Home,
  Library,
  Menu as MenuIcon,
  ScrollText,
  Star,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Menu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Accueil", path: "/", icon: Home },
    { name: "Coran", path: "/coran", icon: BookOpen },
    { name: "Récitateurs", path: "/recitateurs", icon: Users },
    { name: "Hadiths", path: "/hadiths", icon: ScrollText },
    { name: "Fiqh Malikite", path: "/fiqh-malikite", icon: Star },
    { name: "Taṣawwuf", path: "/tassawuf", icon: Heart },
    { name: "Tijāniyya", path: "/tijaniyya", icon: Star },
    { name: "Notre histoire", path: "/notre-histoire", icon: History },
    { name: "Bibliothèque", path: "/bibliotheque", icon: Library },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#ded7c7]/80 bg-[#fcfcfa]/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">

          {/* ===================================================== */}
          {/* LOGO */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="group flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#d8ccb0] bg-white shadow-sm transition duration-300 group-hover:shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Parlons Islam"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold tracking-tight text-[#263d35]">
                  Parlons Islam
                </h1>

                <p className="text-xs tracking-wide text-[#9a8659]">
                  Coran · Sunna · Taṣawwuf
                </p>
              </div>
            </Link>
          </motion.div>

          {/* ===================================================== */}
          {/* DESKTOP NAVIGATION */}
          {/* ===================================================== */}

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden items-center gap-1 lg:flex"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="group relative rounded-xl px-3 py-2 text-sm font-medium text-[#46534d] transition duration-300 hover:bg-[#f3efe4] hover:text-[#263d35]"
              >
                {link.name}

                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#b59a5b] transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}
          </motion.nav>

          {/* ===================================================== */}
          {/* BOUTON MOBILE */}
          {/* ===================================================== */}

          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8ccb0] bg-white text-[#263d35] shadow-sm transition hover:bg-[#f3efe4] lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>

        {/* ===================================================== */}
        {/* MENU MOBILE */}
        {/* ===================================================== */}

        <motion.div
          initial={false}
          animate={{
            height: mobileOpen ? "auto" : 0,
            opacity: mobileOpen ? 1 : 0,
          }}
          className="overflow-hidden lg:hidden"
        >
          <nav className="border-t border-[#ded7c7] py-4">
            <div className="grid gap-1 sm:grid-cols-2">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#46534d] transition hover:bg-[#f3efe4] hover:text-[#263d35]"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="text-[#9a8659]"
                    />

                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-center gap-3 border-t border-[#ded7c7] pt-4 text-xs tracking-[0.2em] text-[#9a8659]">
              <span className="h-px w-8 bg-[#c5ae73]" />
              <span>العلم · العمل · الإحسان</span>
              <span className="h-px w-8 bg-[#c5ae73]" />
            </div>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}